


import { Router } from "express";
import { CartController } from "./cart.controller";
import { isLogin } from "../../middleware/auth";

const router = Router()

// add cart item
router.post('/add-cart-item',isLogin, CartController.addCartItem)


//get carts
router.get('/get-carts',isLogin,CartController.getCarts)

router.patch('/update-cart-item/:itemId',isLogin,CartController.updateCartItem)


router.delete('/delete-cart-item/:itemId',isLogin,CartController.deleteCartItem)

export const CartRoutes = router