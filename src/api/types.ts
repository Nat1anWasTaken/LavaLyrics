export interface ValidationError {
    loc: (string | number)[];
    msg: string;
    type: string;
}

export interface HTTPValidationError {
    detail?: ValidationError[];
}

export interface ApiLyricsLineInfo {
    text: string;
    timestamp: number;
}

export interface ApiLyricsInfo {
    lyrics: ApiLyricsLineInfo[];
    has_lyrics: boolean;
}

export interface TrackInfo {
    title: string;
    author: string;
    duration: number;
    position: number;
    uri: string;
    artwork_url?: string | null;
    requester: number;
}

export interface PlayerState {
    is_playing: boolean;
    is_paused: boolean;
    is_connected: boolean;
    current_track?: TrackInfo | null;
    volume: number;
    loop_mode: number;
    shuffle: boolean;
    autoplay: boolean;
    position: number;
    filters: string[];
    lyrics_loaded: boolean;
}

export interface QueueInfo {
    tracks: TrackInfo[];
    total_count: number;
}

export interface PlayRequest {
    query: string;
    index?: number | null;
    shuffle?: boolean;
}

export interface SkipRequest {
    target?: number | null;
    move?: boolean;
}

export interface VolumeRequest {
    volume: number;
}

export interface FilterRequest {
    filter_name: string;
    parameters?: Record<string, unknown> | null;
}

export type LoopMode = 0 | 1 | 2;
export type GuildId = string;
export type TrackIndex = number;
