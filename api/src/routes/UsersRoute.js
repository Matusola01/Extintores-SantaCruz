const express = require('express');
const UserSchema = require('../models/Users');
const router = express.Router();

router.post('/users', (req, res) => {
	const user = UserSchema(req.body);

	user.save()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.get('/users', (req, res) => {
	UserSchema.find()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.get('/users/:id', (req, res) => {
	const { id } = req.params;

	UserSchema.findById(id)
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});

router.put('/users/:id', (req, res) => {
	const { id } = req.params;
	const { name, email, admin, password, image, plan } = req.body;

	UserSchema.updateOne({ _id: id }, { $set: { name, email, admin, password, image, plan } })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }));
});
module.exports = router;
