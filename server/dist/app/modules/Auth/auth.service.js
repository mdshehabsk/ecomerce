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
exports.AuthServices = void 0;
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../User/user.model");
const auth_utils_1 = require("./auth.utils");
const sendMail_1 = require("../../mail/sendMail");
const userRegister = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = user;
    const userExist = yield user_model_1.User.findOne({ email, isEmailVerified: false });
    if (userExist) {
        if (userExist.googleId) {
            return {
                googleId: true,
            };
        }
        return {
            emailExist: true,
        };
    }
    const userSaved = yield user_model_1.User.create({ email, username, password });
    const token = (0, auth_utils_1.createToken)({ _id: userSaved._id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
    const mailSend = yield (0, sendMail_1.sendMail)({
        email: userSaved.email,
        subject: "verification",
        token,
        username: userSaved.username,
    });
    yield userSaved.save();
    if (userSaved && mailSend.accepted) {
        return {
            userSaved: true,
        };
    }
    throw new Error("user registration faild");
});
const userLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = user;
    const userExist = yield user_model_1.User.findOne({ email, isEmailVerified: true });
    if (!userExist) {
        return {
            userNotFound: true
        };
    }
    const verifyUser = yield bcrypt_1.default.compare(password, userExist.password);
    if (verifyUser) {
        const token = (0, auth_utils_1.createToken)({ _id: userExist._id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
        return {
            verifyUser: true,
            token,
        };
    }
    throw new Error("user login faild");
});
const verifyUser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const verified = (0, auth_utils_1.verifyToken)(token, config_1.default.jwt_secret);
    const updateUser = yield user_model_1.User.findByIdAndUpdate(verified._id, {
        isEmailVerified: true,
    });
    if (updateUser) {
        const userToken = (0, auth_utils_1.createToken)({ _id: updateUser._id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
        return {
            userVerify: true,
            userToken
        };
    }
    throw new Error("user verifyed faild");
});
exports.AuthServices = {
    userRegister,
    userLogin,
    verifyUser,
};
