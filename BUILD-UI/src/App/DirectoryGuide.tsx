import { Layout, Cpu, Package, CheckCircle2 } from 'lucide-react'

interface FolderItem {
  name: string
  label: string
  role: string
  tech: string
  desc: string
  icon: typeof Layout
  color: string
}

export function DirectoryGuide() {
  const folders: FolderItem[] = [
    {
      name: 'BUILD-UI/',
      label: 'Frontend Interface',
      role: 'Desain Antarmuka',
      tech: 'React 19 &bull; Tailwind CSS v4 &bull; Vite',
      desc: 'Tempat membuat halaman dan komponen UI modern. Otomatis dikompilasi ke ASSETS/.',
      icon: Layout,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      name: 'BUILD-DLL/',
      label: 'Native Rust Core',
      role: 'Komputasi & C-ABI',
      tech: 'Rust CDYLIB &bull; Static CRT (+crt-static)',
      desc: 'Pustaka logika backend mandiri untuk komputasi berat tanpa ketergantungan MSVC runtime.',
      icon: Cpu,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      name: 'BUILD-APP/',
      label: 'Desktop Host',
      role: 'Runtime & Bundler',
      tech: 'Tauri v2 &bull; Single Portable Binary',
      desc: 'Menggabungkan UI dan DLL ke dalam 1 file executable mandiri tanpa installer setup.',
      icon: Package,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    },
    {
      name: 'HASIL-APLIKASI/',
      label: 'Output Production',
      role: 'Distribusi Tunggal',
      tech: 'Single .exe File',
      desc: 'Hanya berisi tepat 1 file executable aplikasi portabel yang siap didistribusikan ke pengguna.',
      icon: CheckCircle2,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
        Struktur Direktori Utama
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {folders.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <span className={`p-1.5 rounded-lg border ${item.color}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    {item.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                    {item.role}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
                  {item.desc}
                </p>
              </div>

              <div
                className="text-[11px] text-slate-400 font-mono pt-2 border-t border-white/5"
                dangerouslySetInnerHTML={{ __html: item.tech }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
