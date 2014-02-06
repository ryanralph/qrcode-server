var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.use(express.bodyParser());
app.use(express.logger());

var port = 80;
app.get('/', function (req, res) {
	res.send('Enter something to be converted into a QR code, http://qr.ryanralph.net/[put something here]');
}
app.get('/:id', function (req, res) {
	res.render('index', { qrtext: req.params.id } );
});

app.listen(port);
console.log('server started on port ' + port);
