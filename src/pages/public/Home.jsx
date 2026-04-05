import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Problem from "../../components/Problem";
import Features from "../../components/Features";
import Steps from "../../components/Steps";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";

const Home = () => {

  return (

    <div className="bg-slate-950 text-white">

      <Navbar />

      <Hero />
      <Marquee />

      <Problem />

      <Features />

      <Steps />

      <Testimonials />

      <FAQ />

      <Footer />

    </div>
  );
};

export default Home;