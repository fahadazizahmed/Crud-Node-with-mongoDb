var express = require('express');
var  app = express();
const port = process.env.PORT || 3000;
var Control = require('./Controller/routers');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//mongoose.connect('localhost:20217/')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(Control);
app.listen(port);
console.log('app is listenting on the port '+ port);
