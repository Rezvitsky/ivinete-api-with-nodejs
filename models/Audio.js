import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    owner_id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
		min: 1,
		max: 255
    },
	artist: {
		type: String,
		required: true,
		min: 1,
		max: 255
    },
	cover: {
		type: String,
		required: true,
		min: 1
	},
    audio: {
		type: String,
		required: true
	},
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('audio', schema)
