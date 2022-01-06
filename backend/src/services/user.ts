import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

async function create(payload: Partial<UserDocument>): Promise<UserDocument> {
  const newUser = new User({ ...payload })
  return newUser.save()
}

const update = async (
  email: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const userId = await User.findOne({ email })
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}
async function findAllUsers(): Promise<UserDocument[]> {
  return User.find()
}

export default {
  create,
  update,
  findAllUsers,
}
