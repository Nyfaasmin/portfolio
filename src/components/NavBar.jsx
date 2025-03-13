import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="flex justify-between items-center w-full h-20 px-4">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold ml-2">Nyfa Asmin</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition duration-300"
            >
              <Link to={link} smooth duration={800} offset={-70}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-400">
          {links.map(({ id, link }) => (
            <li key={id} className="py-6 text-2xl">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={800}
                offset={-70}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
