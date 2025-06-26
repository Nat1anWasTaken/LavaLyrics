import type { LyricLine } from "@applemusic-like-lyrics/core";
import type { ApiLyricsInfo } from "../api/types";

export function apiLyricsIntoLyricLines(lyrics: ApiLyricsInfo): LyricLine[] {
    if (!lyrics.has_lyrics || !lyrics.lyrics || lyrics.lyrics.length === 0) {
        return [];
    }

    return lyrics.lyrics.map((lyricLine, index) => {
        const startTime = Math.round(lyricLine.timestamp * 1000);

        const nextLineTimestamp = lyrics.lyrics[index + 1]?.timestamp;
        const endTime = nextLineTimestamp ? Math.round(nextLineTimestamp * 1000) : startTime + 3000;

        return {
            words: [
                {
                    word: lyricLine.text,
                    startTime: startTime,
                    endTime: endTime
                }
            ],
            translatedLyric: "",
            romanLyric: "",
            startTime: startTime,
            endTime: endTime,
            isBG: false,
            isDuet: false
        };
    });
}
