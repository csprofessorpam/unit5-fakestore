import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart

import './Header.css'

function Header() {
  return (
    <div className="header-container">
        <h2>Fake Store</h2>
        <div className="cart-wrapper">
        <AiOutlineShoppingCart className="cart-icon"/><span className="cart-num">3</span>
        </div>
    </div>
  )
}

export default Header