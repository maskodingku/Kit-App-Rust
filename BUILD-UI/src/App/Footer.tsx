export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Kit App Rust &bull; Desktop Application Starter Kit
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>React 19</span>
          <span>&bull;</span>
          <span>Tailwind v4</span>
          <span>&bull;</span>
          <span>Rust CDYLIB</span>
          <span>&bull;</span>
          <span className="text-cyan-300">Tauri v2</span>
        </div>
      </div>
    </footer>
  )
}
