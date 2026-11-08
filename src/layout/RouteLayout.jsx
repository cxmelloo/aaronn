import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Menu from '../assets/Menu.svg';
import Close from '../assets/close.svg';

function RoutLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1A1A1A] py-7">
        <div className="c-container flex items-center lg:items-end-safe justify-between">

          <Link className="flex" to="/">
            <img src={Logo} alt="aaronn-img" />
          </Link>

          <div className="ml-auto hidden sm:flex items-center">
            <Navbar />

            <Link to="/contact" className="rounded-4xl py-3 px-8 text-[#FFFFFF] bg-[#03030480] border-2 border-[#FFFFFF4D] ml-11 hover:bg-transparent hover:border-[#FF9142] active:opacity-80"
            > Contact </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="flex sm:hidden cursor-pointer">
            {menuOpen ? (
              <img src={Close} alt="close-icon" />
            ) : (
              <img src={Menu} alt="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`sm:hidden c-container overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen
              ? "max-h-80 opacity-100 pt-8 pb-4"
              : "max-h-0 opacity-0 pt-0 pb-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            <Navbar mobile onLinkClick={() => setMenuOpen(false)}/>

            <Link to="/contact" onClick={() => setMenuOpen(false)} className="w-fit rounded-4xl py-3 px-8 text-white bg-[#03030480] border-2 border-[#FFFFFF4D] hover:border-[#FF9142]">  
            Contact</Link>

          </div>
        </div>
      </header>

      <main className="">
        <Outlet />
      </main>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default RoutLayout;
