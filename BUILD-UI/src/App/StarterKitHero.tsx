import { Sparkles } from 'lucide-react'

export function StarterKitHero() {
  return (
    <div className="text-center max-w-2xl mx-auto pt-6 pb-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-5">
        <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
        <span className="text-xs font-semibold text-cyan-200">
          Ready-to-use Boilerplate
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
        Desktop App Starter Kit
      </h1>

      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
        Struktur direktori modular siap pakai untuk membuat aplikasi desktop Windows portabel mandiri (single `.exe`) tanpa ketergantungan runtime luar.
      </p>
    </div>
  )
}
