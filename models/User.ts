/**
 * models/User.ts
 *
 * Mongoose User model.
 * Import this in server-only contexts (Route Handlers, Server Actions, etc.)
 * after calling dbConnect() from @/lib/mongoose.
 */

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

/*
  prevents model registring again as next js do multiple reloads.
  
  If the model exists in the mongoose reuse it.
 */
const User: Model<IUser> =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>('User', UserSchema);

export default User;
