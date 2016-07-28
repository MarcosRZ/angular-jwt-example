var express = require('express')
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express();

app.use(morgan('dev'))

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/auth', (req, res) => {

	if (req.body.user && req.body.user == 'marcos' && req.body.pass && req.body.pass == 'socram'){

		var payload = {
			name: 'marcos',
			role: 'admin'
		}

		res.send(jwt.sign(payload, 'secret'))
	} else {
		res.sendStatus(401);
	}

});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
