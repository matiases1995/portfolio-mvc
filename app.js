const express = require('express');
const app = express();
const path = require('path');
const router = require('./routers/main')

app.use(express.static(path.resolve('./public')))

app.use(router);

app.listen(3000, () => {
        console.log('Servidor funcionando');
});