import { DiscordSDK } from "@discord/embedded-app-sdk";

export class DiscordSDKSingleton {
  private static instance: DiscordSDKSingleton | null = null;
  private sdk: DiscordSDK;

  private constructor() {
    this.sdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
  }

  public static getInstance(): DiscordSDKSingleton {
    if (!DiscordSDKSingleton.instance) {
      DiscordSDKSingleton.instance = new DiscordSDKSingleton();
    }
    return DiscordSDKSingleton.instance;
  }

  public async initialize(): Promise<void> {
    await this.sdk.ready();
    console.log("Discord SDK is ready");
  }

  public getSDK(): DiscordSDK {
    return this.sdk;
  }
}

export const discordSDK = DiscordSDKSingleton.getInstance();
