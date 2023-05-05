import {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props){
    //create the global state
    const [cart, setCart] = useState([])

    //get inital state from localStorage when page loads
    /*useEffect(
        ()=>{
            //is there a value in localStorage
            const storedFavs = localStorage.getItem('favoritesList')
            //check if something was there
            if (storedFavs){
                //console.log('datatype is ', typeof(storedDarkMode))
                //setDarkMode(storedDarkMode)
                //parse converts from string to its datatype
                setFavorites(JSON.parse(storedFavs))
            }
            //otherwise will use default state value

        }, []
    )
    */

    // //save to localStorage whenever it changes
    // useEffect(
    //     ()=>{
    //         //save current state to localStorage when it changes
    //         //stringify converts to JSON string format
    //         localStorage.setItem('darkMode', JSON.stringify(darkMode))
    //         //localStorage.setItem('darkMode', darkMode)

    //     }, [darkMode]
    // )

    const addProduct = (productToAdd) =>{
        console.log('adding', productToAdd)
        let newCart;
        newCart = [...cart, productToAdd]
        setCart(newCart)
        // localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
    }

    const removeProduct = (prodId) =>{
        console.log("remove", prodId)
        let newCart;
        newCart = cart.filter(item => item.id !== prodId)
        setCart(newCart)
        // localStorage.setItem('favoritesList', JSON.stringify(newFavorites))
    }

    return(
        <CartContext.Provider value={{ cart, addProduct, removeProduct }} >
            {props.children}
        </CartContext.Provider>
    )


}