import { Request, Response, NextFunction } from 'express'

import User from '../models/User'
import UserService from '../services/user'
import { BadRequestError, NotFoundError } from '../helpers/apiError'

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fName, lName, email, country } = req.body

    const user = new User({
      fName,
      lName,
      email,
      country,
    })

    await UserService.create(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /users/:email
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const email = req.params.email
    const updatedUser = await UserService.update(email, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findAllUsers())
  } catch (error) {
    next(new NotFoundError('Users not found', error))
  }
}
