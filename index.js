const express = require('express') ; 
const app = express();

const router = require('./router') ; 
app.use(router) ; 

app.use(express.static('static')) ; 

app.set('view engine', 'ejs') ; 

app.listen(3000, ()=> {
    console.log('Serveur sur port 3000')
})