import { Outlet, Link, useLocation } from "react-router-dom"

const AppLayout = () => {
  const location = useLocation();

  const navItems = [
    { label: "Analyze", path: "/app/upload", icon: "📄" }, // using upload as analyze entry point based on user logic
    { label: "Comparisons", path: "/app/compare", icon: "⇋" },
    { label: "Simplify", path: "/app/simplify", icon: "✨" },
    {label: "Dashboard", path: "/app/dashboard", icon: "📊"},
  ];

  return (
    <div className="flex h-screen bg-ethereal-dark text-ethereal-text font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-ethereal-border bg-[#051111] z-20">
        <div className="p-6">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ethereal-brandLight to-ethereal-brandDark">
            Clause Guard
          </Link>
          <div className="mt-2 text-[10px] text-ethereal-textMuted tracking-widest uppercase">
            Contract Analysis Tool
          </div>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium text-sm ${
                  isActive 
                    ? "bg-ethereal-brand/10 text-ethereal-brandLight border border-ethereal-brand/20 shadow-[inset_4px_0_0_0_rgba(45,212,191,1)]" 
                    : "text-ethereal-textMuted hover:text-ethereal-text hover:bg-white/5"
                }`}
              >
                <span className={`text-lg ${isActive ? "text-ethereal-brandLight" : "opacity-60"}`}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-6">
          <button className="w-full py-2.5 rounded-lg text-[13px] font-semibold bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] text-[#041010] shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition uppercase tracking-wider">
            + New Analysis
          </button>
          <div className="mt-4 flex items-center gap-2 cursor-pointer text-ethereal-textMuted hover:text-ethereal-text text-[13px]">
            <span className="text-lg">❓</span> Support
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-br from-[#061515] to-[#030a0a]">
        
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-ethereal-border/50 bg-[#061515]/80 backdrop-blur">
          <div className="flex items-center gap-6 text-sm font-medium">
            <span className="text-ethereal-brandLight border-b-2 border-ethereal-brandLight pb-1 uppercase tracking-wider text-[11px] h-full flex items-center mt-1">Analysis</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-ethereal-surface border border-ethereal-border flex items-center justify-center cursor-pointer">
              ⚙️
            </div>
            <div className="w-8 h-8 rounded-full bg-ethereal-brand flex items-center justify-center text-[#041010] font-bold cursor-pointer">
              V
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto outline-none selection:bg-ethereal-brand selection:text-black">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default AppLayout