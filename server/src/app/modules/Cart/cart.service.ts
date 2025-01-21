import mongoose from "mongoose"
import { Product } from "../Product/product.model"
import { Cart } from "./cart.model"


const addCartItem = async ({userId,productId, quantity = 1}: {userId:mongoose.Types.ObjectId,productId:mongoose.Types.ObjectId,quantity?: number}) => {
   const product = await Product.findOne({_id: productId})
   if(!product) {
    return {
        productNotFound: true
    }
   }
   let cart = await Cart.findOne({userId})
   if (!cart) {
    // Create a new cart if it doesn't exist
    cart = new Cart({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  } else {
    // Check if the product is already in the cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId.toString()
    );

    if (existingItem) {
      // Update the quantity of the existing item
      existingItem.quantity += quantity;
    } else {
      // Add a new item to the cart
      cart.items.push({productId, quantity });
    }
    await cart.save()
    return {cart}
  }
   throw new Error('add cart item faild')
}


const getCarts = async (userId: mongoose.Types.ObjectId) => await Cart.findOne({userId}).populate({path: 'items.productId',model: 'Product', select: '-description -meta_info -more_info -status -categories',})

export const CartSerivice = {
    addCartItem,
    getCarts
}