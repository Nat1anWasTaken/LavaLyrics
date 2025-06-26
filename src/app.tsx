import { useEffect } from "react";
import { LavaApiProvider } from "./components/api-provider";
import { PlayerDisplay } from "./components/player-display";
import { discordSDK } from "./discord";

function App() {
    useEffect(() => {
        discordSDK.initialize();
    }, []);

    const guildId = discordSDK.getSDK().guildId;

    if (!guildId) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-black">
                <div className="text-2xl font-bold">
                    <p>Please select a guild</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <LavaApiProvider>
                <div className="h-screen w-screen">
                    <PlayerDisplay guildId={guildId} />
                </div>
            </LavaApiProvider>
        </>
    );
}

export default App;
