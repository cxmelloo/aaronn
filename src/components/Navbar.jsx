import { NavLink } from "react-router-dom";

function Navbar({ mobile = false, onLinkClick }) {
  return (
    <nav className={ mobile ? "flex flex-col gap-5" : "hidden sm:flex sm:ml-auto md:ml-0 gap-10"}>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase hover:text-[#FF9142] transition-transform duration-150 active:scale-95 active:translate-y-0.5' to="/" onClick={onLinkClick}>Home</NavLink>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase transition-transform duration-150 active:scale-95 active:translate-y-0.5 hover:text-[#FF9142]' to="/about" onClick={onLinkClick}>About Me</NavLink>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase hover:text-[#FF9142] transition-transform duration-150 active:scale-95 active:translate-y-0.5' to="/works" onClick={onLinkClick}>My Works</NavLink>
    </nav>
  );
}

export default Navbar;