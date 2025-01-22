"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
// add cart item
router.post('/add-cart-item', auth_1.isLogin, cart_controller_1.CartController.addCartItem);
//get carts
router.get('/get-carts', auth_1.isLogin, cart_controller_1.CartController.getCarts);
router.patch('/update-cart-item/:itemId', auth_1.isLogin, cart_controller_1.CartController.updateCartItem);
router.delete('/delete-cart-item/:itemId', auth_1.isLogin, cart_controller_1.CartController.deleteCartItem);
exports.CartRoutes = router;
