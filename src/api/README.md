# Lava Lyrics API Wrapper

This API wrapper provides a TypeScript interface for the Lava Music Bot API, specifically designed for Discord activities. All requests are automatically routed through the `/.proxy/` prefix as required by Discord's activity framework.

## Usage

### Basic Setup

```typescript
import { LavaLyricsAPI, api } from "./api";

// Use the default instance
const playerState = await api.getPlayerState(guildId);

// Or create a custom instance
const customApi = new LavaLyricsAPI("https://your-custom-domain.com");
```

### Player Control

```typescript
// Get current player state
const state = await api.getPlayerState(guildId);

// Play a track
await api.playTrack(guildId, {
    query: "Never Gonna Give You Up Rick Astley",
    shuffle: false
});

// Control playback
await api.pausePlayer(guildId);
await api.resumePlayer(guildId);
await api.stopPlayer(guildId);

// Skip to next track
await api.skipTrack(guildId);

// Skip to specific track index
await api.skipTrack(guildId, { target: 3 });
```

### Queue Management

```typescript
// Get queue
const queue = await api.getQueue(guildId, 10); // limit to 10 tracks

// Clear entire queue
await api.clearQueue(guildId);

// Remove specific track
await api.removeTrack(guildId, trackIndex);
```

### Volume and Settings

```typescript
// Set volume (0-100)
await api.setVolume(guildId, 75);

// Toggle shuffle
await api.toggleShuffle(guildId, true);

// Set loop mode (0=off, 1=track, 2=queue)
await api.setLoopMode(guildId, 1);

// Toggle autoplay
await api.toggleAutoplay(guildId, true);
```

### Lyrics

```typescript
// Get all lyrics for current track
const lyrics = await api.getLyrics(guildId);

// Get current lyrics (within time range of current position)
const currentLyrics = await api.getCurrentLyrics(guildId, 5.0);

// Toggle lyrics display
await api.toggleLyrics(guildId);
```

### Audio Filters

```typescript
// Get active filters
const filters = await api.getFilters(guildId);

// Apply a filter
await api.setFilter(guildId, {
    filter_name: "bassboost",
    parameters: { gain: 0.5 }
});

// Remove a filter
await api.setFilter(guildId, {
    filter_name: "bassboost",
    parameters: null
});
```

## Utility Functions

The API wrapper includes several utility functions to help with common operations:

```typescript
import { formatDuration, getTrackProgress, getCurrentLyricLine, getUpcomingLyrics, getLoopModeText, validateVolume } from "./api";

// Format track duration
const formattedTime = formatDuration(track.duration); // "3:45"

// Get track progress percentage
const progress = getTrackProgress(track); // 45.2

// Find current lyric line
const currentLine = getCurrentLyricLine(lyrics.lyrics, track.position);

// Get upcoming lyrics
const upcoming = getUpcomingLyrics(lyrics.lyrics, track.position, 10);

// Convert loop mode to text
const loopText = getLoopModeText(state.loop_mode); // "Track"

// Validate volume
const safeVolume = validateVolume(150); // 100 (clamped)
```

## Types

All TypeScript types are exported for use in your application:

```typescript
import type { PlayerState, TrackInfo, QueueInfo, LyricsInfo, PlayRequest, SkipRequest, VolumeRequest, FilterRequest, LoopMode, GuildId } from "./api";
```

## Error Handling

The API wrapper throws errors for failed requests. Wrap your API calls in try-catch blocks:

```typescript
try {
    const state = await api.getPlayerState(guildId);
    console.log("Player state:", state);
} catch (error) {
    console.error("Failed to get player state:", error.message);
}
```

## Discord Activity Integration

This wrapper is specifically designed for Discord activities. All requests are automatically prefixed with `/.proxy/` to work with Discord's proxy system. The wrapper handles:

- Automatic proxy routing
- JSON request/response handling
- TypeScript type safety
- Error handling
- Empty response handling

No additional configuration is needed for Discord activity integration.
