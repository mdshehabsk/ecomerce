import { Router } from "express";
import { isLogin } from "../../middleware/auth";
import { ProductsController } from "./product.controller";
import {
  validateBodyRequest,
  validateImageFilesRequest,
} from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";
import multer from "multer";

const router = Router();

const upload = multer();
router.post(
  "/create-product",
  isLogin,
  upload.array("images"),
  validateBodyRequest(ProductValidation.CreateProductZodSchema),
  validateImageFilesRequest(ProductValidation.CreateProductimagesZodSchema),
  ProductsController.createProduct
);

router.get('/get-single-product/:slug',ProductsController.getSingleProduct)
router.get('/get-products-by-category/:category',ProductsController.getProductByCategory)

router.get('/get-main-product', ProductsController.getMainProduct)


export const ProductRoutes = router;
