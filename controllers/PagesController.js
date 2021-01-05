import Pages from '../models/Pages.js'
import { pagesCreateValidation } from '../services/validation.js'

const getById = async (req, res) => {
    try {
        const pages = await Pages.findById(req.query.page_id)
        res.json(pages)
    } catch (error) {
        res.json([])
    }
}

const create = async (req, res) => {

    const { error } = pagesCreateValidation(req.body)
    if (error) return res.status(400).json(error)

    const page = new Pages(req.body)

    try {
        const savedPage = await page.save()
        res.json(savedPage)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default {
    getById,
    create
}