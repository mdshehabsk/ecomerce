import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./product.service";
import { Express } from "express";

const createProduct = catchAsync(async(req,res)=> {
    const body = req.body

    const files = req.files as Express.Multer.File[]
   const {product} =  await ProductService.createProduct(body,files)

   if(product){
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        data: product,
        message: `Product created successfull as ${product.status} `
    })
   }
})


const getSingleProduct = catchAsync(async (req,res) => {
    const {slug} = req.params
    const product = await ProductService.getSingleProduct(slug)
    if(!product) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            error: 'Product Not found'
        })
    }
    return sendResponse(res, {
        statusCode: httpStatus.OK,
        data: product,
        success: true,
        message: 'product successfully found'
    })
})

export const ProductsController = {
    createProduct,
    getSingleProduct
}