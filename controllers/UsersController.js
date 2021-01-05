import Users from '../models/Users.js'

const get = async (req, res) => {
    try {
        const user = await Users.findById(req.query.user_id || req.user._id)
        res.json(user)
    } catch (error) {
        res.json([])
    }
}

export default {
    get
}