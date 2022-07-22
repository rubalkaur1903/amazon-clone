import React from 'react'
import "../cssFiles/checkout.css"
import { Subtotal } from '../components'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg' alt='checkout banner' />
            <div>
                <h2 className='checkout-title'>
                    Your Shopping Cart
                </h2>
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout