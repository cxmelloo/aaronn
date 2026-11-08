import PageHero from "../components/PageHero";
import Img from '../assets/Contact Pic.png';

function Contact() {
  return (
    <section className="bg-[#1A1A1A] py-12 sm:py-16 lg:py-25">
      <div className="c-container">

        <PageHero title='Contact me' desc='For Any Project Knock Us'/>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 my-12 sm:my-16 lg:my-20 px-2 md:px-0">

          <h1 className="w-full lg:w-[40%] shrink-0 font-bold font-syne text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.2]"> Get in <br /> Touch With <br /> Us </h1>

          <form className="flex w-full lg:w-[50%] flex-col gap-6 sm:gap-8">
            <input className="c-inp w-full" type="text" required  placeholder="NAME" />
            <input className="c-inp w-full" type="text" required placeholder="SUBJECT"/>
            <textarea className="c-inp w-full min-h-36 resize-y" required placeholder="MESSAGE"/>
            <button type="submit" className="w-32 h-11 rounded-full bg-[#ff8b3d] text-white font-semibold text-sm hover:bg-[#ff7925] transition-colors cursor-pointer" >SEND</button>
          </form>

        </div>

        <div className="w-full overflow-hidden">
          <img src={Img} alt="Contact" className="w-full h-auto object-cover"/>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-25 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-center gap-6 lg:gap-8 max-w-4xl mx-auto text-center">

          <p className="font-bold font-syne text-lg sm:text-xl lg:text-2xl text-white">Street Avenue 21, CA</p>
          <a href="tel:+90283353" className="font-bold font-syne text-lg sm:text-xl lg:text-2xl text-white hover:text-[#FF9142] transition-colors">+9 0283353
          </a>

          <a href="mailto:info@aaronn.com" className="font-bold font-syne text-lg sm:text-xl lg:text-2xl text-white hover:text-[#FF9142] transition-colors break-all" > info@aaronn.com</a>

        </div>

      </div>
    </section>
  )
}

export default Contact;
