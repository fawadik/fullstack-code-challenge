import express from 'express'

import { createUser, findAllUsers, updateUser } from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.get('/', findAllUsers)

router.put('/:email', updateUser)

router.post('/', createUser)

export default router
