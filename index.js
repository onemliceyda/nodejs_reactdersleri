const express = require('express');
const aktorlerRouter = require("./routers/aktorlerRouter");
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');


const server = express();

server.use(express.json())//serverı oluşturduk
server.use(logger);
server.use('/aktorler', aktorlerRouter)



server.get('/', (req, res) => {
    res.send('Expressten merhaba selamlar');
});

//kullanıcı neredeyse kendisinden sonra gelen ilk errorHandling metoduna gider.
//genelde tüm endpointlerden sonra ya da listyen kısmında server.use ile kullanabiliriz.

server.use(errorHandling);

server.listen(5000, () => {
    console.log(`http://localhost:5000 adresinde gelen istekler dinleniyor.`);
});