export function Loading() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <img src="/logo.png" className="w-12 h-12 animate-spin" style={{ animationDuration: "3s" }} />
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                            <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
                            <div className="absolute inset-0 rounded-full border border-white/5 animate-ping" style={{ animationDelay: "0.5s", animationDuration: "2s" }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Loading Discord</h2>

                    <p className="text-white/70 text-lg mb-8 leading-relaxed">Connecting to Discord and initializing the music player...</p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center justify-center mb-3">
                            <div className="bg-blue-500/20 rounded-lg p-2 mr-3">
                                <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                            </div>
                            <span className="text-white font-semibold">Initializing</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: "60%" }} />
                        </div>
                        <p className="text-white/80 text-sm">Setting up Discord integration...</p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse" style={{ animationDelay: "2s", animationDuration: "4s" }} />
                <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-white animate-pulse" style={{ animationDelay: "1s", animationDuration: "3s" }} />
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDelay: "3s", animationDuration: "5s" }} />
                <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-white animate-pulse" style={{ animationDelay: "4s", animationDuration: "6s" }} />
            </div>
        </div>
    );
}
