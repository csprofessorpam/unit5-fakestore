import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart

import './Header.css'

function Header() {
  return (
    <div className="header-container">
        <h2>Fake Store</h2>
        <AiOutlineShoppingCart className="cart-icon"/>
    </div>
  )
}

export default Header