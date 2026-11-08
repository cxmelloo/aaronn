import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import sk from '../assets/sk.svg'

function Footer() {
  return (
    <footer className='bg-[#131313] py-14 sm:py-16 lg:py-25'>
      <div className="c-container text-center">

        <h3 className='text-[#FF9142] text-xl sm:text-2xl font-bold font-syne mb-5 sm:mb-6'>Get in Touch With Us</h3>

        <a href="mailto:info@aaronn.com" className='block font-bold font-syne text-3xl sm:text-5xl lg:text-6xl text-white mb-16 sm:mb-20 lg:mb-30'> info@aaronn.com</a>

        <ul className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 mb-10'>
          <li>
            <Link to='/'><img className='w-40 sm:w-48 lg:w-55' src={Logo} alt="Logo-img" /></Link>
          </li>

          <li>
            <p className='font-bold font-syne text-white text-lg sm:text-xl lg:text-2xl leading-relaxed'> Street Avenue 21, CA<br /> 0-8-00-888-000 </p>
          </li>

          <li className='flex flex-col items-center'>
            <p className='font-bold font-syne text-white text-lg sm:text-xl lg:text-2xl'>+9 0283353</p>

            <nav className='flex gap-4 mt-4'>
              <a href="https://www.facebook.com/profile.php?id=61590678620814" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img className='w-7 h-7' src={fb} alt="Facebook" />
              </a>

              <a href="https://www.instagram.com/cvuaso/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img className='w-7 h-7' src={ig} alt="Instagram" />
              </a>

              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X"
              ><img className='w-7 h-7' src={sk} alt="X" /> </a>
            </nav>
          </li>

        </ul>

        <div className="border-t border-[#949494] mb-7 sm:mb-9"></div>

        <span className='block text-white font-bold font-syne text-sm sm:text-base lg:text-2xl'>
          © 2023. Ideapeel. All rights reserved.
        </span>

      </div>
    </footer>
  )
}

export default Footer
