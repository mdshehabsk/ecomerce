import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // data validation check
    try {
      schema.parse({
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

export default validateRequest;
