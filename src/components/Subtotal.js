import React from 'react'
import CurrencyFormat from 'react-currency-format'
import "../cssFiles/subtotal.css"
import { useStateValue } from '../context/StateProvider'
import { getCartTotal } from './reducer';


function Subtotal() {
    const [{cart}] = useStateValue();
    console.log("function getCartTotal: ", getCartTotal(cart))
    console.log("This is cart: ", cart)

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => {
                console.log("value", )
                return <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input type='checkbox' /> This order contains a gift.
                    </small>
                </>
            }}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;