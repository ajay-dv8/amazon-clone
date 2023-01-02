import React, { useState, useEffect  } from 'react'
import './payment.css'
import { useAuth } from '../../firebase'
import { useStateValue } from '../../stateProvider'
import CheckoutProduct from '../checkoutProduct/checkoutProduct'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { getBasketTotal } from '../../reducer'
import axios from '../../axios'
import { db } from '../../firebase'

const Payment = () => {
    const currentUser = useAuth();
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();

    const stripe = useStripe();
    const element = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log ('theSecretIs >>>', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
        //when paymentIntent = payment confirmation   

            db.collection('users').doc(currentUser?.uid)
            .collection('orders').doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setError(null);
            setSucceeded(true);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate("/orders", {replace: true});
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    
  return (
    <div className='payment'>
        <div className='paymentCon'>
            <h1>Checkout(
                <Link to='checkout'>{basket?.length} items </Link>
            )</h1>
            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>delivery address</h3>
                </div>
                <div className='paymentAddress'>
                    <p>{currentUser?.email}</p>
                    <p>Eastern region </p>
                    <p>koforidua</p>
                </div>

            </div>

            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='paymentItems'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
 
            </div>

            <div className='paymentSection'>
                <div className='paymentTitle'>
                    <h3>Payment method</h3>
                </div>

                <div className='paymentDetails'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='paymentPriceCon'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <h3>Order total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                            <button disabled={
                                processing || succeeded || disabled
                            }>
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
                
            </div>    
        </div>
    
    </div>
  )
}

export default Payment;