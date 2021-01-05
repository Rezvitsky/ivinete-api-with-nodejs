import Photos from '../models/Photos.js'
import Users from '../models/Users.js'
import { photosSaveValidation } from '../services/validation.js'

const get = async (req, res) => {
    const photos = await Photos.find({ owner_id: req.query.owner_id || req.user._id })
    res.json({ items: photos })
}

const save = async (req, res) => {
    const { error } = photosSaveValidation(req.body)
    if (error) return res.status(400).json(error)

    const photo = new Photos({
        owner_id: req.body.owner_id || req.user._id,
        photo: req.body.photo
    })

    try {
        const savedPhoto = await photo.save()
        res.json(savedPhoto)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const saveOwnerPhoto = async (req, res) => {
    const users = await Users.findOne({ _id: req.user._id })
    const photo = await users.updateOne({ photo: req.body.photo_id })
    
    res.json(photo)
}

export default {
    get,
    save,
    saveOwnerPhoto
}