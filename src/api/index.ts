// Export all types
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

// Export the main API client
export { LavaLyricsAPI } from "./client";

// Export utilities
export * from "./utils";

// Create a default instance for convenience
import { LavaLyricsAPI } from "./client";
export const api = new LavaLyricsAPI();
