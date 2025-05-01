import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { rateLimiter } from './src/config/rateLimiter.js'

import { connectDB } from './src/config/db.js'

import authRoutes from './src/routes/authRoutes.js'
import taskRoutes from './src/routes/taskRoutes.js'

import { errorHandler } from './src/middlewares/errorHandler.js'

// Config
dotenv.config()
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(rateLimiter)

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/tasks', taskRoutes)

// Middleware de errores
app.use(errorHandler)

// Conectar a DB y levantar el servidor
const PORT = process.env.PORT || 5000
connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err.message)
        process.exit(1)
    })



