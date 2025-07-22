import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const faqs = [
  {
    q: 'How do I book a car?',
    a: 'Select your car, call us or WhatsApp, and confirm your booking with a small advance.'
  },
  {
    q: 'Is fuel included in the rental?',
    a: 'No, fuel is not included. You must return the car with the same fuel level as at pickup.'
  },
  {
    q: 'What documents are required?',
    a: 'A valid driving license and government-issued ID proof are required.'
  },
  {
    q: 'Can I take the car outside Goa?',
    a: 'No, self-drive cars are not allowed outside Goa as per government policy.'
  },
  {
    q: 'What is the minimum booking duration?',
    a: 'Minimum 2 days booking is required for all self-drive cars.'
  },
];

const FAQs = () => (
  <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
    <div className="w-full bg-black text-[#f6c90e] text-center font-bold py-2 text-lg">
    <marquee>
        Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
        </marquee>
    </div>
    <Navbar />
    <main className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">Frequently Asked Questions</h1>
      <div className="bg-white rounded-xl shadow-lg divide-y">
        {faqs.map((item, i) => (
          <div key={i} className="p-8">
            <div className="text-xl font-bold text-blue-700 mb-2">Q. {item.q}</div>
            <div className="text-lg text-gray-800">{item.a}</div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQs;