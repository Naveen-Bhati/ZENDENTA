import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'


dotenv.config()
const app = express()
connectDB()
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/appointments', appointmentRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`server is listening on port ${PORT}`))