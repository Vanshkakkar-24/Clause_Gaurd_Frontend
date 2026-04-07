import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Toast from "./Toast"
import { useState } from "react"

const Hero = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()

  const [toast,setToast] = useState(null)

  const showLoginToast = () => {

    // force re-render even if same message
    setToast(null)

    setTimeout(() => {

      setToast({
        message: t("hero.loginFirst") || "Please login first",
        id: Date.now()
      })

    }, 50)

  }

  const requireLogin = () => {

    const token = localStorage.getItem("token")

    if(!token){

      showLoginToast()

      return false
    }

    return true

  }

  const handleUpload = () => {

    if(!requireLogin()) return

    navigate("/app/upload")

  }

  return (

<section className="relative overflow-hidden pt-40 pb-32 text-center text-white">

<div className="absolute inset-0 bg-gradient-to-br from-[#071028] via-[#050816] to-[#0b0220]" />

<div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />

<div className="relative max-w-4xl mx-auto px-6">

<div className="inline-block px-4 py-1 mb-6 rounded-full text-xs tracking-widest bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">

THE FUTURE OF LEGAL INTELLIGENCE

</div>

<h1 className="text-5xl md:text-6xl font-semibold leading-tight">

AI-powered contract
<br/>
drafting and risk
<br/>
analysis

</h1>

<p className="mt-6 text-slate-400 max-w-xl mx-auto">

Protect your interests with AI precision. Instant drafting,
deep risk scanning, and simplified legal terms.

</p>

<div className="mt-10 flex justify-center gap-4 flex-wrap">

<button
onClick={handleUpload}
className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-lg hover:opacity-90 transition"
>

Start Free

</button>

<button
onClick={handleUpload}
className="px-7 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition"
>

⬆ Upload Contract

</button>

</div>

</div>

{toast && (
<Toast
key={toast.id}
message={toast.message}
type="error"
/>
)}

</section>

)

}

export default Hero