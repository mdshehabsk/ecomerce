"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImageFilesRequest = exports.validateQueryRequest = exports.validateBodyRequest = void 0;
const zod_1 = require("zod");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const resulation_1 = require("../modules/Cloudinary/resulation");
const validateBodyRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // data validation check
        try {
            yield schema.parseAsync({
                body: req.body,
            });
            next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const formattedErrors = error.errors.map((err) => ({
                    path: err.path[1],
                    message: err.message,
                }));
                return (0, sendResponse_1.default)(res, {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    error: formattedErrors,
                    message: "validation faild",
                    data: null,
                });
            }
            next(error);
        }
    });
};
exports.validateBodyRequest = validateBodyRequest;
const validateQueryRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // data validation check
        try {
            schema.parse({
                query: req.query,
            });
            next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const formattedErrors = error.errors.map((err) => ({
                    path: err.path[1],
                    message: err.message,
                }));
                return (0, sendResponse_1.default)(res, {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    error: formattedErrors,
                    message: "validation faild",
                    data: null,
                });
            }
            next(error);
        }
    });
};
exports.validateQueryRequest = validateQueryRequest;
const validateImageFilesRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // data validation check
        try {
            if (!req.files || !Array.isArray(req.files)) {
                return (0, sendResponse_1.default)(res, {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    error: "Images not found"
                });
            }
            const imagesWithResulation = yield (0, resulation_1.getImagesWithResulation)(req.files);
            schema.parse({
                images: imagesWithResulation
            });
            req.files = imagesWithResulation;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const formattedErrors = error.errors.map((err) => ({
                    path: err.path[0],
                    message: err.message,
                }));
                return (0, sendResponse_1.default)(res, {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    error: formattedErrors,
                    message: "validation faild",
                    data: null,
                });
            }
            next(error);
        }
    });
};
exports.validateImageFilesRequest = validateImageFilesRequest;
