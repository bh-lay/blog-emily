var express = require('express');
var path = require('path');
var app = express();

//增加jade模板引擎支持
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/www'));

console.log(path.join(__dirname, 'wwww'));
app.get('/', function (req, res) {
	res.render('index', {
		title: 'Hey',
		message: 'Hello there!'
	});
});
app.listen(3000);