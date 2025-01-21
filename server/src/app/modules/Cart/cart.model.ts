
import  { Schema, model } from "mongoose";

import { ICart, IItems } from "./cart.interface";
import { Product } from "../Product/product.model";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";

const ItemSchema = new Schema<IItems>({
    productId : {
        type: Schema.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

const CartSchema = new Schema<ICart>({
    userId: {
        type: Schema.ObjectId,
        required: true,
        ref:'User'
    },
    items : [ItemSchema]
})


CartSchema.pre('save', async function (next) {
    for (const item of this.items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return next(new AppError(httpStatus.NOT_FOUND,`Product with ID ${item.productId} not found`))
      }
      if (product.stock < item.quantity) {
        return next(new AppError(httpStatus.NOT_FOUND,`Insufficient stock for product ${product.name}`))
      }
    }
    next();
  });
  

// create model:
export const Cart = model<ICart>("Cart", CartSchema);
