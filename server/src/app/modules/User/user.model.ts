import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId && !this.facebookId;
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    // expireAt: {
    //   type: Date,
    //   default: Date.now, 
    //   expires: 600,
    // },
    createdAt:{
      type:Date,
      default: new Date(),
      expires: 600
    }
   
  },
);

UserSchema.pre('save', async function (next) {
  const user = this;
  if(user.password) {
    user.password =  await bcrypt.hash(user.password,10)
  }
  next();
});



// create model:
export const User = model<IUser>("User", UserSchema);
