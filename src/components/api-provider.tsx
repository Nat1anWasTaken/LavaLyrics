import { createContext } from "react";
import { LavaLyricsAPI } from "../api/client";

export const LavaApiContext = createContext<LavaLyricsAPI>(new LavaLyricsAPI());

export function LavaApiProvider({ children }: { children: React.ReactNode }) {
    const api = new LavaLyricsAPI();

    return <LavaApiContext.Provider value={api}>{children}</LavaApiContext.Provider>;
}
