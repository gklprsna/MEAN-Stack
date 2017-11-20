var express = require('express') ;
var path  = require('path');
var bodyParser = require('body-parser');
var index = require('./Routes/index');
var mongoose = require('mongoose');
var engineers = require('./Routes/engineer');
var portNo = 8888;

//Initialize Express
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Static Folder
app.use(express.static(path.join(__dirname, 'AngularClient')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Router
app.use('/', index);
app.use('/api', engineers);

//Liestener
app.listen(portNo, function()
{
    console.log('Starting the server at port ' + portNo);
});