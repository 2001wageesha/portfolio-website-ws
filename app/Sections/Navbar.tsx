"use client";
import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-blue-300 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#fotter" className="text-2xl font-bold hover:underline" >Wageesha</a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#project" className="hover:underline">Project</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 px-4 pb-4">
          <a href="#home" onClick={handleLinkClick} className="hover:underline">Home</a>
          <a href="#about" onClick={handleLinkClick} className="hover:underline">About</a>
          <a href="#project" onClick={handleLinkClick} className="hover:underline">Project</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:underline">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
