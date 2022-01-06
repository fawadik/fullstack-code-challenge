import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import compression from 'compression'
import cors from 'cors'
import router from './routers/user'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import checkAuth from './middlewares/authCheck'
import admin from 'firebase-admin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import serviceAccount from './config/service-account'

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
app.use(cors())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
})

//use user router
app.use('/api/v1/users', router)
// Custom API error handler
app.use(apiErrorHandler)

export default app
