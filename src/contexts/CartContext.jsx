import {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props){
    //create the global state
    const [cart, setCart] = useState([])

    //get inital state from localStorage when page loads
    useEffect(
        ()=>{
            //is there a value in localStorage
            const storedFavs = localStorage.getItem('fakeCart')
            //check if something was there
            if (storedFavs){
                //console.log('datatype is ', typeof(storedDarkMode))
                //setDarkMode(storedDarkMode)
                //parse converts from string to its datatype
                setCart(JSON.parse(storedFavs))
            }
            //otherwise will use default state value

        }, []
    )
    

    const addProduct = (productToAdd) =>{
        console.log('adding', productToAdd)
        let newCart;
        newCart = [...cart, productToAdd]
        setCart(newCart)
        localStorage.setItem('fakeCart', JSON.stringify(newCart))
    }

    const removeProduct = (prodId) =>{
        console.log("remove", prodId)
        let newCart;
        newCart = cart.filter(item => item.id !== prodId)
        setCart(newCart)
        localStorage.setItem('fakeCart', JSON.stringify(newCart))
    }

    return(
        <CartContext.Provider value={{ cart, addProduct, removeProduct, setCart }} >
            {props.children}
        </CartContext.Provider>
    )


}