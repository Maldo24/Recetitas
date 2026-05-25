function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-6">
      <div className="w-full max-w-sm rounded-2xl bg-slate-800 p-6 shadow-xl border border-slate-700 text-center">
        <h1 className="text-3xl font-bold text-emerald-400">
          🥞 ola vaaaaleeee
           
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Diseñada full para celular con Tailwind, React y PWA
        </p>
        
        <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-left">
          <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">Estado del Entorno</span>
          <p className="text-sm mt-1 text-slate-300">🚀 Frontend y Backend conectados en red local.</p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-emerald-500 py-3.5 font-semibold text-slate-950 shadow-md active:scale-95 transition-transform touch-manipulation">
          Explorar Recetas
        </button>
      </div>
    </div>
  )
}

export default App