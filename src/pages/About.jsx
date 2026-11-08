import InfoPic from '../assets/InfoPic.png'
import Vector from '../assets/Vector.png'
import PageHero from '../components/PageHero';

function About() {
  return (
    <>
    <section className='bg-[#1A1A1A] py-12 sm:py-15 md:py-25'>
      <div className="c-container">
        <PageHero title='About Me' desc='Little Brief About Myself'/>

      <div className='py-12 sm:py-17 md:py-22'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-9 pb-12 sm:pb-16 md:pb-20'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-syne text-white w-full lg:w-1/2 leading-tight'>My mission <br className='hidden sm:block' /> is to make design easier.</h1>
          <p className='text-base sm:text-lg md:text-xl font-semibold font-rubik text-[#949494] w-full lg:w-1/2 leading-relaxed'>Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-7'>
          <div className='w-full md:w-3/5'>
            <img src={InfoPic} alt="me-img" className='w-full h-auto object-cover'/>
          </div>
          <div className='w-full md:w-2/5'>
            <img src={Vector} alt="vector-img" className='w-full h-auto object-contain'/>
            </div>
        </div>
      </div>

      <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-6 sm:mb-8'>Follow me on:</h1>
      <ul className='grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
        <li className='text-2xl md:text-3xl text-[#949494] font-bold font-rubik'>Dribble</li>
        <li className='text-2xl md:text-3xl text-[#949494] font-bold font-rubik'>Twitter</li>
        <li className='text-2xl md:text-3xl text-[#949494] font-bold font-rubik'>Facebook</li>
        <li className='text-2xl md:text-3xl text-[#949494] font-bold font-rubik'>Instagram</li>
      </ul>
      </div>
    </section>

    </>
  )
}

export default About