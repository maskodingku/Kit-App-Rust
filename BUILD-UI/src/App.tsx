import { Header } from './App/Header'
import { StarterKitHero } from './App/StarterKitHero'
import { DirectoryGuide } from './App/DirectoryGuide'
import { QuickCommands } from './App/QuickCommands'
import { Footer } from './App/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full flex flex-col justify-center">
        <StarterKitHero />
        <DirectoryGuide />
        <QuickCommands />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
