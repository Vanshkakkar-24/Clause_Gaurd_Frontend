import { useNavigate } from "react-router-dom"
import Toast from "./Toast"
import { useState } from "react"

const Hero = () => {

  const navigate = useNavigate()

  const [toast, setToast] = useState("")

  const handleClick = () => {

    const token = localStorage.getItem("token")

    if (!token) {

      setToast("Please login first")

      return

    }

    navigate("/app/upload")

  }

  return (

    <section className="bg-gradient-to-r from-[#0b1026] to-[#121a3a] text-white py-28">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <div className="inline-block px-4 py-1 mb-6 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">

            AI-Powered Contract Intelligence

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Understand Any Contract
            <span className="text-indigo-400"> in Minutes</span>
            <br />

            Without a Lawyer

          </h1>

          <p className="text-gray-300 mb-8">

            Upload your contract. Our AI highlights risks,
            simplifies legal jargon, and explains everything clearly.

          </p>

          <div className="flex gap-4">

            <button
              onClick={handleClick}
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium"
            >

              Analyze My Contract

            </button>

            <a
              href="#steps"
              className="border border-gray-500 px-6 py-3 rounded-xl"
            >

              See How It Works

            </a>

          </div>

          <div className="flex gap-6 text-sm text-gray-400 mt-6">

            <span>✔ PDF & DOCX</span>

            <span>✔ Instant Results</span>

            <span>✔ Free</span>

          </div>

        </div>

        <div className="bg-[#1c2445] p-6 rounded-2xl border border-indigo-500/20 shadow-xl">

          <div className="space-y-3 text-sm">

            <div className="bg-red-500/20 p-3 rounded">

              HIGH risk clause detected

            </div>

            <div className="bg-yellow-500/20 p-3 rounded">

              Medium risk clause detected

            </div>

            <div className="bg-green-500/20 p-3 rounded">

              Low risk clause detected

            </div>

            <div className="mt-4">

              <div className="text-xs text-gray-400">

                Overall Risk Score

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