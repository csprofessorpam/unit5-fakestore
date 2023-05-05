import React, {useContext} from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'
import Modal from 'react-modal'
import './Checkout.css'

function Checkout() {

    //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)

    //create state to control Modal
    const [isOpen, setIsOpen] = React.useState(false);

   //styling for Modal
   const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
    },
    overlay:{
      backgroundColor:"rgba(0, 0, 0, 0.6)"
    }
  };

   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
   Modal.setAppElement(document.getElementById('root'));
 
   const getTotal = () =>{
    //loop through products in cart
    let total = 0;
    for (let i = 0; i < cart.length; i++){
      total += cart[i].price;
    }
    return total;
   }

  return (
    <div className="checkout-container">
        <h2>Item   Price   Quantity   Remove</h2>
        <div className="items-container">
        {
            cart.map(item => <CartItem product={item}/>)
            // cart.map(item=><p>{item?.title}</p>)
        }
        </div>
        <div className="checkout-right">
        <h2>Total {getTotal()}</h2>
        <button onClick={()=>setIsOpen(true)}>Checkout</button>
        </div>
        {/* Checkout should clear cart? */}

        <Modal
          isOpen={isOpen}   
          onRequestClose={()=>setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
      >
      <div className="modal-header">
        <h2>Your Order was successful!</h2>
        <h3>check your email for the order confirmation.  Thank you for shopping with Pam's Fake Store!</h3>
        <button className="modal-close-btn"
                onClick={()=>setIsOpen(false)}>Return to Main Page
        </button>
      </div>
        
      </Modal>

    </div>
  )
}

export default Checkout