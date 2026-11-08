import { Link } from 'react-router-dom'
import InfoPic from '../assets/InfoPic.png'

function Info() {
  return (
    <section className='bg-[#1A1A1A] py-12 md:py-16 lg:py-20'>
      <div className="c-container flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

        <div className='w-full max-w-2xl text-center lg:text-left'>
          <h2 className='text-5xl sm:text-6xl md:text-7xl font-syne font-bold text-white mb-6 leading-[110%]'>
            Let’s get know <br className='hidden sm:block' /> about me closer</h2>

          <p className='text-[#A8A8A8] text-base sm:text-lg font-rubik leading-[154%] mb-8 lg:mb-12'>
            Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
          </p>

          <Link to='/about' className='c-btn inline-block'>Discover More About Me</Link>
        </div>

        <div className='w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center lg:justify-end'>
          <img src={InfoPic} alt="info-img" className='w-full max-w-105 lg:max-w-full h-auto object-contain' />
        </div>

      </div>
    </section>
  )
}

export default Info
