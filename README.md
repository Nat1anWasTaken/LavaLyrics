[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Lava Lyrics

Discord Activity for [Lava Music Bot][lava-main] with Apple Music-style animated lyrics.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNat1anWasTaken%2Flava-lyrics)

## Setup Instructions

### 1. Get a Vercel Account

Create an account at [vercel.com](https://vercel.com)

### 2. Deploy to Vercel

Click the "Deploy with Vercel" button above and follow the deployment process.

### 3. Setup Discord Developer Portal

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. Navigate to **Activities** in the left sidebar
4. Enable Activities for your application
5. Add URL mappings:
    - **Main App**:
        - **Target URL**: Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
        - **Prefix**: `/`
    - **API Proxy**:
        - **Target URL**: Your Lava bot's API URL (e.g., `https://your-lava-api.com`)
        - **Prefix**: `/api`

For detailed URL mapping setup, see [Discord's URL Mapping Guide](https://discord.com/developers/docs/activities/development-guides/local-development#url-mapping).

### 4. Use in Discord

1. Make sure [Lava Music Bot][lava-main] is in your Discord server
2. Start playing music with Lava
3. Launch the Lava Lyrics activity in Discord
4. Enjoy Apple Music-style animated lyrics!

## Requirements

- [Lava Music Bot][lava-main] must be installed in your Discord server
- Discord server with Activities enabled

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Nat1anWasTaken/lava-lyrics.svg?style=for-the-badge
[contributors-url]: https://github.com/Nat1anWasTaken/lava-lyrics/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nat1anWasTaken/lava-lyrics.svg?style=for-the-badge
[forks-url]: https://github.com/Nat1anWasTaken/lava-lyrics/network/members
[stars-shield]: https://img.shields.io/github/stars/Nat1anWasTaken/lava-lyrics.svg?style=for-the-badge
[stars-url]: https://github.com/Nat1anWasTaken/lava-lyrics/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nat1anWasTaken/lava-lyrics.svg?style=for-the-badge
[issues-url]: https://github.com/Nat1anWasTaken/lava-lyrics/issues
[license-shield]: https://img.shields.io/github/license/Nat1anWasTaken/lava-lyrics.svg?style=for-the-badge
[license-url]: https://github.com/Nat1anWasTaken/lava-lyrics/blob/main/LICENSE
[lava-main]: https://github.com/Nat1anWasTaken/Lava
