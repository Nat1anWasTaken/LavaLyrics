export type {
    FilterRequest,
    GuildId,
    HTTPValidationError,
    LoopMode,
    ApiLyricsLineInfo as LyricLineInfo,
    ApiLyricsInfo as LyricsInfo,
    PlayerState,
    PlayRequest,
    QueueInfo,
    SkipRequest,
    TrackIndex,
    TrackInfo,
    ValidationError,
    VolumeRequest
} from "./types";

export { LavaLyricsAPI } from "./client";

export * from "./utils";

import { LavaLyricsAPI } from "./client";
export const api = new LavaLyricsAPI();
