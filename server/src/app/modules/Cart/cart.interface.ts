import mongoose from "mongoose";

export interface IItems {
    productId: mongoose.Types.ObjectId,
    quantity: number
}
export interface ICart {
    _id: mongoose.Types.ObjectId
    userId: mongoose.Types.ObjectId
    items: IItems[]
}