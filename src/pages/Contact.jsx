import PageHero from "../components/PageHero";
import Img from '../assets/Contact Pic.png'
function Contact() {
  return (
    <>
    <section className="bg-[#1A1A1A] py-25">
      <div className="c-container">
        <PageHero title='Contact me' desc='For Any Project Knock Us'/>

        <div className="flex justify-between items-start gap-16 my-20 px-4 md:px-0">
          <h1 className="w-[40%] shrink-0 font-bold font-syne text-white text-4xl md:text-6xl leading-[1.3]">Get in <br />Touch With <br />Us</h1>
          
          <form className="flex w-[50%] flex-col gap-8">
            <input className="c-inp" type="text" required placeholder="NAME"/>
            <input className="c-inp" type="text" required placeholder="SUBJECT"/>
            <input className="c-inp" type="text" required placeholder="MESSAGE"/>
            
            <button type="submit" className="w-27 h-9 rounded-full bg-[#ff8b3d] text-white font-semibold text-sm hover:bg-[#ff7925] transition-colors cursor-pointer">SEND</button>
          </form>
          </div>

        <img src={Img} alt="image"/>

        <div className="mt-25 flex justify-between max-w-4xl mx-auto">
          <p className="font-bold font-syne text-2xl text-white">Street Avenue 21, CA</p>
          <p className="font-bold font-syne text-2xl text-white">+9 0283353</p>
          <p className="font-bold font-syne text-2xl text-white">info@aaronn.com</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact