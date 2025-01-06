// import studentZodSchema from '../student/student.validation';
import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { UserService } from "./user.service";



const getUserData = catchAsync( async(req,res)=> {

    const id = req.user._id
    const foundUser = await UserService.getUser(id);
    if(foundUser){
        sendResponse(res,{
            statusCode:httpStatus.OK,
            data:foundUser,
            success:true,
            message:'user get successfull',
        })
    }

})


export const UserController = {
    getUserData
}