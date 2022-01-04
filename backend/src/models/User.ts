/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Schema } from 'mongoose'

export type UserDocument = Document & {
  fName: string
  lName: string
  email: string
  country: number
}

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    index: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
