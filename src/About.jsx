import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => (
  <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
    <div className="w-full bg-black text-[#f6c90e]   text-center font-bold py-2 text-lg">
    <marquee>
        Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
        </marquee>
    </div>
    <Navbar />
    <main className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6 sm:mb-10 text-center">About Nexa Car Rental Goa</h1>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-10">
        <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
          <b>Nexa Car Rental Goa</b> is a pioneer in Goa's private ground transportation business, offering a comprehensive suite of long and short term car rental options. We are committed to providing the best self-drive car rental experience in Goa with a modern fleet, transparent pricing, and 24/7 support.
        </p>
        <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
          <b>Our Mission:</b> To make your Goa trip memorable and hassle-free by providing well-maintained, sanitized, and reliable self-drive cars at affordable rates.
        </p>
        <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
          <b>Contact Us:</b><br/>
          Phone: <a href="tel:+917045809109" className="text-blue-600 underline">+917045809109</a><br/>
          Email: <a href="mailto:kingkanegoa.rentals@gmail.com" className="text-blue-600 underline">Nexarentals@gmail.com</a><br/>
          Location: Goa, India
        </p>
        <p className="text-base sm:text-lg text-gray-800">
          Thank you for choosing Nexa Car Rental Goa. We look forward to serving you!
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;