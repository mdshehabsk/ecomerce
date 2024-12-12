"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.get('/get-user-data', auth_1.isLogin, user_controller_1.UserController.getUserData);
exports.UserRoutes = router;
