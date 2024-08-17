import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../config";
import { AppError } from "../../errors/AppError";

import { User } from "../User/user.model";
import { ILoginUser, IRegisterUser } from "./auth.interface";
import { CreateToken } from "./auth.utils";


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
  const userSaved = await User.create({ email, username, password });
  if (userSaved) {
    return {
      userSaved: true,
    };
  }
  throw new Error("user registration faild");
};

export const AuthServices = {
  userRegister,
};
