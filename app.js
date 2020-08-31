const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routes');
const db = require('./query');

console.log("Helloo");
//DB connect

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',routers);






app.listen(5000);