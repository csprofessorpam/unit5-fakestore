import React from 'react'
import { useParams } from 'react-router-dom'


function ProductDetail() {

    const {prodId} = useParams();

  return (
    <div>ProductDetail {prodId}</div>
  )
}

export default ProductDetail