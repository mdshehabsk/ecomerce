
import config from "../../config";


import { User } from "../User/user.model";
import { ILoginUser, IRegisterUser } from "./auth.interface";
import { CreateToken, verifyToken } from "./auth.utils";
import { sendMail } from "../../mail/sendMail";
import mongoose from "mongoose";

const userRegister = async (user: IRegisterUser) => {
  const { username, cpassword, email, password } = user;

  const userExist = await User.findOne({ email,isEmailVerified:false });

  if (userExist) {
    if (userExist.googleId) {
      return {
        googleId: true,
      };
    }
    return {
      emailExist: true,
    };
  }
  const session = await mongoose.startSession()
  session.startTransaction()
  const userSaved = await  User.create({ email, username, password});
  const token = CreateToken(
    { _id: userSaved._id },
    config.jwt_secret,
    config.jwt_expire
  );
  const mailSend = await sendMail({
    email: userSaved.email,
    subject: "verification",
    token,
    username: userSaved.username,
  });
  await userSaved.save();
  await session.commitTransaction()
  await session.endSession()
  if (userSaved && mailSend.accepted) {
    return {
      userSaved: true,
    };
  }
  throw new Error("user registration faild");
};


const verifyUser = async (token:unknown ) => {

    const verified = verifyToken(token as string, config.jwt_secret);
    const updateUser = await User.findByIdAndUpdate(verified._id,{
      isEmailVerified:true
    })
   if(updateUser){
    return {
      userVerify: true
    }
   }
    throw new Error('user verifyed faild')
}

export const AuthServices = {
  userRegister,
  verifyUser
};
