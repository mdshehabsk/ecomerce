import mongoose from "mongoose";

import { Cart } from "./cart.model";

const addCartItem = async ({
  userId,
  productId,
  quantity = 1,
}: {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity?: number;
}) => {
  let cart = await Cart.findOne({ user: userId }).populate({
    path: "items.product",
    model: "Product",
    select: "-description -meta_info -more_info -status -categories",
  });
  if (!cart) {
    // Create a new cart if it doesn't exist
    cart = new Cart({
      user: userId,
      items: [{ product: productId, quantity }],
    });
    await cart.save();
  } else {
    // Check if the product is already in the cart
    const existingItem = cart.items.find(
      (item) => item.product._id.toString() === productId.toString()
    );
    if (existingItem) {
      // Update the quantity of the existing item
      existingItem.quantity += quantity;
    } else {
      // Add a new item to the cart
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
  }

  return { cart };
};

const getCarts = async (userId: mongoose.ObjectId) =>
  await Cart.findOne({ user: userId }).populate({
    path: "items.product",
    model: "Product",
    select: "-description -meta_info -more_info -status -categories -stock",
  });

const updateCartItem = async ({
  userId,
  quantity,
  itemId,
}: {
  userId: mongoose.ObjectId;
  quantity: number;
  itemId: mongoose.ObjectId | string;
}) => {
  const carts = await Cart.findOne({ user: userId });
  if (!carts) {
    return {
      cartsNotFound: true,
    };
  }
  const foundItem = carts?.items?.find(
    (item) => item?._id?.toString() == itemId
  );
  if (foundItem) {
    foundItem.quantity = quantity;
  }else {
    return {
      cartItemNotFound : true
    }
  }
  await carts.save()
  return {carts}
};


const deleteCartItem = async({itemId, userId}: {itemId:mongoose.ObjectId | string, userId: mongoose.ObjectId | string}) => {
  const carts = await Cart.findOneAndUpdate({user:userId}, {$pull : {items: {_id: itemId}}}, {new: true})
  return {carts}
}

export const CartSerivice = {
  addCartItem,
  getCarts,
  updateCartItem,
  deleteCartItem
};
