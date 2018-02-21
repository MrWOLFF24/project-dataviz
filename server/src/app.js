const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017', (err, db) => {
    if (err) throw err;
    console.log(db);
}).then(()=> {console.log('connected');})
  .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017`)});

// use body parser
app.use(morgan('combined'));
app.use(bodyParser.json());

// une cors for cross origin connection
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// send data with express
app.get('/data', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?",

        }]
    )
});

// listen on port 8081
app.listen(process.env.PORT || 8081);