export function NoPlayer() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <img src="/logo.png" className="w-12 h-12" />
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                            <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">No Player Active</h2>

                    <p className="text-white/70 text-lg mb-8 leading-relaxed">The music player isn't currently active in this server. Start your musical journey by playing a song!</p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center justify-center mb-3">
                            <div className="bg-green-500/20 rounded-lg p-2 mr-3">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold">Get Started</span>
                        </div>
                        <p className="text-white/80 text-sm">
                            Use <code className="bg-white/20 px-2 py-1 rounded text-green-300 font-mono">/play</code> command to play your favorite songs
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse" style={{ animationDelay: "2s", animationDuration: "4s" }} />
                <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-white animate-pulse" style={{ animationDelay: "1s", animationDuration: "3s" }} />
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDelay: "3s", animationDuration: "5s" }} />
            </div>
        </div>
    );
}
