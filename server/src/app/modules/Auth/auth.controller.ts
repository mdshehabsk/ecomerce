import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const authRegister = catchAsync(async (req, res) => {
  const data = req.body;

  const { emailExist, googleId, userSaved } =
    await AuthServices.userRegister(data);

  if (emailExist) {
    sendResponse(res, {
      statusCode: httpStatus.FORBIDDEN,
      success: false,
      data: null,
      error: "email already exist",
    });
  }
  if (googleId) {
    sendResponse(res, {
      statusCode: httpStatus.FORBIDDEN,
      success: false,
      data: null,
      error: "login with google method",
    });
  }
  if (userSaved) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "user create successfull please verify your email",
    });
  }
});

const authLogin = catchAsync(async (req,res)=> {
  const data = req.body;
  const {token,userNotFound,verifyUser,user} = await AuthServices.userLogin(data)
  if(userNotFound){
   return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      error:'Wrong Crentials'
    } )
  }
  if(verifyUser) {
   return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      token,
      message: 'Login Successfull',
      data:user
    })
  }
})


const authLoginGoogle = catchAsync(async (req,res) =>  {
  const {token} = req.body
  const {loginSuccess,myToken} = await AuthServices.userLoginGoogle(token)
  if(!loginSuccess) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      error: 'Unauthorized',
    })
  }else {
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Login Successfull',
      token: myToken
    })
  }
} )

const verifyUser = catchAsync(async (req, res) => {
  const { token } = req.query;

  const { userVerify, userToken } = await AuthServices.verifyUser(token);
  if (userVerify) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "verifcation successfull",
    });
  }
});

export const AuthController = {
  authRegister,
  authLogin,
  authLoginGoogle,
  verifyUser,
};
