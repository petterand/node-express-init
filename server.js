var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req,res){
	res.send('hello world');
});

app.listen(3000,function(){
	console.log('server listen on port 3000');
});