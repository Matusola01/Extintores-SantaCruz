const express = require('express');
const ExtinguisherSchema = require('../models/Extinguisher');
const router = express.Router();

router.post('/extinguisher', (req, res) => {
	const extinguisher = ExtinguisherSchema(req.body);

	extinguisher
		.save()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.get('/extinguisher', (req, res) => {
	ExtinguisherSchema.find()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.get('/extinguisher/:id', (req, res) => {
	const { id } = req.params;

	UserSchema.findById(id)
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.put('/extinguisher/:id', (req, res) => {
	const { id } = req.params;
	const {
		item,
		fireStationNum,
		ubication,
		serialNum,
		make,
		yearOfProduction,
		rechargeExpiration,
		phExpiration,
		type,
		agent,
		capacity,
		image,
		observations,
		correctiveAction,
		company,
	} = req.body;

	UserSchema.updateOne(
		{ _id: id },
		{
			$set: {
				item,
				fireStationNum,
				ubication,
				serialNum,
				make,
				yearOfProduction,
				rechargeExpiration,
				phExpiration,
				type,
				agent,
				capacity,
				image,
				observations,
				correctiveAction,
				company,
			},
		}
	)
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});
module.exports = router;
