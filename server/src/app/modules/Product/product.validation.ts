import { z } from "zod";

const CreateProductZodSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required." })
      .min(1, { message: "Name must contain at least 1 character." }),
    slug: z
      .string({ required_error: "Slug is required." })
      .min(1, { message: "Slug must contain at least 1 character." }),
    description: z
      .string({ required_error: "Description is required." })
      .min(100, {
        message: "Description must contain at least 100 characters.",
      }),
      base_price: z
      .preprocess(
        (value) => {
          const parsed = Number(value); // Convert to number
          return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        },
        z.number({ required_error: "Base price is required." })
          .min(1, "Base price must be at least 1.") // Ensure minimum price
      ),
    discount: z
      .preprocess(
        (value) => {
          const parsed = Number(value); // Convert to number
          return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        },
        z.number({ required_error: "Discount is required." })
          .min(0, "Discount cannot be negative.") // Ensure discount is non-negative
      ),
    stock: z
      .preprocess(
        (value) => {
          const parsed = Number(value); // Convert to number
          return isNaN(parsed) ? null : parsed; // Return null if not a valid number
        },
        z.number({ required_error: "Stock is required." })
          .int("Stock must be an integer.") // Ensure stock is an integer
          .min(1, "Stock must be at least 1.") // Ensure stock is non-negative
      ),

    more_info: z.string({ required_error: "More info is required." }).refine(
      (value) => {
        try {
          const parsed = JSON.parse(value);

          // Ensure it's an array
          if (!Array.isArray(parsed) || parsed.length === 0) {
            return false;
          }

          // Validate each item in the array
          const valid = parsed.every(
            (item) =>
              typeof item === "object" &&
              item !== null &&
              typeof item.key === "string" && // Ensure key is a string
              item.value !== undefined // Ensure value is valid (you can refine further based on your requirements)
          );
          return valid
        } catch {
          return false; // Parsing failed
        }
      },
      {
        message:
          "More info must be a valid JSON array of objects with key and value.",
      }
    ),
    categories: z.string({ required_error: "Categories required" }).refine(
      (value) => {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) && parsed.length > 0
      } catch {
        return false; // Return false if JSON parsing fails
      }
    },{
      message: "Categories must be a valid JSON array of string."
    }),
  
  }),
});

const CreateProductimagesZodSchema = z.object({
  images: z
    .array(
      z.object({
        originalname: z.string().min(1, "image name is required"),
        mimetype: z
          .enum(["image/jpeg", "image/png", "image/jpg"], {
            message: "Only image support",
          })
          .optional(), // Restrict to specific image types
        size: z
          .number()
          .max(5 * 1024 * 1024, "image size should not exceed 5MB"), // Max size 5MB
        width: z
          .union([z.number(), z.string()])
          .refine((value) => !isNaN(Number(value)) && Number(value) === 800, {
            message: "Image resulation must be 800x800",
          }),
        height: z
          .union([z.number(), z.string()])
          .refine((value) => !isNaN(Number(value)) && Number(value) === 800, {
            message: "Image resulation must be 800x800",
          }),
      })
    )
    .min(1, { message: "At least one image required" })
    .max(5, { message: "You can upload up to 5 images" }),
});

export const ProductValidation = {
  CreateProductZodSchema,
  CreateProductimagesZodSchema,
};
