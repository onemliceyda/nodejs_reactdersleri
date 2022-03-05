const express = require('express');


const aktorlerRouter=require("./routers/aktorlerRouter")
const server = express();
server.use(express.json())//serverı oluşturduk
server.use('/aktorler',aktorlerRouter)

server.get('/', (req, res) => {
    res.send('Expressten merhaba selaMmmlarr');
});

server.listen(5000, () => {
    console.log(`http://localhost:5000 adresinde gelen istekler dinleniyor.`);
});