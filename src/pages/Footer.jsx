import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import fb from '../assets/fb.svg'
import ig from '../assets/ig.svg'
import sk from '../assets/sk.svg'

function Footer() {
  return (
    <>
      <footer className='bg-[#131313] py-25'>
        <div className="c-container text-center">
          <h3 className='text-[#FF9142] text-2xl font-bold font-syne mb-6'>Get in Touch With Us</h3>
          <h1 className='font-bold font-syne text-6xl text-white mb-30'>info@aaronn.com</h1>

          <ul className='flex justify-between items-center mb-9'>
            <li>
              <Link to='/'>
                <img className='w-55' src={Logo} alt="Logo-img" />
              </Link>
            </li>

            <li>
              <p className='font-bold font-syne text-white text-2xl'>Street Avenue 21, CA <br /> <br />0-8-00-888-000</p>
            </li>

            <li>
              <p className='font-bold font-syne text-white text-2xl'>+9 0283353</p>

              <nav className='flex gap-3 mt-4'>
                <a href="https://www.facebook.com/profile.php?id=61590678620814" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" /></a>

                <a href="https://www.instagram.com/cvuaso/" target="_blank" rel="noopener noreferrer">
                  <img src={ig} alt="Instagram" /></a>

                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <img src={sk} alt="X" /></a>
              </nav>
            </li>
          </ul>

          <div className="border border-[#949494] mb-9"></div>

          <span className='text-white font-bold font-syne text-2xl'>© 2023. Ideapeel. All rights reserved. </span>
        </div>
      </footer>
    </>
  )
}

export default Footer