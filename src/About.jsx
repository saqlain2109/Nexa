import React from 'react';
import Navbar from './Navbar';

const About = () => (
  <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
    <div className="w-full bg-blue-600 text-white text-center font-bold py-2 text-lg">
      Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
    </div>
    <Navbar />
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">About Nexa Car Rental Goa</h1>
      <div className="bg-white rounded-xl shadow-lg p-10">
        <p className="text-lg text-gray-800 mb-6">
          <b>Nexa Car Rental Goa</b> is a pioneer in Goa's private ground transportation business, offering a comprehensive suite of long and short term car rental options. We are committed to providing the best self-drive car rental experience in Goa with a modern fleet, transparent pricing, and 24/7 support.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          <b>Our Mission:</b> To make your Goa trip memorable and hassle-free by providing well-maintained, sanitized, and reliable self-drive cars at affordable rates.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          <b>Contact Us:</b><br/>
          Phone: <a href="tel:+919987345878" className="text-blue-600 underline">+91 99873 45878</a><br/>
          Email: <a href="mailto:kingkanegoa.rentals@gmail.com" className="text-blue-600 underline">kingkanegoa.rentals@gmail.com</a><br/>
          Location: Goa, India
        </p>
        <p className="text-lg text-gray-800">
          Thank you for choosing Nexa Car Rental Goa. We look forward to serving you!
        </p>
      </div>
    </main>
  </div>
);

export default About; 