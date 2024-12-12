import config from "../../config";
import bcrypt from 'bcrypt'
import { User } from "../User/user.model";
import { ILoginUser, IRegisterUser } from "./auth.interface";
import { createToken, verifyToken } from "./auth.utils";
import { sendMail } from "../../mail/sendMail";

const userRegister = async (user: IRegisterUser) => {
  const { username, email, password } = user;
  const userExist = await User.findOne({ email, isEmailVerified: false });

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
  const token = createToken(
    { _id: userSaved._id },
    config.jwt_secret,
    config.jwt_expire,
  );
  const mailSend = await sendMail({
    email: userSaved.email,
    subject: "verification",
    token,
    username: userSaved.username,
  });
  await userSaved.save();
  if (userSaved && mailSend.accepted) {
    return {
      userSaved: true,
    };
  }
  throw new Error("user registration faild");
};


const userLogin = async (user: ILoginUser) => {
  const {email,password} = user
  const userExist = await User.findOne({ email, isEmailVerified: true });
  if(!userExist){
    return {
      userNotFound: true
    }
  }
  const verifyUser = await bcrypt.compare(password,userExist.password)
  if(verifyUser){
    const token =  createToken(
      { _id: userExist._id },
      config.jwt_secret,
      config.jwt_expire,
    );
    return {
      verifyUser : true,
      token,
    }
  }
  throw new Error("user login faild");
}

const verifyUser = async (token: unknown) => {
  const verified = verifyToken(token as string, config.jwt_secret);
  const updateUser = await User.findByIdAndUpdate(verified._id, {
    isEmailVerified: true,
  });
  if (updateUser) {
    const userToken = createToken(
      { _id: updateUser._id },
      config.jwt_secret,
      config.jwt_expire,
    );
    return {
      userVerify: true,
      userToken
    };
  }
  throw new Error("user verifyed faild");
};

export const AuthServices = {
  userRegister,
  userLogin,
  verifyUser,
};
