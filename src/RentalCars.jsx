import React, { useState } from 'react'
import logoImg from './assets/logo.jpg';
import tharImg from './assets/thar.jpg';
import tharNewImg from './assets/2021-Mahindra-Thar.jpg';
import cretaImg from './assets/creta-new-model.webp';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const featureIcons = {
  Automatic: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 12h10M12 7v10" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  Manual: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="1.5" fill="none"/><path d="M8 16V8m0 0h8m-8 0l8 8" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  '5 Seat': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="7" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="7" cy="18" r="1.5" fill="#222"/><circle cx="17" cy="18" r="1.5" fill="#222"/></svg>
  ),
  '4 Seat': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="7" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="8" cy="18" r="1.5" fill="#222"/><circle cx="16" cy="18" r="1.5" fill="#222"/></svg>
  ),
  '2 Luggage': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="9" y="7" width="6" height="3" rx="1.5" stroke="#222" strokeWidth="1.5"/></svg>
  ),
  '3 Luggage': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="8" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="8" y="7" width="8" height="3" rx="1.5" stroke="#222" strokeWidth="1.5"/></svg>
  ),
  '4 Luggage': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="7" y="7" width="10" height="3" rx="1.5" stroke="#222" strokeWidth="1.5"/></svg>
  ),
  Petrol: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><path d="M17 7v2a2 2 0 002 2h0" stroke="#222" strokeWidth="1.5"/></svg>
  ),
  Diesel: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><path d="M17 7v2a2 2 0 002 2h0" stroke="#222" strokeWidth="1.5"/><circle cx="12" cy="17" r="1.5" fill="#222"/></svg>
  ),
  SUV: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="7" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="7" cy="18" r="1.5" fill="#222"/><circle cx="17" cy="18" r="1.5" fill="#222"/></svg>
  ),
  Hatchback: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="12" width="12" height="5" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="8" cy="18" r="1.5" fill="#222"/><circle cx="16" cy="18" r="1.5" fill="#222"/></svg>
  ),
  '57 Ltr.': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="8" y="7" width="8" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="10" y="3" width="4" height="4" rx="2" stroke="#222" strokeWidth="1.5"/></svg>
  ),
  '50 Ltr.': (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="8" y="7" width="8" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="10" y="3" width="4" height="4" rx="2" stroke="#222" strokeWidth="1.5"/></svg>
  ),
};

const filterIcons = [
  { label: 'All', icon: <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="7" y="13" width="10" height="4" rx="2" fill="#2563eb"/><rect x="8" y="7" width="8" height="6" rx="2" fill="#2563eb"/></svg> },
  { label: 'Hatchback', icon: <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="6" y="13" width="12" height="4" rx="2" fill="#2563eb"/><rect x="8" y="9" width="8" height="4" rx="2" fill="#2563eb"/></svg> },
  { label: 'Sedan', icon: <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="5" y="14" width="14" height="3" rx="1.5" fill="#2563eb"/><rect x="7" y="10" width="10" height="4" rx="2" fill="#2563eb"/></svg> },
  { label: 'SUV', icon: <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="6" y="13" width="12" height="4" rx="2" fill="#2563eb"/><rect x="7" y="8" width="10" height="5" rx="2.5" fill="#2563eb"/></svg> },
  { label: 'Thar', icon: <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="7" y="13" width="10" height="4" rx="2" fill="#2563eb"/><rect x="9" y="8" width="6" height="5" rx="2.5" fill="#2563eb"/></svg> },
];

const mainDescription = `**Rent a Car in Goa** with King Kane Goa. We provide a large selection of reasonably priced vehicle rentals in various categories, whether it’s for a business trip, a leisurely vacation, or a family vacation to Goa. To help you have a great time in Goa, we offer **self drive cars goa** for rent at incredibly low rates. Book our assured Sedan or assured SUV hire categories if you like to rent certain car manufacturers, such as Innova or Swift Dzire or Mahindra Thar. The automobile fleets from King Kane Goa are completely furnished with the newest conveniences and security measures to guarantee that your journeys will be secure, practical, and enjoyable.\n\nLook for the cheapest car rental in goa so you don’t have to worry about extra costs or your wallet while enjoying this idyllic destination. When it comes to self-drive vehicle rentals in Goa, the client experience is our main focus. You may drive as much as you want as long as you feel like you own the automobile.\n\nNote – To lower the overall cost, attempt to pick up the car at/after 9 a.m. and return it at/before 9 a.m. on the day of return.\n\nIt is strictly not allowed to take self drive cars outside Goa without permission. The government has a strict policy regarding this and heavy penalties will be charged for this violation.`;

function renderDescription(text) {
  // Render bold for **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <b key={i}>{part.replace(/\*\*/g, '')}</b>;
    }
    return part;
  });
}

