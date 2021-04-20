// SET UP API
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe =require("stripe")('sk_test_51HhA3OBuhzgbbFsenl2gvGE8JSRilKxsEGBWBAEHSoNnV5pnA9cHb56YA0vGq9PCeMR3KcCIb0j2f6PH375L1D6000QeCHY5ER')

//-App Config 

const app = express();

//-Middlewares

app.use(cors({origin: true}));
app.use(express.json());

//-API ROUTES
app.get('/',(request,response) => response.status(200).send('hello world'))


app.post('/payments/create', async (request,response) => {
        const total = request.query.total;

        console.log('Payment Request Recieved BOOM !! >>> ',total)

        const paymentIntent = await stripe.paymentIntents.create({
            amount : total, 
            currency : "usd",
        });
        // OK - CREATED
        response.status(201).send({
            clientSecret : paymentIntent.client_secret,
        })
})

//-LISTEN COMMAND 
exports.api = functions.https.onRequest(app)

// EXAMPLE ENDPOINT : 
// http://localhost:5001/clone-5a5a9/us-central1/api