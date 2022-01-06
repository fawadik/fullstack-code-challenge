/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  fName: string
  lName: string
  email: string
  country: string
}

const userSchema = new mongoose.Schema({
  fName: { type: String },
  lName: { type: String },
  email: { type: String },
  country: { type: String },
})

export default mongoose.model<UserDocument>('User', userSchema)
