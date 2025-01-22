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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const product_model_1 = require("./product.model");
const CreateProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is required." })
            .min(1, { message: "Name must contain at least 1 character." }),
        slug: zod_1.z
            .string({ required_error: "Slug is required." })
            .min(1, { message: "Slug must contain at least 1 character." })
            .refine((value) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const foundSlug = yield product_model_1.Product.findOne({ slug: value });
                return !foundSlug;
            }
            catch (error) {
                throw new Error("An error occurred while validating the slug.");
            }
        }), { message: "Slug must be unique." }),
        description: zod_1.z
            .string({ required_error: "Description is required." })
            .min(100, {
            message: "Description must contain at least 100 characters.",
        }),
        base_price: zod_1.z.preprocess((value) => {
            const parsed = Number(value); // Convert to number
            return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        }, zod_1.z
            .number({ required_error: "Base price is required." })
            .min(1, "Base price must be at least 1.") // Ensure minimum price
        ),
        discount: zod_1.z.preprocess((value) => {
            const parsed = Number(value); // Convert to number
            return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        }, zod_1.z
            .number({ required_error: "Discount is required." })
            .min(0, "Discount cannot be negative.") // Ensure discount is non-negative
        ),
        stock: zod_1.z.preprocess((value) => {
            const parsed = Number(value); // Convert to number
            return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        }, zod_1.z
            .number({ required_error: "Stock is required." })
            .int("Stock must be an integer.") // Ensure stock is an integer
            .min(1, "Stock must be at least 1.") // Ensure stock is non-negative
        ),
        more_info: zod_1.z.string({ required_error: "More info is required." }).refine((value) => {
            try {
                const parsed = JSON.parse(value);
                // Ensure it's an array
                if (!Array.isArray(parsed) || parsed.length === 0) {
                    return false;
                }
                // Validate each item in the array
                const valid = parsed.every((item) => typeof item === "object" &&
                    item !== null &&
                    typeof item.key === "string" && // Ensure key is a string
                    item.value !== undefined // Ensure value is valid (you can refine further based on your requirements)
                );
                return valid;
            }
            catch (_a) {
                return false; // Parsing failed
            }
        }, {
            message: "More info must be a valid JSON array of objects with key and value.",
        }),
        categories: zod_1.z.string({ required_error: "Categories required" }).refine((value) => {
            try {
                const parsed = JSON.parse(value);
                return Array.isArray(parsed) && parsed.length > 0;
            }
            catch (_a) {
                return false; // Return false if JSON parsing fails
            }
        }, {
            message: "Categories must be a valid JSON array of string.",
        }),
    }),
});
const CreateProductimagesZodSchema = zod_1.z.object({
    images: zod_1.z
        .array(zod_1.z.object({
        originalname: zod_1.z.string().min(1, "image name is required"),
        mimetype: zod_1.z
            .enum(["image/jpeg", "image/png", "image/jpg"], {
            message: "Only image support",
        })
            .optional(), // Restrict to specific image types
        size: zod_1.z
            .number()
            .max(5 * 1024 * 1024, "image size should not exceed 5MB"), // Max size 5MB
        width: zod_1.z
            .union([zod_1.z.number(), zod_1.z.string()])
            .refine((value) => !isNaN(Number(value)) && Number(value) === 800, {
            message: "Image resulation must be 800x800",
        }),
        height: zod_1.z
            .union([zod_1.z.number(), zod_1.z.string()])
            .refine((value) => !isNaN(Number(value)) && Number(value) === 800, {
            message: "Image resulation must be 800x800",
        }),
    }))
        .min(1, { message: "At least one image required" })
        .max(5, { message: "You can upload up to 5 images" }),
});
exports.ProductValidation = {
    CreateProductZodSchema,
    CreateProductimagesZodSchema,
};
