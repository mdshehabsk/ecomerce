import mongoose from "mongoose";

export interface IItems {
    product: mongoose.Types.ObjectId,
    quantity: number
    _id?: mongoose.Types.ObjectId
}
export interface ICart {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    items: IItems[]
}