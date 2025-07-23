import React from 'react';
import logoImg from './assets/logo.jpg';

const Footer = () => (
  <footer className="bg-black text-white pt-8 sm:pt-12 pb-4 mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
      {/* Left: Logo & tagline */}
      <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4">
        <img src={logoImg} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md p-2" />
        <div className="text-xl sm:text-2xl font-bold text-white">NE<span className='text-[#00A4C4]'>X</span>A</div>
        <div className="text-xs sm:text-sm text-shadow-white">CAR RENTAL <span className='text-[#00A4C4]'>GOA</span></div>
        <div className="text-xs text-gray-400 mt-2 sm:mt-4 text-center md:text-left">© 2023 - 2024 Nexa Car Rentals | All Rights Reserved</div>
      </div>
      {/* Right: Get in Touch */}
      <div className="flex flex-col gap-3 items-center md:items-end mt-6 md:mt-0">
        <div className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-[#f6c90e]">Get in Touch</div>
        <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
          <svg width="18" height="18" sm:width="20" sm:height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="#2563eb" strokeWidth="2"/></svg>
          <span>+917045809109</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
          <svg width="18" height="18" sm:width="20" sm:height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#2563eb" strokeWidth="2"/></svg>
          <span>Nexarentals@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
          <svg width="18" height="18" sm:width="20" sm:height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#2563eb" strokeWidth="2"/></svg>
          <span>Mon-Sun: 24/7</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
