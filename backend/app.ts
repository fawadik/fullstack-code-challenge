import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'
import userRouter from './routers/user'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

// Use user router
app.use('/api/users', userRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
