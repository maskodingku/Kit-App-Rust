import { Terminal } from 'lucide-react'

export function QuickCommands() {
  return (
    <div className="max-w-4xl mx-auto rounded-xl bg-slate-900/70 border border-white/10 p-4 mb-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
        <Terminal className="h-4 w-4 text-cyan-400" />
        Perintah Orkestrasi (Root Project)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
        <div className="p-3 rounded-lg bg-black/40 border border-white/5">
          <div className="text-cyan-400 font-bold mb-1">$ npm run dev</div>
          <div className="text-slate-400 font-sans text-[11px]">
            Build UI &amp; DLL lalu jalankan aplikasi desktop mode development.
          </div>
        </div>

        <div className="p-3 rounded-lg bg-black/40 border border-white/5">
          <div className="text-emerald-400 font-bold mb-1">$ npm run build</div>
          <div className="text-slate-400 font-sans text-[11px]">
            Kompilasi penuh seluruh modul dan menghasilkan 1 biner portabel di <code className="text-slate-200">HASIL-APLIKASI/</code>.
          </div>
        </div>
      </div>
    </div>
  )
}
