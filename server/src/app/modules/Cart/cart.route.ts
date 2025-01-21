


import { Router } from "express";
import { CartController } from "./cart.controller";
import { isLogin } from "../../middleware/auth";

const router = Router()


router.post('/add-cart-item',isLogin, CartController.addCartItem)


export const CartRoutes = router