const express = require('express')
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('./navbar-app'))

// this was earlier used for index.html but we know that it is also included in static asset so the following code is not needed, it can be done app.use(express.static(''));
// app.get('/',(req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

// to handle the 404: not available resources
app.all('/*splat',(req, res) => {
    res.status(404).send("Resource not found...")
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
});