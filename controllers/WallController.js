import Wall from '../models/Wall.js'
import Users from '../models/Users.js'
import Pages from '../models/Pages.js'
import { wallPostValidation } from '../services/validation.js'

const get = async (req, res) => {
    const wall = await Wall.find({ owner_id: req.query.owner_id || req.user._id }).sort([['date', -1]])
    const users = await Users.find()
    const pages = await Pages.find()

    res.json({ 
        items: wall,
        users: users,
        pages: pages
    })
}

const getAll = async (req, res) => {
    const wall = await Wall.find()
    const users = await Users.find()
    const pages = await Pages.find()

    res.json({ 
        items: wall,
        users: users,
        pages: pages
    })
}

const post = async (req, res) => {

    const { error } = wallPostValidation(req.body)
    if (error) return res.status(400).json(error)

    const post = new Wall({
        from_id: req.user._id,
        owner_id: req.query.owner_id || req.user._id,
        text: req.body.text
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default {
    get,
    getAll,
    post
}