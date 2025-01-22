import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CartSerivice } from "./cart.service";

const addCartItem = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;
  if (!productId) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      error: "product id missing",
    });
  }
  const { cart } = await CartSerivice.addCartItem({
    userId,
    productId,
    quantity,
  });
  if (cart) {
    return sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      data: cart,
      message: "add cart successfull",
    });
  }
});

const getCarts = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const carts = await CartSerivice.getCarts(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: carts,
    message: "get carts successfull",
  });
});


const updateCartItem = catchAsync(async (req,res) => {
    const {itemId} = req.params
    const userId = req.user._id
    const {quantity} = req.body
   const {cartItemNotFound,carts,cartsNotFound} = await CartSerivice.updateCartItem({itemId ,userId,quantity})
   if(cartItemNotFound) {
   return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        error: 'cart item not found'
      });
   }
   if(cartsNotFound){
    return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        error: 'carts not found'
      });
   }
   if(carts){
    return sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
       message : 'cart update successfull',
       data: carts
      });
   }
})


const deleteCartItem = catchAsync(async(req,res)=> {
    const {itemId} = req.params
    const userId = req.user._id
    const {carts} = await CartSerivice.deleteCartItem({itemId,userId})
    if(carts) {
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            data: carts,
            message: 'delete cart item successfull'
        })
    }
})

export const CartController = {
  addCartItem,
  getCarts,
  updateCartItem,
  deleteCartItem
};
