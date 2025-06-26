import type { ApiLyricsLineInfo, LoopMode, TrackInfo } from "./types";

/**
 * Format track duration from milliseconds to MM:SS format
 */
export function formatDuration(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Format track position as a percentage of total duration
 */
export function getTrackProgress(track: TrackInfo): number {
    if (track.duration === 0) return 0;
    return Math.min((track.position / track.duration) * 100, 100);
}

/**
 * Find the current lyric line based on track position
 */
export function getCurrentLyricLine(lyrics: ApiLyricsLineInfo[], positionMs: number): ApiLyricsLineInfo | null {
    if (!lyrics.length) return null;

    const positionSeconds = positionMs / 1000;

    // Find the last lyric line that has already passed
    for (let i = lyrics.length - 1; i >= 0; i--) {
        if (lyrics[i].timestamp <= positionSeconds) {
            return lyrics[i];
        }
    }

    return null;
}

/**
 * Get upcoming lyric lines within a time range
 */
export function getUpcomingLyrics(lyrics: ApiLyricsLineInfo[], positionMs: number, rangeSeconds = 10): ApiLyricsLineInfo[] {
    const positionSeconds = positionMs / 1000;
    const endTime = positionSeconds + rangeSeconds;

    return lyrics.filter((line) => line.timestamp >= positionSeconds && line.timestamp <= endTime);
}

/**
 * Convert loop mode number to human-readable string
 */
export function getLoopModeText(mode: LoopMode): string {
    switch (mode) {
        case 0:
            return "Off";
        case 1:
            return "Track";
        case 2:
            return "Queue";
        default:
            return "Unknown";
    }
}

/**
 * Validate volume range (0-100)
 */
export function validateVolume(volume: number): number {
    return Math.max(0, Math.min(100, Math.round(volume)));
}

/**
 * Check if a track is currently playing based on player state
 */
export function isTrackActive(track: TrackInfo | null, isPlaying: boolean): boolean {
    return !!(track && isPlaying);
}

/**
 * Calculate remaining time for a track
 */
export function getRemainingTime(track: TrackInfo): number {
    return Math.max(0, track.duration - track.position);
}

/**
 * Format guild ID for display (Discord activities might need special formatting)
 */
export function formatGuildId(guildId: number): string {
    return guildId.toString();
}
