import React from 'react'
import './checkout.css'
import ad from "../../img/ad.png"
import Subtotal from '../subtotal/subtotal'
import { useStateValue } from '../../stateProvider'
import CheckoutProduct from '../checkoutProduct/checkoutProduct'
import { useAuth } from '../../firebase'

const Checkout = () => {
  const[{basket}] = useStateValue();
  const currentUser = useAuth();
  return (
    <div className='checkOut'>
        <div className='checkOutLeft'>
            <img className='checkOutAd' src={ad} alt=''/>

            <div>
                <h4>Hello, {currentUser?.email}</h4>
                <h2 className='checkOutTitle'>Your shopping basket</h2>

                {basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}

            </div>
        </div>

        <div className='checkOutRight'>
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout;