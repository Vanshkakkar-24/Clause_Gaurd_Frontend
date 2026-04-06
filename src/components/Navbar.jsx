import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {

    localStorage.removeItem("token");
    navigate("/");

  };


  const navLink = (path, label) => (

    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`
        text-sm font-medium transition
        px-4 py-2 rounded-lg whitespace-nowrap
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
      sticky top-0 z-50
      backdrop-blur
      bg-gradient-to-r
      from-[#0b1026]
      to-[#121a3a]
      border-b border-white/10
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-4 md:px-6
        py-3
      ">


        <div className="flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="
              text-lg md:text-xl
              font-bold
              text-indigo-400
              tracking-wide
            "
          >

            {t("nav.brand")}

          </Link>



          {/* RIGHT SIDE */}

          {

            token && (

              <div className="flex items-center gap-2">

                {/* language */}
                {/* <div className="hidden md:block">
                  <LanguageSwitcher />
                </div> */}


                {/* desktop nav */}

                <div className="hidden md:flex items-center gap-2">

                  {navLink("/app/dashboard","Dashboard")}

                  {navLink("/app/simplify", "Simplify")}

                  {navLink("/app/upload", t("nav.upload"))}

                  {navLink("/app/compare", t("nav.compare"))}

                  {/* {navLink("/app/chat", t("nav.chat"))} */}

                  {/* {navLink("/app/history", t("nav.history"))} */}

                  <button
                    onClick={logout}
                    className="
                      ml-2
                      px-4 py-2
                      rounded-lg
                      text-sm font-medium
                      bg-red-500
                      hover:bg-red-600
                      text-white
                    "
                  >

                    {t("nav.logout")}

                  </button>

                </div>



                {/* mobile hamburger */}

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden text-white text-xl px-2"
                >

                  ☰

                </button>

              </div>

            )

          }


        </div>



        {/* mobile menu */}

        {

          token && menuOpen && (

            <div className="
              mt-4
              flex flex-col
              gap-3
              md:hidden
            ">

              <LanguageSwitcher />

              {navLink("/app/upload", t("nav.upload"))}

              {navLink("/app/compare", t("nav.compare"))}

              {navLink("/app/simplify", "Simplify")}

              {navLink("/app/chat", t("nav.chat"))}

              {navLink("/app/history", t("nav.history"))}

              <button
                onClick={logout}
                className="
                  mt-2
                  px-4 py-2
                  rounded-lg
                  text-sm font-medium
                  bg-red-500
                  text-white
                "
              >

                {t("nav.logout")}

              </button>

            </div>

          )

        }

      </div>

    </header>

  );

};

export default Navbar;