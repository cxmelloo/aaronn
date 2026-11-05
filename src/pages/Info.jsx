import { Link } from 'react-router-dom'
import InfoPic from '../assets/InfoPic.png'
function Info() {
  return (
    <>
    <section className='bg-[#1A1A1A] py-5'>
      <div className="c-container flex items-center justify-between">
        <div className='max-w-2xl'>
          <h2 className='text-6xl font-syne font-bold text-white mb-6 leading-[100%]'>Let’s get know <br /> about me closer</h2>
          <p className='text-[#A8A8A8] text-lg font-rubik leading-[154%] mb-15'>Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>
          <Link to='/about' className='c-btn'>Discover More About Me</Link>
        </div>
        <div>
          <img src={InfoPic} alt="info-img" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Info