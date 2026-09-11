const express = require('express');
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public')) //built-in middleware

//parse form data
app.use(express.urlencoded({extended: false})) //built-in middleware

//parse json
app.use(express.json())

//express-route for /api/people
app.use('/api/people', people)

//express-route for /login
app.use('/login', auth)

//server on localhost:5001
app.listen(5001, () => {
    console.log('server is listening of port: 5001...');
});