import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	phone: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	email: {
		type: String,
		default: null,
		min: 6,
		max: 255
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024
	},
	first_name: {
		type: String,
		required: true,
		min: 2,
		max: 255
	},
	last_name: {
		type: String,
		required: true,
		min: 2,
		max: 255
	},
	photo: {
		type: String,
		default: null
	},
	cover: {
		type: String,
		default: null
	},
	sex: {
		type: Number,
		default: 0
	},
	type: {
		type: Number,
		default: 0
	},
	verified: {
		type: Boolean,
		default: false
	}
})

schema.method('toJSON', function () {
	const user = this.toObject()
	delete user.phone
	delete user.email
	delete user.password
    return user
})

export default mongoose.model('users', schema)
