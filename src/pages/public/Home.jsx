import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Features from "../../components/Features"
import Pricing from "../../components/Pricing"
import Steps from "../../components/Steps"
import Testimonials from "../../components/Testimonials"
import Footer from "../../components/Footer"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  // prevent accessing app pages without login
  useEffect(() => {

    const token = localStorage.getItem("token")

    // protect routes starting with /app
    if (!token && window.location.pathname.startsWith("/app")) {

      navigate("/login")

    }

  }, [])

  return (

    <div className="bg-ethereal-dark text-ethereal-text min-h-screen font-sans">

      <Navbar />

      <Hero />

      <Features />

      <Pricing />

      <Steps />

      <Testimonials />

      <Footer />

    </div>

  )

}

export default Home