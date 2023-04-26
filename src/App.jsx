import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ContactUs from './pages/ContactUs/ContactUs';


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/details/:prodId" element={<ProductDetail />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
