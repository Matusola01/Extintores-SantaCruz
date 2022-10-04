const mongoose = require('mongoose');
// const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	admin: {
		type: Boolean,
		defaultValue: false,
	},
	password: {
		type: String,
		allowNull: false,
	},
	image: {
		type: String,
	},
	plan: {
		type: Boolean,
	},
});

// UserSchema.methods.encryptPassword = async password => {
// 	const salt = await bcrypt.genSalt(10);
// 	return await bcrypt.hash(password, salt);
// };

// UserSchema.methods.matchPassword = async function (password) {
// 	return await bcrypt.compare(password, this.password);
// };

module.exports = mongoose.model('User', UserSchema);
