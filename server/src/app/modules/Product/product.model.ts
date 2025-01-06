import { model, Schema } from "mongoose";

import { EProductStatus, IMoreInformation, IProduct } from "./product.interface";

const moreInfoSchema = new Schema<IMoreInformation> ({
    key: {
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }
})

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    slug: {
        type : String,
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
    categories:{
        type: [String],
        required: true
    },
    imageArr: {
        type: [String],
        required: true
    },
    status : {
        type: String,
        default: EProductStatus.DRAFT
    }
},{timestamps: true})

export const Product = model<IProduct>('Product',productSchema)

