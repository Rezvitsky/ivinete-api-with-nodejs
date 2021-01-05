import express from 'express'
const router = express.Router()

// Middleware
import isLoggedIn from '../middleware/isLoggedIn.js'

// Controllers
import AuthController from '../controllers/AuthController.js'
import UsersController from '../controllers/UsersController.js'
import PagesController from '../controllers/PagesController.js'
import MessagesController from '../controllers/MessagesController.js'
import WallController from '../controllers/WallController.js'
import AudioController from '../controllers/AudioController.js'
import FriendsController from '../controllers/FriendsController.js'
import PhotosController from '../controllers/PhotosController.js'

// Auth
router.post('/auth.login', AuthController.login)
router.post('/auth.signup', AuthController.signup)
router.post('/auth.logout', AuthController.logout)

// Users
router.get('/users.get', isLoggedIn, UsersController.get)

// Pages
router.get('/pages.getById', isLoggedIn, PagesController.getById)
router.post('/pages.create', isLoggedIn, PagesController.create)

// Messages
router.get('/messages.getConversations', isLoggedIn, MessagesController.getConversations)

// Wall
router.get('/wall.get', isLoggedIn, WallController.get)
router.get('/wall.getAll', isLoggedIn, WallController.getAll)
router.post('/wall.post', isLoggedIn, WallController.post)

// Audio
router.get('/audio.get', isLoggedIn, AudioController.get)

// Friends
router.get('/friends.get', isLoggedIn, FriendsController.get)

// Photos
router.get('/photos.get', isLoggedIn, PhotosController.get)
router.post('/photos.save', isLoggedIn, PhotosController.save)
router.post('/photos.saveOwnerPhoto', isLoggedIn, PhotosController.saveOwnerPhoto)

export default router