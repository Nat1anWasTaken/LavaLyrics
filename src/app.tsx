import { useEffect, useState } from "react";
import { LavaApiProvider } from "./components/api-provider";
import { Loading } from "./components/loading";
import { PlayerDisplay } from "./components/player-display";
import { discordSDK } from "./discord";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initializeDiscord = async () => {
            try {
                await discordSDK.initialize();
            } finally {
                setIsLoading(false);
            }
        };

        initializeDiscord();
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen w-screen">
                <Loading />
            </div>
        );
    }

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
