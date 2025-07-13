import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RentalCars from './RentalCars.jsx'
import FleetPrices from './FleetPrices.jsx'
import FAQs from './FAQs.jsx'
import About from './About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rental-cars" element={<RentalCars />} />
        <Route path="/fleet-prices" element={<FleetPrices />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
