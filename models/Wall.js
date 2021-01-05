import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    from_id: {
        type: String
    },
    owner_id: {
        type: String
    },
    text: {
        type: String,
        default: null,
        min: 1,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

export default mongoose.model('wall', schema)
