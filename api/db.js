const mongoose = require('mongoose');
require('dotenv').config();
const { MongoDBuser, MongoDBpassword } = process.env;

try {
	const db = mongoose.connect(
		`mongodb+srv://${MongoDBuser}:${MongoDBpassword}@santacruz-extintores.sajewur.mongodb.net/?retryWrites=true&w=majority`
	);
	console.log('Connected to database');
} catch (error) {
	console.error(error);
}

mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected');
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose is disconnected');
});

// mongoose
// 	.connect(`mongodb+srv://${MongoDBuser}:${MongoDBpassword}@santacruz-extintores.sajewur.mongodb.net/test`)
// 	.then(db => console.log('DB is connected'))
// 	.catch(err => console.log(err));
