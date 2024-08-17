import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../config";
import { AppError } from "../../errors/AppError";

import { User } from "../User/user.model";
import { ILoginUser, IRegisterUser } from "./auth.interface";
import { CreateToken } from "./auth.utils";
import { sendMail } from "../../mail/sendMail";


const userRegister = async (user: IRegisterUser) => {
  const { username, cpassword, email, password } = user;

  const userExist = await User.findOne({ email });

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
  const userSaved = new User({ email, username, password });
  const token = CreateToken({_id:userSaved._id},config.jwt_secret, config.jwt_expire)
  const mailSend = await sendMail({email:userSaved.email,subject:'verification',token,username:userSaved.username});
  await userSaved.save()
  if (userSaved && mailSend?.accepted) {
    return {
      userSaved: true,
    };
  }
  throw new Error("user registration faild");
};

export const AuthServices = {
  userRegister,
};
