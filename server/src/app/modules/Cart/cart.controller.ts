import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { CartSerivice } from "./cart.service";


const addCartItem = catchAsync(async (req,res) => {
    const userId = req.user._id;
    const {productId,quantity} = req.body
    if(!productId) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            error : 'product id missing',
        })
    }
   const {productNotFound,cart} = await CartSerivice.addCartItem({userId,productId,quantity})
   if(productNotFound){
       return sendResponse(res, {
           statusCode: httpStatus.NOT_FOUND,
           success: false,
           error : 'invalid product id',
        })
    }
if(cart){
    return sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        data: cart,
        message : 'add cart successfull'
    })
}

 
})


const getCarts = catchAsync(async(req,res)=> {
    const userId = req.user._id
    const carts = await CartSerivice.getCarts(userId)
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        data: carts,
        message: 'get carts successfull'
    })
})


export const CartController = {
    addCartItem,
    getCarts
}