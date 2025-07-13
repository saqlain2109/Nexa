import React from 'react'
import logoImg from './assets/logo.jpg';
import tharImg from './assets/thar.jpg';
import tharNewImg from './assets/2021-Mahindra-Thar.jpg';
import cretaImg from './assets/creta-new-model.webp';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar'

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
      <div className="w-full bg-blue-600 text-white text-center font-bold py-2 text-lg">
        Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
      </div>
      <Navbar />
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-20 max-w-7xl mx-10">
        {/* Left: Text & Form */} 
        <div className="flex-1 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Rent a Car in Goa with Nexa Goa</h2>
          <p className="text-gray-700 text-lg">Nexa Car Rental Goa is a pioneer in the development of the Goa private ground transportation business. It is the leading automobile rental service provider in Goa, offering a comprehensive suite of long and short term car rental options. We want our clients to have a good experience in Goa, therefore we offer the most affordable rates on self drive cars in goa.<br/>
          {/* <a href="#" className="text-blue-600 underline font-medium mt-2 inline-block">Read More</a> */}
        </p>
        </div>
        {/* Right: Beach Image */}
        <div className="flex-1 flex justify-start items-center">
          <img src='https://kingkanegoa.com/wp-content/themes/rentalx/images/home-banner-image.webp' alt="Goa Beach" className="rounded-3xl w-[780px] max-w-xl h-[400px] object-cover shadow-xl" />
        </div>
      </main>
      {/* About Section */}
      {/* Featured Cars Section */}
      <section className="max-w-7xl mx-auto px-8 py-15">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">Featured Cars</h2>
        {/* Filter Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {/* All */}
          <div className="flex flex-col items-center cursor-pointer">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="7" y="13" width="10" height="4" rx="2" fill="#2563eb"/><rect x="8" y="7" width="8" height="6" rx="2" fill="#2563eb"/></svg>
            <span className="mt-2 text-sm font-medium">All Cars</span>
          </div>
          {/* Hatchback */}
          <div className="flex flex-col items-center cursor-pointer">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="6" y="13" width="12" height="4" rx="2" fill="#2563eb"/><rect x="8" y="9" width="8" height="4" rx="2" fill="#2563eb"/></svg>
            <span className="mt-2 text-sm font-medium">Hatchback</span>
          </div>
          {/* Sedan */}
          <div className="flex flex-col items-center cursor-pointer">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="5" y="14" width="14" height="3" rx="1.5" fill="#2563eb"/><rect x="7" y="10" width="10" height="4" rx="2" fill="#2563eb"/></svg>
            <span className="mt-2 text-sm font-medium">Sedan</span>
          </div>
          {/* SUVs */}
          <div className="flex flex-col items-center cursor-pointer">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="6" y="13" width="12" height="4" rx="2" fill="#2563eb"/><rect x="7" y="8" width="10" height="5" rx="2.5" fill="#2563eb"/></svg>
            <span className="mt-2 text-sm font-medium">SUVs</span>
          </div>
          {/* Thar */}
          <div className="flex flex-col items-center cursor-pointer">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#fff"/><rect x="7" y="13" width="10" height="4" rx="2" fill="#2563eb"/><rect x="9" y="8" width="6" height="5" rx="2.5" fill="#2563eb"/></svg>
            <span className="mt-2 text-sm font-medium">Thar</span>
          </div>
        </div>
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-14 justify-items-center">
          {/* Dummy car cards */}
          {[
            {
              name: 'Thar Automatic Roxx Brand New',
              image: tharImg,
              features: ['Automatic', '5 Seat', '4 Luggage', 'Petrol', 'SUV'],
            },
            {
              name: 'Hyundai Creta New Model',
              image: cretaImg,
              features: ['Automatic', '5 Seat', '4 Luggage', 'Petrol', 'SUV'],
            },
            {
              name: 'Mahindra Thar New Automatic',
              image: tharNewImg,
              features: ['Automatic', '4 Seat', '3 Luggage', 'Diesel', 'SUV'],
            },
            {
              name: 'Maruti Suzuki Swift New Model (Manual)',
              image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=400',
              features: ['Manual', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Swift (Automatic)',
              image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Baleno New Model (Manual)',
              image: 'https://images.pexels.com/photos/50632/pexels-photo-50632.jpeg?auto=compress&w=400',
              features: ['Manual', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Maruti Suzuki Baleno New Model (Automatic)',
              image: 'https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Hyundai Grand i10 Nios (Automatic)',
              image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400',
              features: ['Automatic', '5 Seat', '2 Luggage', 'Petrol', 'Hatchback'],
            },
            {
              name: 'Innova Hycross - Automatic',
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
        {/* View All Cars Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">View All Cars</button>
        </div>
      </section>
      {/* Info Section: Looking for Car Hire in Goa? */}
      <section className="max-w-full h-[500px] mx-auto px-8 py-12 flex flex-col md:flex-row md:items-start md:justify-between bg-white rounded-xl shadow-sm mb-8">
        {/* Left: Heading + Paragraph */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Looking for Car Hire in Goa?</h2>
          <p className="text-gray-700 text-lg">Nexa Goa understands how crucial mobility is and is dedicated to offering its customers with high-quality car rental services at affordable rates. For the best automobile rental service in Goa, go no further than Nexa Car Rentals. We provide both manual and automatic transmission automobiles, ideal for both leisure and business journeys.<br/><br/>Whether you're looking for a high-end sports utility vehicle, SUV or an economy car, we have you covered. Because we accept upcountry customers as well, you can easily book your self-drive car or get car rental services.</p>
        </div>
        {/* Right: Blue Info Boxes */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Box 1 */}
          <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 rounded-full p-3 mr-4 flex items-center justify-center">
              {/* Headset Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M6 18v-2a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#2563eb" strokeWidth="1.5"/><path d="M6 10V8a6 6 0 1112 0v2" stroke="#2563eb" strokeWidth="1.5"/><circle cx="8.5" cy="15.5" r="1.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><circle cx="15.5" cy="15.5" r="1.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/></svg>
            </div>
            <span className="text-lg font-semibold text-black">24/7 Customer Support Service</span>
          </div>
          {/* Box 2 */}
          <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 rounded-full p-3 mr-4 flex items-center justify-center">
              {/* Car Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="7" rx="2" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><rect x="6" y="7" width="12" height="5" rx="2.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><circle cx="7.5" cy="18" r="1.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/><circle cx="16.5" cy="18" r="1.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/></svg>
            </div>
            <span className="text-lg font-semibold text-black">24/7 Pickup & Drop Services</span>
          </div>
          {/* Box 3 */}
          <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm">
            <div className="bg-blue-600 rounded-full p-3 mr-4 flex items-center justify-center">
              {/* Booking Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2" fill="#2563eb" stroke="#fff" strokeWidth="1.5"/><path d="M8 3v4M16 3v4" stroke="#fff" strokeWidth="1.5"/><rect x="8" y="10" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="14" width="8" height="2" rx="1" fill="#fff"/></svg>
            </div>
            <span className="text-lg font-semibold text-black">24/7 Car Rental Booking Services</span>
          </div>
        </div>
      </section>
      {/* How our process works Section */}
      <section className="max-w-full mx-auto px-8 py-12 flex flex-col md:flex-row md:items-stretch md:justify-between mb-8">
        {/* Left: Heading + Paragraph */}
        <div className="flex-1 bg-gray-100 rounded-l-xl rounded-r-xl md:rounded-r-none shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-black mb-6">How our process works?</h2>
          <p className="text-xl text-black leading-relaxed">
            We offer a straightforward, step-by-step procedure with minimal paperwork for all car rental in goa. Select a ride of your choice and give us a call. We will confirm your booking and message all the details related to car details, pickup points, etc on your WhatsApp and email Id. You have to pay some advance amount to make sure. Only the most fundamental conditions must be met, such as being of legal driving age and possessing a current driver's license.
          </p>
        </div>
        {/* Right: Timeline Steps */}
        <div className="flex-1 bg-blue-600 rounded-r-xl rounded-l-xl md:rounded-l-none shadow-lg p-8 flex flex-col justify-center mt-8 md:mt-0 relative overflow-visible">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-0 top-12 bottom-12 w-0.5 border-dotted border-l-2 border-white z-0" style={{left: '-32px'}}></div>
          <ol className="space-y-16 relative z-10">
            {/* Step 1 */}
            <li className="flex items-center relative min-h-[80px]">
              {/* Icon on the border */}
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-blue-600 absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Car Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="7" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><rect x="6" y="7" width="12" height="5" rx="2.5" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><circle cx="7.5" cy="18" r="1.5" fill="#fff" stroke="#000" strokeWidth="1.5"/><circle cx="16.5" cy="18" r="1.5" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              {/* Number in white circle */}
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-xl shadow z-10 ml-0 md:ml-8">1</span>
              {/* Step text */}
              <span className="ml-6 text-lg md:text-xl font-medium text-white">Select a ride of your choice</span>
            </li>
            {/* Step 2 */}
            <li className="flex items-center relative min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-blue-600 absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Computer Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><rect x="7" y="17" width="10" height="2" rx="1" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-xl shadow z-10 ml-0 md:ml-8">2</span>
              <span className="ml-6 text-lg md:text-xl font-medium text-white">Give us a call or message on whatsapp</span>
            </li>
            {/* Step 3 */}
            <li className="flex items-center relative min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-blue-600 absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Smile Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><path d="M8 14c.667 1 2 1 2.5 1s1.833 0 2.5-1" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#000"/><circle cx="15" cy="10" r="1" fill="#000"/></svg>
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-xl shadow z-10 ml-0 md:ml-8">3</span>
              <span className="ml-6 text-lg md:text-xl font-medium text-white">We will confirm your booking and send you a confirmation message</span>
            </li>
            {/* Step 4 */}
            <li className="flex items-center relative min-h-[80px]">
              <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow text-3xl z-20 border-4 border-blue-600 absolute left-[-56px] top-1/2 -translate-y-1/2">
                {/* Garage Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="2" fill="#2563eb" stroke="#000" strokeWidth="1.5"/><path d="M4 10V7a2 2 0 012-2h12a2 2 0 012 2v3" stroke="#000" strokeWidth="1.5"/><rect x="8" y="14" width="8" height="4" rx="2" fill="#fff" stroke="#000" strokeWidth="1.5"/></svg>
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold text-xl shadow z-10 ml-0 md:ml-8">4</span>
              <span className="ml-6 text-lg md:text-xl font-medium text-white">Pick up your car, drive and drop off to us</span>
            </li>
          </ol>
        </div>
      </section>
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
            <Link to="/fleet-prices" className="hover:underline text-gray-300">Fleet & Prices</Link>
            <Link to="/faqs" className="hover:underline text-gray-300">FAQs</Link>
            <Link to="/about" className="hover:underline text-gray-300">About</Link>
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
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="#2563eb" strokeWidth="2"/></svg>
              <span>+91 99873 45878</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#2563eb" strokeWidth="2"/></svg>
              <span>kingkanegoa.rentals@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#2563eb" strokeWidth="2"/></svg>
              <span>Mon-Sun: 24/7</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">Site by bytetgrow</div>
      </footer>
    </div>
  )
}

export default App
