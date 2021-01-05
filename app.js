import express from 'express'
const app = express()
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// Import Routes
import routes from './routes/index.js'

// Middleware
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

// Route Middleware
app.use('/method', routes)

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('connected to db!')
)

app.listen(3000, () => console.log('Server Up and running'))