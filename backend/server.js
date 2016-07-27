var express = require('express')
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
	res.send("<h1>Hello Auth!</h1>")
});

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

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
