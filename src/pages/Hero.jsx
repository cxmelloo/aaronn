import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <section className="bg-[#1A1A1A] py-20 md:py-40">
      <div className="c-container text-center">
        <h1 className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-20">Adaptive Logo Design <br /> for Your Brand</h1>
        <Link to='/works' className="c-btn mb-20">Explore Works</Link>
      </div>
    </section>
    </>
  )
}

export default Hero