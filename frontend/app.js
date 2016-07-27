var express = require('express')

var app = express()

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000)
