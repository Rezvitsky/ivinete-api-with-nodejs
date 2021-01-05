import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Users from '../models/Users.js'
import { loginValidation, signupValidation } from '../services/validation.js'

const login = async (req, res) => {

    const { error } = loginValidation(req.body)
    if (error) return res.status(400).json(error)

    const user = await Users.findOne({ phone: req.body.phone })
    if (!user) return res.status(400).json({ message: 'Phone or password is wrong' })
    
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).json({ message: 'Phone or password is wrong' })
    
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)

    res.json({ access_token: token })
}

const signup = async (req, res) => {

    const { error } = signupValidation(req.body)
    if (error) return res.status(400).send(error)

    const phoneExist = await Users.findOne({ phone: req.body.phone })
    if (phoneExist) return res.status(400).send({ message: 'Phone already exists' })

    const emailExist = await Users.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send({ message: 'Email already exists' })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new Users({
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPassword,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        sex: req.body.sex,
        type: req.body.type
    })

    try {
        const savedUser = await user.save()
        const token = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET)

        res.json({ access_token: token })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const logout = (req, res) => {
    res.json({ success: true })
}

export default {
    login,
    signup,
    logout
}