import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ContactUs from './pages/ContactUs/ContactUs';
import CartContextProvider from './contexts/CartContext';
import Checkout from './pages/Checkout/Checkout';


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:prodId" element={<ProductDetail />} />
      </Routes>
      
      <Footer />
      </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
