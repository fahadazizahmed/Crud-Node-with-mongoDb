var express = require('express');
var  app = express();
var Control = require('./Controller/routers');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//mongoose.connect('localhost:20217/')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(Control);
app.listen(300);
console.log('app is Listening on the port 300')
