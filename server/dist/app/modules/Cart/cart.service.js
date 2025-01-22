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
exports.CartSerivice = void 0;
const cart_model_1 = require("./cart.model");
const addCartItem = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, productId, quantity = 1, }) {
    let cart = yield cart_model_1.Cart.findOne({ user: userId }).populate({
        path: "items.product",
        model: "Product",
        select: "-description -meta_info -more_info -status -categories",
    });
    if (!cart) {
        // Create a new cart if it doesn't exist
        cart = new cart_model_1.Cart({
            user: userId,
            items: [{ product: productId, quantity }],
        });
        yield cart.save();
    }
    else {
        // Check if the product is already in the cart
        const existingItem = cart.items.find((item) => item.product._id.toString() === productId.toString());
        if (existingItem) {
            // Update the quantity of the existing item
            existingItem.quantity += quantity;
        }
        else {
            // Add a new item to the cart
            cart.items.push({ product: productId, quantity });
        }
        yield cart.save();
    }
    return { cart };
});
const getCarts = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_model_1.Cart.findOne({ user: userId }).populate({
        path: "items.product",
        model: "Product",
        select: "-description -meta_info -more_info -status -categories -stock",
    });
});
const updateCartItem = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, quantity, itemId, }) {
    var _b;
    const carts = yield cart_model_1.Cart.findOne({ user: userId });
    if (!carts) {
        return {
            cartsNotFound: true,
        };
    }
    const foundItem = (_b = carts === null || carts === void 0 ? void 0 : carts.items) === null || _b === void 0 ? void 0 : _b.find((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item._id) === null || _a === void 0 ? void 0 : _a.toString()) == itemId; });
    if (foundItem) {
        foundItem.quantity = quantity;
    }
    else {
        return {
            cartItemNotFound: true
        };
    }
    yield carts.save();
    return { carts };
});
const deleteCartItem = (_a) => __awaiter(void 0, [_a], void 0, function* ({ itemId, userId }) {
    const carts = yield cart_model_1.Cart.findOneAndUpdate({ user: userId }, { $pull: { items: { _id: itemId } } }, { new: true });
    return { carts };
});
exports.CartSerivice = {
    addCartItem,
    getCarts,
    updateCartItem,
    deleteCartItem
};
