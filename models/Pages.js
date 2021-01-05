import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    user_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true,
		min: 3,
		max: 255
	},
	photo: {
		type: Number,
		default: null
	},
	cover: {
		type: String,
		default: null
    },
    about: {
		type: String,
        default: null,
        max: 1024
	},
	verified: {
		type: Boolean,
		default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('pages', schema)
