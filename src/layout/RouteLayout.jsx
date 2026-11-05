import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Navbar from '../components/Navbar';

function RoutLayout() {
  return (
    <>
    <header className='bg-[#1A1A1A] py-7'>
      <div className="c-container flex items-center lg:items-end-safe">
        <Link className="flex" to="/">
            <img src={Logo} alt="aaronn-img" />
          </Link>

          <div className='ml-auto flex items-center'>
            <Navbar/>

          <Link to='/contact' className='rounded-4xl py-3 px-8 text-[#FFFFFF] bg-[#03030480] border-2 border-[#FFFFFF4D] ml-11 hover:bg-transparent hover:border-[#FF9142] active:opacity-80'>Contact</Link>
          </div>
      </div>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default RoutLayout