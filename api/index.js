var express = require('express');
var bodyParser = require('body-parser');
require('./db.js');
const extingRoutes = require('./src/routes/ExtinguisherRoute');
const userRoutes = require('./src/routes/UsersRoute');

var app = express();
var port = process.env.PORT || 3000;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', extingRoutes);
app.use('/api', userRoutes);

app.get('/', function (req, res) {
	res.status(200).send({
		message: 'GET Home route working fine!',
	});
});

app.listen(port, function () {
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3000/');
});
