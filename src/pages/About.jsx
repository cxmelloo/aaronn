import InfoPic from '../assets/InfoPic.png'
import Vector from '../assets/Vector.png'
import Footer from './Footer';

function About() {
  return (
    <>
    <section className='bg-[#1A1A1A] py-25'>
      <div className="c-container">
        <h1 className='font-bold font-syne text-white text-7xl'>About Me</h1>
        <p className='mt-4 font-medium text-[#949494] text-base'>Little Brief About Myself</p>
      <div className="border border-[#949494] mb-9"></div>

      <div className='py-22'>
        <div className='flex gap-9 pb-20'>
          <h1 className='text-7xl font-bold font-syne text-white w-fit'>My mission <br /> is to make design easier.</h1>
          <p className='text-xl font-semibold font-rubik text-[#949494] w-fit'>Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
        </div>
        <div className='flex gap-7'>
          <div><img src={InfoPic} alt="me-img"/></div>
          <div><img src={Vector} alt="vector-img"/></div>
        </div>
      </div>

      <h1 className='text-white text-5xl font-bold font-syne mb-6'>Follow me on:</h1>
      <ul className='flex justify-between'>
        <li className='text-3xl text-[#949494] font-bold font-rubik'>Dribble</li>
        <li className='text-3xl text-[#949494] font-bold font-rubik'>Twitter</li>
        <li className='text-3xl text-[#949494] font-bold font-rubik'>Facebook</li>
        <li className='text-3xl text-[#949494] font-bold font-rubik'>Instagram</li>
      </ul>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default About