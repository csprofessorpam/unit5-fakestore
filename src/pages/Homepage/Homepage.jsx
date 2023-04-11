//import axios from 'axios'
import React from 'react'
import "./Homepage.css"
import { axios } from 'axios';



function Homepage() {
    //get categories when the page loads
    React.useEffect(
        ()=>{
            axios.get("https://fakestoreapi.com/products/categories")
            .then(res =>{
                console.log(res)
            })
            .catch(err => console.log(err))

        }, []
    )
  return (
    <div>Homepage</div>
  )
}

export default Homepage