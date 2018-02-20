const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/dataviz');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
    console.log("Connection Succeeded");
});

// une cors for cross origin connection
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// send data with express
app.get('/data', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
});

// listen on port 8081
app.listen(process.env.PORT || 8081);