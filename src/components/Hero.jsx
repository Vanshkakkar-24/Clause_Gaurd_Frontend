import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Toast from "./Toast"
import { useState } from "react"

const Hero = () => {

  const { t } = useTranslation();

  const navigate = useNavigate()

  const [toast, setToast] = useState("")

  const handleClick = () => {

    const token = localStorage.getItem("token")

    if (!token) {

      setToast(t("hero.loginFirst"))

      return

    }

    navigate("/app/upload")

  }

  return (

    <section className="bg-gradient-to-r from-[#0b1026] to-[#121a3a] text-white py-28">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <div className="inline-block px-4 py-1 mb-6 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">

            {t("hero.badge")}

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            {t("hero.titleLine1")}
            <span className="text-indigo-400">{t("hero.titleHighlight")}</span>
            <br />

            {t("hero.titleLine2")}

          </h1>

          <p className="text-gray-300 mb-8">

            {t("hero.subtitle")}

          </p>

          <div className="flex gap-4 flex-wrap">

            <button
              type="button"
              onClick={handleClick}
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium"
            >

              {t("hero.analyze")}

            </button>

            <a
              href="#steps"
              className="border border-gray-500 px-6 py-3 rounded-xl"
            >

              {t("hero.howItWorks")}

            </a>

          </div>

          <div className="flex gap-6 text-sm text-gray-400 mt-6 flex-wrap">

            <span>{t("hero.badgePdf")}</span>

            <span>{t("hero.badgeInstant")}</span>

            <span>{t("hero.badgeFree")}</span>

          </div>

        </div>

        <div className="bg-[#1c2445] p-6 rounded-2xl border border-indigo-500/20 shadow-xl">

          <div className="space-y-3 text-sm">

            <div className="bg-red-500/20 p-3 rounded">

              {t("hero.demoHigh")}

            </div>

            <div className="bg-yellow-500/20 p-3 rounded">

              {t("hero.demoMedium")}

            </div>

            <div className="bg-green-500/20 p-3 rounded">

              {t("hero.demoLow")}

            </div>

            <div className="mt-4">

              <div className="text-xs text-gray-400">

                {t("hero.overallRisk")}

              </div>

              <div className="h-2 bg-gray-700 rounded mt-1">

                <div className="h-2 w-2/3 bg-red-500 rounded"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {toast && <Toast message={toast} type="error" />}

    </section>

  )

}

export default Hero
