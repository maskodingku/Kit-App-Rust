import { Box } from 'lucide-react'

export function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl sticky top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/20">
            <Box className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-sm sm:text-base">Kit App Rust</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Starter Kit
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Template Aplikasi Desktop Portabel</p>
          </div>
        </div>

        <div className="text-xs text-slate-400 font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
          v1.0.0
        </div>
      </div>
    </header>
  )
}
