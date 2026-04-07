import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (

    <header className="fixed w-full z-50 backdrop-blur border-b border-white/10 bg-black/40">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="font-semibold text-cyan-300 text-lg tracking-wide">
          Clause Guard
        </Link>

        <div className="flex items-center gap-8 text-sm text-slate-300">

          {

            !token ? (

              <>
                <Link to="/login" className="hover:text-white transition">
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-black font-medium"
                >
                  Register
                </Link>
              </>

            ) : (

              <>
                <Link to="/app/simplify" className="hover:text-white transition">
                  Simplify
                </Link>

                <Link to="/app/upload" className="hover:text-white transition">
                  Analyze
                </Link>

                <Link to="/app/compare" className="hover:text-white transition">
                  Compare
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-black font-medium"
                >
                  Logout
                </button>
              </>

            )

          }

        </div>

      </div>

    </header>

  )

}

export default Navbar