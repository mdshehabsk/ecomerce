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
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const auth_validation_1 = require("./auth.validation");
const user_model_1 = require("../User/user.model");
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.validateBodyRequest)(auth_validation_1.AuthValidation.AuthRegisterSchema), auth_controller_1.AuthController.authRegister);
router.post('/login', (0, validateRequest_1.validateBodyRequest)(auth_validation_1.AuthValidation.AuthLoginSchema), auth_controller_1.AuthController.authLogin);
router.post('/login/google', (0, validateRequest_1.validateBodyRequest)(auth_validation_1.AuthValidation.AuthLoginGoogleSchema), auth_controller_1.AuthController.authLoginGoogle);
router.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.find();
    res.json(user);
}));
router.get('/verify-user', (0, validateRequest_1.validateQueryRequest)(auth_validation_1.AuthValidation.AuthVerifySchema), auth_controller_1.AuthController.verifyUser);
exports.AuthRoutes = router;
