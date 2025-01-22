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
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../Product/product.model");
const AppError_1 = require("../../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
const ItemSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
});
const CartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [ItemSchema]
});
CartSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const item of this.items) {
            const product = yield product_model_1.Product.findById(item.product);
            if (!product) {
                return next(new AppError_1.AppError(http_status_1.default.NOT_FOUND, `Product with ID ${item.product} not found`));
            }
            if (product.stock < item.quantity) {
                return next(new AppError_1.AppError(http_status_1.default.NOT_FOUND, `Insufficient stock for product ${product.name}`));
            }
        }
        next();
    });
});
// create model:
exports.Cart = (0, mongoose_1.model)("Cart", CartSchema);
