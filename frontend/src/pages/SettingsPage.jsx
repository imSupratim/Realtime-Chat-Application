import React from "react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-sm text-white/80">Work in progress</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
            Coming soon
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70">
          We’re crafting something thoughtful. Hang tight while we put the final
          touches.
        </p>

        {/* Loader */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white/90 animate-spin"></div>
          <div className="flex items-end gap-1">
            <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce"></span>
            <span className="h-2 w-2 rounded-full bg-white/60 animate-bounce"></span>
            <span className="h-2 w-2 rounded-full bg-white/50 animate-bounce"></span>
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} PingMe. All rights reserved. Made with ❤️ by Supratim Mandal
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
