import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    username:{
      type:String,
      required:true
    },
    email:{
      type:String,
      require:true
    },
    password:{
      type:String,
      required:function () {
        return !this.googleId && !this.facebookId;
      },
    },
    googleId: {
      type: String,
      unique:true,
      sparse:true
    },
    facebookId: {
      type: String,
      unique:true,
      sparse:true
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
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
