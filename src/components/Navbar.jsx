import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };


  const navLink = (path, label) => (

    <Link
      to={path}
      className={`
        text-sm
        font-medium
        transition
        px-3
        py-2
        rounded-lg
        ${location.pathname === path
          ? "bg-indigo-600 text-white"
          : "text-slate-300 hover:text-white hover:bg-white/10"
        }
      `}
    >

      {label}

    </Link>

  );


  return (

    <header className="
      sticky
      top-0
      z-50
      backdrop-blur
      bg-gradient-to-r
      from-[#0b1026]
      to-[#121a3a]
      border-b
      border-white/10
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-3
        flex
        justify-between
        items-center
      ">


        {/* LOGO */}

        <Link
          to="/"
          className="
            text-xl
            font-bold
            text-indigo-400
            tracking-wide
          "
        >

          ContractIQ

        </Link>



        {/* NAV LINKS */}

        <nav className="flex items-center gap-3">

          {

            token && (

              <>

                {navLink("/app/upload","Upload")}

                {navLink("/app/compare","Compare")}

                {navLink("/app/chat","Chat")}

                {navLink("/app/history","History")}

                {navLink("/app/settings","Settings")}


                <button
                  onClick={logout}
                  className="
                    ml-3
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-medium
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    transition
                  "
                >

                  Logout

                </button>

              </>

            )

          }


          {

            !token && (

              <>

                <Link
                  to="/login"
                  className="
                    text-sm
                    text-slate-300
                    hover:text-white
                    transition
                  "
                >

                  Login

                </Link>


                <Link
                  to="/register"
                  className="
                    ml-2
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-medium
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    transition
                  "
                >

                  Get Started

                </Link>

              </>

            )

          }

        </nav>

      </div>

    </header>

  );

};

export default Navbar;