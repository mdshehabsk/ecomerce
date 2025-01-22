"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/User/user.route");
const product_route_1 = require("../modules/Product/product.route");
const cart_route_1 = require("../modules/Cart/cart.route");
const router = (0, express_1.Router)();
const moduleRotes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/product',
        route: product_route_1.ProductRoutes
    },
    {
        path: '/cart',
        route: cart_route_1.CartRoutes
    }
];
moduleRotes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
