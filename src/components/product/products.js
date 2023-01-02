import React from 'react'
import { useStateValue } from '../../stateProvider'
import './product.css'

const Products = ({id, title, price, rating, image }) => {
  const[ {basket}, dispatch ] = useStateValue();
    console.log("the basket >>", basket);

  const addToBasket = () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
      }
    })
  }
  return (
    <div className='product'>
        <div className='productInfo'>
            <p>{title}</p>

            <p className='productPrice'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            
            <div className='productRating'>
              {Array(rating).fill().map((_, i) => (
                <p>*</p>
              ))}
              
            </div>
            
        </div>

        <img src={image} alt=''/>

        <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Products;