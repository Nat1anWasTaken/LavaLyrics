import type { LyricLine } from "@applemusic-like-lyrics/core";
import type { ApiLyricsInfo } from "../api/types";

export function apiLyricsIntoLyricLines(lyrics: ApiLyricsInfo): LyricLine[] {
    if (!lyrics.has_lyrics || !lyrics.lyrics || lyrics.lyrics.length === 0) {
        return [];
    }

    return lyrics.lyrics.map((lyricLine, index) => {
        // Convert timestamp from seconds to milliseconds
        const startTime = Math.round(lyricLine.timestamp * 1000);

        // Calculate end time - use next line's timestamp or add a default duration
        const nextLineTimestamp = lyrics.lyrics[index + 1]?.timestamp;
        const endTime = nextLineTimestamp ? Math.round(nextLineTimestamp * 1000) : startTime + 3000; // Default 3 second duration for last line

        return {
            words: [
                {
                    word: lyricLine.text,
                    startTime: startTime,
                    endTime: endTime
                }
            ],
            translatedLyric: "", // No translation available in API data
            romanLyric: "", // No romanized lyrics available in API data
            startTime: startTime,
            endTime: endTime,
            isBG: false, // Default to regular lyrics, not background
            isDuet: false // Default to non-duet lyrics
        };
    });
}
