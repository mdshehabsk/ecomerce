import { cloudinaryImageUpload } from "../Cloudinary/cloudinary.image.upload.service"
import { TgetImagesWithResulation } from "../Cloudinary/resulation"
import { IProduct } from "./product.interface"
import { Product } from "./product.model"


const createProduct = async (body: IProduct,files: TgetImagesWithResulation) => {

  const uploadedImages =  await cloudinaryImageUpload(files,'pickaboo/product')
  const uploadedImagesURLS = uploadedImages.map(uploadedImage => uploadedImage.url)

    const {name,slug,description,more_info,base_price,discount,stock,categories,status} = body
    const parsedMoreInfo = JSON.parse(more_info as unknown as string)
    const parsedCategories = JSON.parse(categories as unknown as string)
    const product = await Product.create({
        categories: parsedCategories,
        more_info: parsedMoreInfo,
        name,
        slug,
        description,
        base_price: Number(base_price),
        discount: Number(discount),
        stock: Number(stock),
        imageArr: uploadedImagesURLS,
        status
    })

    return {product}
}


const getSingleProduct = async (slug: string) => {
    const product = await Product.findOne({slug}).select('-categories -status')
    return product
}


const getProductByCategory = async (category: string, page = 1, limit = 20) => {
    const totalProductItems = await Product.countDocuments(({categories: category}))
    const skip = (page-1) * limit
    const products = await Product.find({categories: category}).skip(skip).limit(limit).select('-status -categories -description')
    const data = {
        meta: {
            totalItems : totalProductItems
        },
        products
    }
    return data
}

export const ProductService = {
    createProduct,
    getSingleProduct,
    getProductByCategory
}