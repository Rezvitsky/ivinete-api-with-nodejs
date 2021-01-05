import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('friends', schema)
