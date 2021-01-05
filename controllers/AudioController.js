import Audio from '../models/Audio.js'

const get = async (req, res) => {
    try {
        const audio = await Audio.findById(req.query.owner_id || req.user._id)
        res.json(audio)
    } catch (error) {
        res.json([])
    }
}

export default {
    get
}