import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
//AiOutlineShoppingCart


import './Header.css'

function Header() {
  return (
    <div className="header-container">
        <a href="/"><h2>Pam's Fake Store</h2></a>
        <div className="cart-wrapper">
          <AiOutlineShoppingCart className="cart-icon"/>
          <p className="cart-num">3</p>
        </div>
    </div>
  )
}

export default Header