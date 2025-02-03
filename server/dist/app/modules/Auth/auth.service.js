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
const config_2 = __importDefault(require("../../../firebase/config"));
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
    if (!verifyUser) {
        return {
            userNotVeryfied: true
        };
    }
    const token = (0, auth_utils_1.createToken)({ _id: userExist._id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
    return {
        token,
        user: {
            _id: userExist._id,
            username: userExist.username,
            email: userExist.email,
        }
    };
});
const userLoginGoogle = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = yield config_2.default.auth().verifyIdToken(token);
    const { name, sub, email } = decodedToken;
    const userExist = yield user_model_1.User.findOne({ email });
    const myToken = (0, auth_utils_1.createToken)({ _id: userExist === null || userExist === void 0 ? void 0 : userExist.id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
    const response = { loginSuccess: true, myToken: '' };
    if (userExist && !userExist.googleId && decodedToken) {
        yield userExist.updateOne({ googleId: sub, username: name });
        response.loginSuccess = true,
            response.myToken = myToken;
    }
    else if (!userExist && decodedToken) {
        const user = yield user_model_1.User.create({ email, googleId: sub, username: name });
        const myToken = (0, auth_utils_1.createToken)({ _id: user === null || user === void 0 ? void 0 : user.id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
        yield user.save();
        response.loginSuccess = true,
            response.myToken = myToken;
    }
    else if (userExist === null || userExist === void 0 ? void 0 : userExist.googleId) {
        response.loginSuccess = true,
            response.myToken = myToken;
    }
    else {
        response.loginSuccess = false,
            response.myToken = '';
    }
    return response;
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
    userLoginGoogle
};
