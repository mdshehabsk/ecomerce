/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../errors/AppError";

import jwt, {JwtPayload} from "jsonwebtoken";

import config from "../config";

interface CustomJwtPayload extends JwtPayload {
    _id: string
}






export const isLogin = async (req: Request,res:Response,next: NextFunction) => {
   
        const {authorization} = req.headers;
        const authToken = authorization?.split(' ')[1]
    
        if (!authToken) {
            return next(new AppError(httpStatus.FORBIDDEN, "You're Not Authorized"));
        }
        jwt.verify(authToken,config.jwt_secret,(err,decoded)=> {
            if (err) {
                return next(new AppError(httpStatus.UNAUTHORIZED, "You're Not Authorized"));
            }            
                const payload = decoded as CustomJwtPayload;
                req.user = payload
                next()
        });
    
   
}