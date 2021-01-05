import jwt from 'jsonwebtoken'

const verify = (req, res, next) => {
    const token = req.query.access_token
    if (!token) return res.status(401).send({ message: 'Access Danied' })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send({ message: 'Invalid Token' })
    }
}

export default verify
