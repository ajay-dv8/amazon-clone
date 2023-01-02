import moment from 'moment'
import React from 'react'
import './order.css'
import CheckoutProduct from '../checkoutProduct/checkoutProduct';
import CurrencyFormat from 'react-currency-format'

const Order = ({order}) => {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, H:mma")}</p>

        <p className='orderId'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item =>(
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}

          <CurrencyFormat 
            renderText={(value) => (
                <h3 className='orderTotal'>Order total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
    </div>
  )
}

export default Order;