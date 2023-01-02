import React, { useState, useEffect } from 'react'
import './orders.css'
import { db, useAuth } from '../../firebase'
//import { useStateValue } from '../../stateProvider'
import Order from './order'

const Orders = () => {
    const currentUser = useAuth();
    //const [{basket}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);


    function use(){

    //useEffect(() => {
        if (currentUser) {
          db.collection('users').doc(currentUser?.uid)
            .collection('orders').orderBy('created', 'desc')
            .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
            })))
          ))
        } else {
            setOrders([]);
        }  }
    //}, [currentUser]);
  return (
    <div>
        <h1>Your Orders</h1>

        <div className='orders_order'>
           {orders?.map(order => (
                <Order order={order}/>
            ))}  
        </div>
    </div>

  )
}

export default Orders