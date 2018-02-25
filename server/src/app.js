const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require("mongodb").MongoClient;
const dbName = "test";
var db;

const app = express();

// connect to mongodb
MongoClient.connect("mongodb://127.0.0.1:27017/", function(error, client) {
    if (error) throw error;
    console.log("Connecté à la base de données");
    db = client.db(dbName);
    db.collection('dataviz').find().toArray((err, res) => {
        console.log("donnee recupere avec succee");
    });
});

// for cross origin connection
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

// use body parser
app.use(morgan('combined'));
app.use(bodyParser.json());

// send data with express
app.get('/data', (req, res) => {
    db.collection('dataviz').find().toArray((err, response) => {
        res.send(response);
    });
});

// listen on port 8081
app.listen(process.env.PORT || 8081);