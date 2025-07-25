import React from 'react'
import logoImg from './assets/logo.jpg';
import tharImg from './assets/thar.jpg';
import tharNewImg from './assets/2021-Mahindra-Thar.jpg';
import cretaImg from './assets/creta-new-model.webp';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar'
import cars from './carData';
import Footer from './Footer';

const beachImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Placeholder image

// Helper SVGs for features
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

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
      {/* Top Info Bar */}
      <div className="w-full bg-black text-[#f6c90e] text-center font-bold py-2 text-lg">
      <marquee>
        Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
        </marquee>
      </div>
      <Navbar />
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-12 md:py-20 max-w-7xl mx-auto bg-[#f8fafc]">
        {/* Left: Text & Form */} 
        <div className="flex-1 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2238] mb-4">Rent a Car in Goa with Nexa Goa</h2>
          <p className="text-[#22223b] text-base sm:text-lg">Nexa Car Rental Goa is a pioneer in the development of the Goa private ground transportation business. It is the leading automobile rental service provider in Goa, offering a comprehensive suite of long and short term car rental options. We want our clients to have a good experience in Goa, therefore we offer the most affordable rates on self drive cars in goa.<br/>
          {/* <a href="#" className="text-blue-600 underline font-medium mt-2 inline-block">Read More</a> */}
        </p>
        </div>
        {/* Right: Beach Image */}
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <img src='https://kingkanegoa.com/wp-content/themes/rentalx/images/home-banner-image.webp' alt="Goa Beach" className="rounded-3xl w-full max-w-md md:max-w-xl h-auto md:h-[400px] object-cover shadow-xl" />
        </div>
      </main>
      {/* About Section */}
      {/* Featured Cars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-15 bg-[#f8fafc]">
        {/* Filter Icons */}
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-12 md:gap-y-14 justify-items-center">
          {/* Dummy car cards */}
          {cars.map((car, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col w-full max-w-[390px] md:max-w-[420px] mx-auto transition-transform hover:scale-[1.025] border border-[#eaeaea]">
              <img src={car.image} alt={car.name} className="w-full h-40 sm:h-48 object-contain mb-4 sm:mb-8 rounded-xl bg-[#f8fafc] shadow" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a2238] mb-4 sm:mb-8 leading-tight">{car.name}</h3>
              <div className="text-[#f6c90e] text-sm sm:text-base font-semibold mb-2">Minimum 2 days booking</div>
              {/* price removed */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                {car.features.map((f, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white border border-[#eaeaea] mb-1 shadow-sm">
                      {featureIcons[f] || <span className="text-xs text-gray-400">?</span>}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-medium mt-1 text-center">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6 mt-auto">
                <a
                  href="tel:+917045809109"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a2238] text-white font-bold py-3 rounded-xl shadow hover:bg-[#f6c90e] hover:text-[#1a2238] transition"
                >
                  <FaPhoneAlt className="text-lg" />Call to Book
                </a>
                <button 
                  onClick={() => window.open(`https://wa.me/917045809109?text=Hi, I want to book ${car.name} for rental.`, '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#f6c90e] text-[#1a2238] font-bold py-3.5 px-1 rounded-xl shadow hover:bg-[#1a2238] hover:text-[#f6c90e] transition"
                >
                  <FaWhatsapp className="text-3xl ml-2" />Book on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Info Section: Looking for Car Hire in Goa? */}
      <section className="max-w-full min-h-[500px] mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col md:flex-row md:items-start md:justify-between bg-white rounded-xl shadow-sm mb-8">
        {/* Left: Heading + Paragraph */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-6 lg:pr-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2238] mb-3 sm:mb-4">Looking for Car Hire in Goa?</h2>
          <p className="text-[#22223b] text-base sm:text-lg">Nexa Goa understands how crucial mobility is and is dedicated to offering its customers with high-quality car rental services at affordable rates. For the best automobile rental service in Goa, go no further than Nexa Car Rentals. We provide both manual and automatic transmission automobiles, ideal for both leisure and business journeys.<br/><br/>Whether you're looking for a high-end sports utility vehicle, SUV or an economy car, we have you covered. Because we accept upcountry customers as well, you can easily book your self-drive car or get car rental services.</p>
        </div>
        {/* Right: Blue Info Boxes */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          {/* Box 1 */}
          <div className="flex items-center bg-[#f8fafc] border border-[#1a2238] rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="bg-[#1a2238] rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center">
              {/* Headset Icon */}
              <svg width="24" height="24" className="sm:w-28 sm:h-28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M6 18v-2a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#2563eb" strokeWidth="1.5"/><path d="M6 10V8a6 6 0 1112 0v2" stroke="#2563eb" strokeWidth="1.5"/><circle cx="8.5" cy="15.5" r="1.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><circle cx="15.5" cy="15.5" r="1.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/></svg>
            </div>
            <span className="text-base sm:text-lg font-semibold text-[#1a2238]">24/7 Customer Support Service</span>
          </div>
          {/* Box 2 */}
          <div className="flex items-center bg-[#f8fafc] border border-[#1a2238] rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="bg-[#1a2238] rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center">
              {/* Car Icon */}
              <svg width="24" height="24" className="sm:w-28 sm:h-28" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="7" rx="2" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><rect x="6" y="7" width="12" height="5" rx="2.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><circle cx="7.5" cy="18" r="1.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/><circle cx="16.5" cy="18" r="1.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/></svg>
            </div>
            <span className="text-base sm:text-lg font-semibold text-[#1a2238]">24/7 Pickup & Drop Services</span>
          </div>
          {/* Box 3 */}
          <div className="flex items-center bg-[#f8fafc] border border-[#1a2238] rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="bg-[#1a2238] rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex items-center justify-center">
              {/* Booking Icon */}
              <svg width="24" height="24" className="sm:w-28 sm:h-28" fill="none" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><path d="M8 3v4M16 3v4" stroke="#fff" strokeWidth="1.5"/><rect x="8" y="10" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="14" width="8" height="2" rx="1" fill="#fff"/></svg>
            </div>
            <span className="text-base sm:text-lg font-semibold text-[#1a2238]">24/7 Car Rental Booking Services</span>
          </div>
        </div>
      </section>
      {/* How our process works Section */}
      <section className="max-w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col md:flex-row md:items-stretch md:justify-between mb-8">
        {/* Left: Heading + Paragraph */}
        <div className="flex-1 bg-[#f8fafc] rounded-l-xl rounded-r-xl md:rounded-r-none shadow-lg p-4 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2238] mb-4 sm:mb-6">How our process works?</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#22223b] leading-relaxed">
            We offer a straightforward, step-by-step procedure with minimal paperwork for all car rental in goa. Select a ride of your choice and give us a call. We will confirm your booking and message all the details related to car details, pickup points, etc on your WhatsApp and email Id. You have to pay some advance amount to make sure. Only the most fundamental conditions must be met, such as being of legal driving age and possessing a current driver's license.
          </p>
        </div>
        {/* Right: Timeline Steps */}
        <div className="flex-1 bg-[#1a2238] rounded-r-xl rounded-l-xl md:rounded-l-none shadow-lg p-4 sm:p-8 flex flex-col justify-center mt-8 md:mt-0 relative overflow-visible">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-0 top-12 bottom-12 w-0.5 border-dotted border-l-2 border-white z-0" style={{left: '-32px'}}></div>
          <ol className="space-y-8 sm:space-y-12 md:space-y-16 relative z-10">
            {/* Step 1 */}
            <li className="flex items-center relative min-h-[60px] sm:min-h-[80px]">
              {/* Icon on the border */}
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-[#1a2238] absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Car Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="7" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><rect x="6" y="7" width="12" height="5" rx="2.5" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><circle cx="7.5" cy="18" r="1.5" fill="#fff" stroke="#000" strokeWidth="1.5"/><circle cx="16.5" cy="18" r="1.5" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              {/* Number in white circle */}
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1a2238] font-bold text-lg sm:text-xl shadow z-10 ml-0 md:ml-8">1</span>
              {/* Step text */}
              <span className="ml-4 sm:ml-6 text-base sm:text-lg md:text-xl font-medium text-white">Select a ride of your choice</span>
            </li>
            {/* Step 2 */}
            <li className="flex items-center relative min-h-[60px] sm:min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-[#1a2238] absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Computer Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><rect x="7" y="17" width="10" height="2" rx="1" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1a2238] font-bold text-lg sm:text-xl shadow z-10 ml-0 md:ml-8">2</span>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg md:text-xl font-medium text-white">Give us a call or message on whatsapp</span>
            </li>
            {/* Step 3 */}
            <li className="flex items-center relative min-h-[60px] sm:min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-[#1a2238] absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Smile Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><path d="M8 14c.667 1 2 1 2.5 1s1.833 0 2.5-1" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#000"/><circle cx="15" cy="10" r="1" fill="#000"/></svg>
              </span>
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1a2238] font-bold text-lg sm:text-xl shadow z-10 ml-0 md:ml-8">3</span>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg md:text-xl font-medium text-white">We will confirm your booking and send you a confirmation message</span>
            </li>
            {/* Step 4 */}
            <li className="flex items-center relative min-h-[60px] sm:min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-[#1a2238] absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Garage Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><path d="M4 10V7a2 2 0 012-2h12a2 2 0 012 2v3" stroke="#000" strokeWidth="1.5"/><rect x="8" y="14" width="8" height="4" rx="2" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#1a2238] font-bold text-lg sm:text-xl shadow z-10 ml-0 md:ml-8">4</span>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg md:text-xl font-medium text-white">Pick up your car, drive and drop off to us</span>
            </li>
          </ol>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      
      {/* Fixed Call and WhatsApp Buttons */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-between px-4 z-50">
        <a
          href="tel:+917045809109"
          className="flex items-center justify-center gap-2 bg-[#1a2238] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-[#f6c90e] hover:text-[#1a2238] transition-all"
        >
          <FaPhoneAlt className="text-[30px]" />
        </a>
        
        <a 
          href="https://wa.me/917045809109?text=Hi, I want to book a car for rental."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all"
        >
          <FaWhatsapp className="text-[40px]" />
        </a>
      </div>
    </div>
  )
}

export default App
