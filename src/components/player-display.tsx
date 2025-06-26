import { EplorRenderer, type LyricLine } from "@applemusic-like-lyrics/core";
import { BackgroundRender, LyricPlayer } from "@applemusic-like-lyrics/react";
import { useContext, useEffect, useRef, useState } from "react";
import { ApiError } from "../api/client";
import type { PlayerState } from "../api/types";
import { apiLyricsIntoLyricLines } from "../utils/lyrics";
import { LavaApiContext } from "./api-provider";
import { NoPlayer } from "./no-player";

interface PlayerDisplayProps {
    guildId: string;
}

export function PlayerDisplay({ guildId }: PlayerDisplayProps) {
    const api = useContext(LavaApiContext);

    const playerStateRef = useRef<PlayerState | null>(null);
    const lastFetchTimeRef = useRef<number>(0);

    const [lyricLines, setLyricLines] = useState<LyricLine[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState<PlayerState | null>(null);
    const [isPlayerNotFound, setIsPlayerNotFound] = useState(false);

    useEffect(() => {
        async function fetchPlayerState() {
            try {
                const playerState = await api.getPlayerState(guildId);
                playerStateRef.current = playerState;
                setPlayerState(playerState);
                setIsPlayerNotFound(false);
                lastFetchTimeRef.current = Date.now();

                if (playerState.current_track) {
                    setCurrentTime(playerState.current_track.position | 0); // Convert to integer
                }
            } catch (error) {
                if (error instanceof ApiError && error.status === 404) {
                    setIsPlayerNotFound(true);
                    setPlayerState(null);
                    playerStateRef.current = null;
                } else {
                    console.error("Failed to fetch player state:", error);
                }
            }
        }

        fetchPlayerState();
        const interval = setInterval(fetchPlayerState, 2000); // Reduced interval for better sync

        return () => {
            clearInterval(interval);
        };
    }, [api, guildId]);

    useEffect(() => {
        async function fetchLyrics() {
            if (isPlayerNotFound) return;

            try {
                const lyrics = await api.getLyrics(guildId);
                if (lyrics.has_lyrics) {
                    const lines = apiLyricsIntoLyricLines(lyrics);
                    setLyricLines(lines);
                } else {
                    setLyricLines([
                        {
                            words: [{ word: "No lyrics found :(", startTime: 0, endTime: 1000 }],
                            translatedLyric: "",
                            romanLyric: "",
                            startTime: 0,
                            endTime: 1000,
                            isBG: false,
                            isDuet: false
                        }
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch lyrics:", error);
                setLyricLines([
                    {
                        words: [{ word: "An error occurred while fetching lyrics :(", startTime: 0, endTime: 1000 }],
                        translatedLyric: "",
                        romanLyric: "",
                        startTime: 0,
                        endTime: 1000,
                        isBG: false,
                        isDuet: false
                    }
                ]);
            }
        }

        fetchLyrics();
    }, [api, guildId, playerState?.current_track?.uri, isPlayerNotFound]);

    useEffect(() => {
        let animationId: number;

        const frame = () => {
            const currentPlayerState = playerStateRef.current;

            if (currentPlayerState?.current_track) {
                // Don't run the clock if paused
                if (!currentPlayerState.is_paused) {
                    const now = Date.now();
                    const elapsedSinceLastFetch = now - lastFetchTimeRef.current;
                    const calculatedTime = (currentPlayerState.current_track.position + elapsedSinceLastFetch) | 0; // Convert to integer

                    setCurrentTime(calculatedTime);
                } else {
                    // If paused, use the position from the track without adding elapsed time
                    setCurrentTime(currentPlayerState.current_track.position | 0);
                }
            }

            animationId = requestAnimationFrame(frame);
        };

        animationId = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [playerState]); // Added playerState as dependency

    // Show no player component when player is not found (404)
    if (isPlayerNotFound) {
        return <NoPlayer />;
    }

    return (
        <div className="relative h-full w-full overflow-hidden">
            <LyricPlayer
                className="relative z-10 h-full w-full overflow-hidden"
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
                lyricLines={lyricLines}
                currentTime={currentTime}
                enableBlur={true}
                enableSpring={true}
                enableScale={true}
            />
            <BackgroundRender className="absolute top-0 left-0 h-full w-full" renderer={EplorRenderer} album={`/.proxy/api/player/${guildId}/artwork`} />
        </div>
    );
}