const RentalCars = () => {
  const [showFull, setShowFull] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Show first 4 lines when collapsed
  const lines = mainDescription.split('\n');
  const collapsedText = lines.slice(0, 4).join(' ');

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
      {/* Top Info Bar */}
      <div className="w-full bg-blue-600 text-white text-center font-bold py-2 text-lg">
        Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
      </div>
      <Navbar />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Heading and Description */}
        <div className="bg-white rounded-xl shadow p-6 md:p-10 mb-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">Rent a Car in Goa – King Kane Car Rental Goa</h1>
          <div className="relative w-full max-w-4xl mx-auto text-center">
            <div
              className={`text-gray-800 text-lg md:text-xl leading-relaxed mx-auto transition-all duration-300 ${showFull ? '' : 'line-clamp-4'} whitespace-pre-line font-normal`}
              style={{
                maxHeight: showFull ? 'none' : '7.5em',
                overflow: 'hidden',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              {showFull ? renderDescription(mainDescription.replace(/\n/g, '\n')) : renderDescription(collapsedText)}
              {!showFull && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '2.5em',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 100%)',
                  }}
                />
              )}
            </div>
            <button
              className="mt-6 text-lg font-semibold text-black flex items-center justify-center gap-2 mx-auto focus:outline-none"
              onClick={() => setShowFull(v => !v)}
            >
              {showFull ? 'Read Less' : 'Read More'}
              {showFull ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
        {/* Filter Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {filterIcons.map((f, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer">
              {f.icon}
              <span className="mt-2 text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-14 justify-items-center">
          {/* Dummy car cards */}
          {[
            {
              name: 'Thar Automatic Roxx Brand New',
              // price: '₹5000/day',
              image: tharImg,
              features: ['Automatic', '5 Seat', '4 Luggage', 'Petrol', 'SUV'],
            },
            {
              name: 'Hyundai Creta New Model',
              // price: '₹3500/day',
              image: cretaImg,
              features: ['Automatic', '5 Seat', '4 Luggage', 'Petrol', 'SUV'],
            },
            {
              name: 'Mahindra Thar New Automatic',
              // price: '₹3500/day',
              image: tharNewImg,
              features: ['Automatic', '4 Seat', '3 Luggage', 'Diesel', 'SUV'],
            },
            {
              name: 'Maruti Suzuki Swift New Model (Manual)',
              // price: '₹1200/day',
              image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=400',
              features: ['Manual', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Swift (Automatic)',
              // price: '₹1500/day',
              image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Baleno New Model (Manual)',
              // price: '₹1300/day',
              image: 'https://images.pexels.com/photos/50632/pexels-photo-50632.jpeg?auto=compress&w=400',
              features: ['Manual', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Baleno New Model (Automatic)',
              // price: '₹1600/day',
              image: 'https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Hyundai Grand i10 Nios (Automatic)',
              // price: '₹1500/day',
              image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Innova Hycross - Automatic',
              // price: '₹4000/day',
              image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=400',
              features: ['Automatic', '7 Seat', '4 Luggage', 'Diesel', 'SUV'],
            },
          ].map((car, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col w-full max-w-[390px] md:max-w-[420px] mx-auto transition-transform hover:scale-[1.025] border border-gray-100">
              <img src={car.image} alt={car.name} className="w-full h-48 object-contain mb-8 rounded-xl bg-gray-100 shadow" />
              <h3 className="text-2xl font-bold text-black mb-8 leading-tight">{car.name}</h3>
              <div className="text-green-600 text-base font-semibold mb-2">Minimum 2 days booking</div>
              {/* price removed */}
              <div className="flex justify-center gap-4 mb-8">
                {car.features.map((f, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 mb-1 shadow-sm">
                      {featureIcons[f] || <span className="text-xs text-gray-400">?</span>}
                    </div>
                    <span className="text-sm text-gray-700 font-medium mt-1">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6 mt-auto">
                <a
                  href="tel:+919987345878"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl shadow hover:bg-blue-700 transition"
                >
                  <FaPhoneAlt className="text-lg" />Call to Book
                </a>
                <button 
                  onClick={() => window.open(`https://wa.me/919987345878?text=Hi, I want to book ${car.name} for rental.`, '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 px-1 rounded-xl shadow hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="text-3xl ml-2" />Book on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-[#181818] text-white pt-12 pb-4 mt-8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Logo & tagline */}
          <div className="flex flex-col items-start gap-4">
            <img src={logoImg} alt="Logo" className="w-16 h-16 object-contain rounded-md p-2" />
            <div className="text-2xl font-bold">NEXA</div>
            <div className="text-sm text-gray-400">CAR RENTAL GOA</div>
            <div className="text-xs text-gray-500 mt-4">© 2023 - 2024 King Kane Car Rentals | All Rights Reserved</div>
          </div>
          {/* Center: Quick Links */}
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold mb-2">Quick Links</div>
            <a href="#" className="hover:underline text-gray-300">Rental Cars</a>
            <a href="#" className="hover:underline text-gray-300">Fleet & Prices</a>
            <a href="#" className="hover:underline text-gray-300">FAQs</a>
            <a href="#" className="hover:underline text-gray-300">About</a>
            <div className="text-lg font-semibold mt-4 mb-2">Goa Rental Links</div>
            <a href="#" className="hover:underline text-gray-300">Car Rental in Baga</a>
            <a href="#" className="hover:underline text-gray-300">Car Rental in Calangute</a>
            <a href="#" className="hover:underline text-gray-300">Car Rental in Candolim</a>
            <a href="#" className="hover:underline text-gray-300">Car Rental in Mapusa</a>
            <a href="#" className="hover:underline text-gray-300">Car Rental in Panaji</a>
          </div>
          {/* Right: Get in Touch */}
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold mb-2">Get in Touch</div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="#ffe000" strokeWidth="2"/></svg>
              <span>+91 99873 45878</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#ffe000" strokeWidth="2"/></svg>
              <span>kingkanegoa.rentals@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ffe000" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#ffe000" strokeWidth="2"/></svg>
              <span>Mon-Sun: 24/7</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">Site by bytetgrow</div>
      </footer>
    </div>
  )
}

export default RentalCars 