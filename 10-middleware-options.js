const express = require('express');
const app = express();
const logger = require('./logger')
const auth = require('./auth')

// req => res  - what we have been doing till now
// req => middleware => res   - actual req-res lifecycle  

app.use(auth, logger)

app.get('/',(req,res) => {
    res.send('Home')
});

app.get('/about',(req,res) => {
    res.send('About')
});

app.get('/api/products',(req,res) => {
    res.send('Products')
});

app.get('/api/items',(req,res) => {
    res.send('Items')
});

app.listen(5001, () => {
    console.log('server is listening of port: 5001...');
});