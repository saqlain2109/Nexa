import React from 'react';
import Navbar from './Navbar';

const fleet = [
  { name: 'Mahindra Thar', type: 'SUV', transmission: 'Automatic', seats: 4 },
  { name: 'Hyundai Creta', type: 'SUV', transmission: 'Automatic', seats: 5 },
  { name: 'Maruti Suzuki Swift', type: 'Hatchback', transmission: 'Manual/Auto', seats: 5 },
  { name: 'Maruti Suzuki Baleno', type: 'Hatchback', transmission: 'Manual/Auto', seats: 5 },
  { name: 'Hyundai Grand i10 Nios', type: 'Hatchback', transmission: 'Automatic', seats: 5 },
  { name: 'Innova Hycross', type: 'SUV', transmission: 'Automatic', seats: 7 },
];

const FleetPrices = () => (
  <div className="min-h-screen bg-gray-50 overflow-x-hidden overflow-y-auto">
    <div className="w-full bg-blue-600 text-white text-center font-bold py-2 text-lg">
      Minimum 2 days booking for all self drive 4-wheelers in Goa. We don't provide cars for 1 day.
    </div>
    <Navbar />
    <main className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">Our Fleet & Features</h1>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-left text-lg">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-4 px-6 font-bold">Car</th>
              <th className="py-4 px-6 font-bold">Type</th>
              <th className="py-4 px-6 font-bold">Transmission</th>
              <th className="py-4 px-6 font-bold">Seats</th>
            </tr>
          </thead>
          <tbody>
            {fleet.map((car, i) => (
              <tr key={i} className="border-b last:border-b-0 hover:bg-blue-50 transition">
                <td className="py-4 px-6 font-semibold">{car.name}</td>
                <td className="py-4 px-6">{car.type}</td>
                <td className="py-4 px-6">{car.transmission}</td>
                <td className="py-4 px-6">{car.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-10">
        <a href="tel:+919987345878" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-700 transition text-xl">Call to Book Now</a>
      </div>
    </main>
  </div>
);

export default FleetPrices; 