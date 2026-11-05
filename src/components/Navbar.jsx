import { NavLink } from "react-router-dom";

function Navbar({ mobile = false, onLinkClick }) {
  return (
    <nav className={ mobile ? "flex flex-col gap-5" : "hidden sm:flex sm:ml-auto md:ml-0 gap-10"}>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase' to="/" onClick={onLinkClick}>Home</NavLink>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase' to="/about" onClick={onLinkClick}>About Me</NavLink>
      <NavLink className='text-[#FFFFFF80] text-transform: uppercase' to="/works" onClick={onLinkClick}>My Works</NavLink>
    </nav>
  );
}

export default Navbar;