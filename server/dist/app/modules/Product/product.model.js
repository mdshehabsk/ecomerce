"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const product_interface_1 = require("./product.interface");
const moreInfoSchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
const metaInfoSchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: mongoose_1.Schema.Types.Mixed, // Allow mixed data type
        required: true,
    }
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    base_price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        max: 100,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    more_info: [moreInfoSchema],
    meta_info: [metaInfoSchema],
    categories: {
        type: [String],
        required: true
    },
    imageArr: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: product_interface_1.EProductStatus,
        default: product_interface_1.EProductStatus.DRAFT
    },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', productSchema);
