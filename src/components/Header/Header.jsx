import React, {useContext} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
//AiOutlineShoppingCart
import './Header.css'


function Header() {

  //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  return (
    <div className="header-container">
        <Link to="/"><h2>Pam's Fake Store</h2></Link>
        <Link to='/checkout' className="cart-wrapper">
          <AiOutlineShoppingCart className="cart-icon"/>
          <p className="cart-num">{cart.length}</p>
        </Link>
    </div>
  )
}

export default Header