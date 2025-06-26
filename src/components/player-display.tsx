import { EplorRenderer, type LyricLine } from "@applemusic-like-lyrics/core";
import { BackgroundRender, LyricPlayer } from "@applemusic-like-lyrics/react";
import { useContext, useEffect, useRef, useState } from "react";
import type { PlayerState } from "../api/types";
import { apiLyricsIntoLyricLines } from "../utils/lyrics";
import { LavaApiContext } from "./api-provider";

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

    useEffect(() => {
        async function fetchPlayerState() {
            const playerState = await api.getPlayerState(guildId);
            playerStateRef.current = playerState;
            setPlayerState(playerState);
            lastFetchTimeRef.current = Date.now();

            if (playerState.current_track) {
                setCurrentTime(playerState.current_track.position | 0); // Convert to integer
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
            const lyrics = await api.getLyrics(guildId);
            const lines = apiLyricsIntoLyricLines(lyrics);
            setLyricLines(lines);
        }

        fetchLyrics();
    }, [api, guildId, playerState?.current_track?.uri]);

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

    return (
        <div className="relative h-full w-full bg-gray-800 overflow-hidden">
            <LyricPlayer
                className="relative z-10 h-full w-full overflow-hidden"
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
                lyricLines={lyricLines}
                currentTime={currentTime}
            />
            <BackgroundRender
                className="absolute top-0 left-0 h-full w-full"
                renderer={EplorRenderer}
                album={playerStateRef.current?.current_track?.artwork_url ?? "https://dummyimage.com/600x400/000/fff&text=+"}
            />
        </div>
    );
}
