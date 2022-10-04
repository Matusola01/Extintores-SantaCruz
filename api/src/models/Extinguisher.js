const mongoose = require('mongoose');

const ExtinguisherSchema = new mongoose.Schema({
	item: {
		type: Number,
	},
	fireStationNum: {
		type: Number,
	},
	ubication: {
		type: String,
	},
	serialNum: {
		type: Number,
		unique: true,
		allowNull: false,
	},
	make: {
		type: String,
	},
	yearOfProduction: {
		type: Number,
	},
	rechargeExpiration: {
		type: Date,
	},
	phExpiration: {
		type: Number,
	},
	type: {
		type: String,
	},
	agent: {
		type: String,
	},
	capacity: {
		type: Number,
	},
	image: {
		type: String,
	},
	observations: {
		type: String,
	},
	correctiveAction: {
		type: String,
	},
	company: {
		type: String,
	},
});

module.exports = mongoose.model('Extinguisher', ExtinguisherSchema);
