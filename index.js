var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.use(express.bodyParser());
app.use(express.logger());

var port = 80;

app.get('/:id', function (req, res) {
	res.render('index', { qrtext: req.params.id } );
});

app.listen(port);
console.log('server started on port ' + port);
