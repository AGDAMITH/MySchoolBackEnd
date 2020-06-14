const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

/* Here we setup the middlewares & configs */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Autherization"
    );
    
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    next();
});
mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true });

const port = process.env.PORT || 3000 ;
const address = process.env.SERVER_ADDRESS || '127.0.0.1';

app.listen(port, address, () => console.log(`Server running on http://${address}:${port}`));

app.use('/api', require('./routes'));

module.exports = app;