const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

// "*" now doesn't work in express5.0 therefore, use "/*splat".
app.all('/*splat',(req,res) => {
    res.status(404).send('<h1>Resource not Found</h1>')
});

app.listen(5000, () => {
    console.log('server is listening on port 5000')
});