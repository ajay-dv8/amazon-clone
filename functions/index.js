const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51MDQ6GBndkx8p8CbBVD23ge6nYazLrG5UUzmAnNpyJh9AjSdgWRFhV9JpxUUrwcFaffxbrbLKwdYEZGiE2qoOWhs00LxhfPUNf");

//API

//app config
const app = express();

//middleware
app.use(cors({origin: true}));  
app.use(express.json());

//api route
app.get('/', (request, response) => response.status(200).send('hey jay'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('payday don come BOOM! >>>', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'usd',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listener
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/challenge-a87d3/us-central1/api

///////////////////////////////////////////////////////////////////////

const product = getTheProduct(productId);

stripe.charges.create(
    {
      amount: product.price,
      currency: 'usd',
      source: cardToken.id,
      description: `Payment for ${product.title}`,
      metadta: {
        productId: product.id
      }
    })
