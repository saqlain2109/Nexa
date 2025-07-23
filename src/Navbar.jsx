import React, { useState } from 'react';
import logoImg from './assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-black shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logoImg} alt="Logo" className="w-20 h-20 object-contain rounded-xl p-2" />
        <div>
          <div className="text-3xl font-extrabold text-white tracking-widest">NE<span className='text-[#00A4C4]'>X</span>A</div>
          <div className="text-sm text-[#b8b7b7] tracking-wider">CAR RENTAL <span className='text-[#00A4C4]'>GOA</span></div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 text-base font-semibold text-white">
        <Link to="/" className="hover:text-[#f6c90e] transition-colors">Home</Link>
        <Link to="/rental-cars" className="hover:text-[#f6c90e] transition-colors">Rental Cars</Link>
        <Link to="/fleet-prices" className="hover:text-[#f6c90e] transition-colors">Fleet & Prices</Link>
        <Link to="/faqs" className="hover:text-[#f6c90e] transition-colors">FAQs</Link>
        <Link to="/about" className="hover:text-[#f6c90e] transition-colors">About</Link>
      </nav>
      {/* Desktop Call Now Button */}
      <a href="tel:+917045809109" className="hidden lg:flex bg-[#1a2238]  px-6 py-3 rounded-xl flex-col items-center shadow hover:text-[#FFFF] transition cursor-pointer no-underline">
        <span className="text-sm text-[#f6c90e] font-medium">Call to Book Now</span>
        <span className="text-xl font-bold text-[#f6c90e]">+91 70458 09109</span>
      </a>
      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-[#eaeaea] px-6 py-4 lg:hidden z-40">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#1a2238]">
            <Link to="/" className="hover:text-[#f6c90e] transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/rental-cars" className="hover:text-[#f6c90e] transition-colors" onClick={() => setMenuOpen(false)}>Rental Cars</Link>
            <Link to="/fleet-prices" className="hover:text-[#f6c90e] transition-colors" onClick={() => setMenuOpen(false)}>Fleet & Prices</Link>
            <Link to="/faqs" className="hover:text-[#f6c90e] transition-colors" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link to="/about" className="hover:text-[#f6c90e] transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>
          <a href="tel:+917045809109" className="mt-6 bg-[#1a2238] px-6 py-3 rounded-xl text-center shadow hover:bg-[#f6c90e] hover:text-[#1a2238] transition cursor-pointer no-underline block">
            <div className="text-sm text-white font-medium">Call to Book Now</div>
            <div className="text-xl font-bold text-[#f6c90e]">+91 70458 09109</div>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;