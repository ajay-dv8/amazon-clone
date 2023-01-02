import React from 'react'
import './home.css'
import ahh1 from "../../img/ahh1.png"
import Products from '../product/products'
import img4 from '../../img/img4.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import tv from '../../img/tv.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='homeCon'>
            <img className='hmeBan' src={ahh1} alt=''/>

            <div className='homeRow'>
              <Products 
                title="lunar start"
                price={20.99}
                rating={5}
                image={img4}
                />
              <Products 
                title="doll house"
                price={22.99}
                rating={5}
                image={img2}
                />
            </div>

            <div className='homeRow'>
              <Products 
                title="laptop"
                price={122.99}
                rating={5}
                image={img3}
                />
              <Products 
                title="lunar start 2"
                price={19.99}
                rating={5}
                image={img4}
                />
              <Products 
                title="lunar start 2"
                price={12.99}
                rating={5}
                image={img4}
                />
            </div>

            <div className='homeRow'>
              <Products 
                title="TV"
                price={522.99}
                rating={5}
                image={tv}
                />
            </div>

        </div>

    </div>
  )
}

export default Home;