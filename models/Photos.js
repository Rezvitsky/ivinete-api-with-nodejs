import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    owner_id: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('photos', schema)
