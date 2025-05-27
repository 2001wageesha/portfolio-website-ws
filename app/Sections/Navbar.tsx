"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Volunteer', href: '#volunteer' },  
  { name: 'Contact', href: '#contact' },
];


  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, #1F2937 0%, #2C3E50 40%, #111827 100%)'
      }}
      className="text-white p-6 fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#fotter"
          className="text-3xl font-bold px-3 py-1 rounded-md border-b-2 border-transparent hover:border-orange-500 transition-all duration-300"
        >
          Wageesha
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-md border-b-2 border-transparent hover:border-orange-500 md:border-b-4 bg-gray-800
               hover:bg-gray-700 transition-all duration-300"


            >
              {link.name}
            </a>
          ))}
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="px-3 py-2 rounded-md border-b-2 border-transparent hover:border-orange-500 md:border-b-4
               bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
