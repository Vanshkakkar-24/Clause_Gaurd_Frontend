import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <header className="border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold text-indigo-400">

          ContractIQ

        </Link>

        <nav className="flex gap-6 items-center">

          {token && (

            <>
              <Link to="/app/upload">Upload</Link>

              <Link to="/app/compare">Compare</Link>

              <Link to="/app/chat">Chat</Link>

              <Link to="/app/history">History</Link>

              <Link to="/app/settings">Settings</Link>

              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          )}

          {!token && (

            <>
              <Link to="/login">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-2 rounded"
              >
                Get Started
              </Link>
            </>
          )}

        </nav>

      </div>

    </header>
  );
};

export default Navbar;