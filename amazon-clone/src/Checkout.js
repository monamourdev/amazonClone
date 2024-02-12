import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cc217dcd-1224-44bf-8039-d92946e12d8c.jpg" alt="" />
                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className='checkout__right'>
                
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}

                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
