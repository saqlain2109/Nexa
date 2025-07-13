import React, { useState } from 'react';
import logoImg from './assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logoImg} alt="Logo" className="w-16 h-16 object-contain rounded-xl p-2 bg-white shadow border" />
        <div>
          <div className="text-3xl font-extrabold text-black tracking-widest">NEXA</div>
          <div className="text-sm text-gray-500 tracking-wider">CAR RENTAL GOA</div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 text-base font-semibold text-black">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/rental-cars" className="hover:text-blue-600 transition-colors">Rental Cars</Link>
        <Link to="/fleet-prices" className="hover:text-blue-600 transition-colors">Fleet & Prices</Link>
        <Link to="/faqs" className="hover:text-blue-600 transition-colors">FAQs</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
      </nav>
      {/* Desktop Call Now Button */}
      <div className="hidden lg:flex bg-blue-600 px-6 py-3 rounded-2xl flex-col items-center shadow">
        <span className="text-sm text-white font-medium">Call to Book Now</span>
        <span className="text-xl font-bold text-white">+91 99873 45878</span>
      </div>
      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl text-black focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 px-6 py-4 lg:hidden z-40">
          <nav className="flex flex-col gap-4 text-base font-semibold text-black">
            <Link to="/" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/rental-cars" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Rental Cars</Link>
            <Link to="/fleet-prices" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Fleet & Prices</Link>
            <Link to="/faqs" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>
          <div className="mt-6 bg-blue-600 px-6 py-3 rounded-2xl text-center shadow">
            <div className="text-sm text-white font-medium">Call to Book Now</div>
            <div className="text-xl font-bold text-white">+91 99873 45878</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 