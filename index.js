var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.use(express.bodyParser());
app.use(express.logger());

var port = 80;

app.get('/:id', function (req, res) {
	if(req.params.id) 
		res.render('index', { qrtext: req.params.id } );
	else 
		res.send('Enter something to be converted into a QR code, http://qr.ryanralph.net/[put something here]')
});

app.listen(port);
console.log('server started on port ' + port);
