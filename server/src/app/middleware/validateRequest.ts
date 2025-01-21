import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { getImagesWithResulation } from "../modules/Cloudinary/resulation";

export const validateBodyRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // data validation check

    try {
     await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path[1],
          message: err.message,
        }));
        return sendResponse(res, {
          statusCode: httpStatus.BAD_REQUEST,
          success: false,
          error: formattedErrors,
          message: "validation faild",
          data: null,
        });
      }
      next(error);
    }
  };
};



export const validateQueryRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // data validation check
    try {
      schema.parse({
        query: req.query,
      });

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path[1],
          message: err.message,
        }));
        return sendResponse(res, {
          statusCode: httpStatus.BAD_REQUEST,
          success: false,
          error: formattedErrors,
          message: "validation faild",
          data: null,
        });
      }
      next(error);
    }
  };
};

export const validateImageFilesRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // data validation check
    try {
      if(!req.files|| !Array.isArray(req.files)){
        return sendResponse(res, {
          statusCode: httpStatus.BAD_REQUEST,
          success: false,
         error:"Images not found"
        });
      }
      const imagesWithResulation = await getImagesWithResulation(req.files)
      schema.parse({
        images: imagesWithResulation
      });
      req.files = imagesWithResulation
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path[0],
          message: err.message,
        }));
        return sendResponse(res, {
          statusCode: httpStatus.BAD_REQUEST,
          success: false,
          error: formattedErrors,
          message: "validation faild",
          data: null,
        });
      }
      next(error);
    }
  };
};
