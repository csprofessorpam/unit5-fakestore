import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ProductDetail.css'

function ProductDetail() {

    const {prodId} = useParams();

    const [product, setProduct] = React.useState('')

    //https://fakestoreapi.com/products/1

    React.useEffect(
      ()=>{
        //get data for this product when page loads
        axios.get(`https://fakestoreapi.com/products/${prodId}`)
        .then(res =>{
          console.log(res.data)
          setProduct(res.data)
        })
        .catch(err => console.log(err))

      }, []
    )

  return (
    <div className="details-container">
      <div className="product-details"> 
        <img src={product?.image} />
        <div className="details-info">
            <h3>{product?.title}</h3>
            <h3>{product?.price}</h3>
            <h3>Description</h3>
            <p>{product?.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail