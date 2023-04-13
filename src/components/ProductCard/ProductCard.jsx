import React from 'react'
import './ProductCard.css'
import { FaEuroSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
//FaEuroSign

function ProductCard({product}) {
  return (
    <Link to={`/details/${product?.id}`} className="product-card">
        <img src={product?.image} />
        <h5>{product?.title}</h5>
        <p>{product?.category}</p>
        <div className="prod-price">
        <FaEuroSign />
        <p>{product?.price}</p>
        </div>
    </Link>
  )
}

export default ProductCard