import Messages from '../models/Messages.js'

const getConversations = (req, res) => {
    res.json({ items: [] })
}

export default {
    getConversations
}