import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="p-1 pl-3 shadow-2xl rounded-sm bg-gray-50 pr-10 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img
            src="src/assets/logo.png"
            className="h-[80px] w-[180px] ml-10"
            alt="Logo"
          />
        </div>

        <div className="text-2xl hidden md:flex gap-x-7">
          <div>
            <Link to="/" className="hover:underline">Home</Link>
          </div>
          <div>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
          <div>
            <Link to="/categories" className="hover:underline">Categories</Link>
          </div>
          <div>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          <div>
            <Link to="/mocktest">
              <div className="font-bold text-2xl text-red-800 hover:underline ">
                Mock Test
              </div>
            </Link>
          </div>
         
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center text-2xl gap-y-3 p-3">
          <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:underline">About</Link>
          <Link to="/categories" onClick={toggleMenu} className="hover:underline">Categories</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link>
          <Link to="/mocktest" onClick={toggleMenu} className="font-bold text-3xl text-red-800 hover:underline duration-150">Mock Test</Link>
          <Link to="/login" onClick={toggleMenu} className="hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
