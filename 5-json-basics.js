const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req,res) => {
    res.json(products)
})

app.listen(5001, () => {
    console.log('server is listening of port: 5000...');
})