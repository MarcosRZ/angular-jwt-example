var express = require('express')
var jwt = require('jsonwebtoken')
var md5 = require('md5')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express();

var config = require('./config')

app.use(morgan('dev'))

app.use('/public', express.static(__dirname + '/public'))
//app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// JWT Authentication endpoint
app.post('/auth', (req, res) => {

	if (req.body.user && req.body.user == config.user && req.body.pass && md5(req.body.pass) == config.pass){

		var payload = {
			name: 'marcos',
			role: 'admin'
		}

		res.send(jwt.sign(payload, config.secret))
	} else {
		res.sendStatus(401);
	}

});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function () {
  console.log('Angular JWT Example running at http://localhost:' + config.port);
});
