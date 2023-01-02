import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../stateProvider'
import { getBasketTotal } from '../../reducer'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {
    const [{basket}] = useStateValue();

    const navigate = useNavigate(); 

const toPayment = () => {
    navigate('/payment');
}
    
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items) :
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotalGift'>
                        <input type='checkbox' /> this order contains gifts
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button onClick={toPayment}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;