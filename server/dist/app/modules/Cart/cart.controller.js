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
exports.CartController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const cart_service_1 = require("./cart.service");
const addCartItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    if (!productId) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            error: "product id missing",
        });
    }
    const { cart } = yield cart_service_1.CartSerivice.addCartItem({
        userId,
        productId,
        quantity,
    });
    if (cart) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            data: cart,
            message: "add cart successfull",
        });
    }
}));
const getCarts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const carts = yield cart_service_1.CartSerivice.getCarts(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: carts,
        message: "get carts successfull",
    });
}));
const updateCartItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const userId = req.user._id;
    const { quantity } = req.body;
    const { cartItemNotFound, carts, cartsNotFound } = yield cart_service_1.CartSerivice.updateCartItem({ itemId, userId, quantity });
    if (cartItemNotFound) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            error: 'cart item not found'
        });
    }
    if (cartsNotFound) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            error: 'carts not found'
        });
    }
    if (carts) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'cart update successfull',
            data: carts
        });
    }
}));
const deleteCartItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const userId = req.user._id;
    const { carts } = yield cart_service_1.CartSerivice.deleteCartItem({ itemId, userId });
    if (carts) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            data: carts,
            message: 'delete cart item successfull'
        });
    }
}));
exports.CartController = {
    addCartItem,
    getCarts,
    updateCartItem,
    deleteCartItem
};
