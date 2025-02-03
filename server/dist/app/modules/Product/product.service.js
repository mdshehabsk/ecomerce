"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const cloudinary_image_upload_service_1 = require("../Cloudinary/cloudinary.image.upload.service");
const product_model_1 = require("./product.model");
const createProduct = (body, files) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, slug, description, more_info, base_price, discount, stock, categories, status, meta_info, } = body;
    const uploadedImages = yield (0, cloudinary_image_upload_service_1.cloudinaryImageUpload)(files, "pickaboo/product");
    const uploadedImagesURLS = uploadedImages.map((uploadedImage) => uploadedImage.secure_url);
    const parsedMoreInfo = JSON.parse(more_info);
    const parsedCategories = JSON.parse(categories);
    const parsedMeta = JSON.parse(meta_info);
    const product = yield product_model_1.Product.create({
        categories: parsedCategories,
        more_info: parsedMoreInfo,
        name,
        slug,
        description,
        base_price: Number(base_price),
        discount: Number(discount),
        stock: Number(stock),
        imageArr: uploadedImagesURLS,
        status,
        meta_info: parsedMeta,
    });
    return { product };
});
const getSingleProduct = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOne({ slug }).select("-categories -status");
    return product;
});
const getProductByCategory = (_a) => __awaiter(void 0, [_a], void 0, function* ({ category, query, }) {
    const min = Number(query.min);
    const max = Number(query.max);
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const sort = query.sort;
    delete query.min;
    delete query.max;
    delete query.page;
    delete query.sort;
    delete query.limit;
    const totalProductItems = yield product_model_1.Product.countDocuments({
        categories: category,
    });
    const filterQueryObj = {};
    for (const i in query) {
        const value = query[i].toString();
        filterQueryObj[i] = value === null || value === void 0 ? void 0 : value.split(",");
    }
    const skip = (page - 1) * limit;
    const metaInfoArr = [];
    for (const i in filterQueryObj) {
        const obj = {
            meta_info: {
                $elemMatch: { key: i, value: { $in: filterQueryObj[i] } },
            },
        };
        metaInfoArr.push(obj);
    }
    const mongoseQuery = { categories: category };
    if (metaInfoArr.length > 0) {
        mongoseQuery.$and = metaInfoArr;
    }
    const priceFilter = {};
    if (min && typeof min === "number") {
        priceFilter.$gte = min;
    }
    if (max && typeof max === "number") {
        priceFilter.$lte = max;
    }
    if (Object.entries(priceFilter).length > 0) {
        mongoseQuery.base_price = priceFilter;
    }
    const sortObj = {
        'price-1': { base_price: -1 },
        'price1': { base_price: 1 },
        'name-1': { name: -1 },
        'name1': { name: 1 },
        'date-1': { createdAt: -1 },
        'date1': { createdAt: 1 },
    };
    const currentSortObj = sort ? sortObj[sort] : undefined;
    const products = yield product_model_1.Product.find(mongoseQuery)
        .skip(skip)
        .limit(limit)
        .sort(currentSortObj || { createdAt: -1 })
        .select("-status -categories -description");
    const data = {
        meta: {
            totalItems: totalProductItems,
        },
        products,
    };
    return data;
});
const getMainProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const smartphones = yield product_model_1.Product.find({ categories: 'smartphones' }).limit(6).select('-description -more_info -meta_info -categories -status ');
    const recenentProducts = yield ((_a = product_model_1.Product === null || product_model_1.Product === void 0 ? void 0 : product_model_1.Product.find()) === null || _a === void 0 ? void 0 : _a.sort({ createdAt: -1 }).limit(6).select('-description -more_info -meta_info -categories -status '));
    const lifestyleProducts = yield product_model_1.Product.find({ categories: 'lifestyle' }).limit(6).select('-description -more_info -meta_info -categories -status ');
    const electronicsProducts = yield product_model_1.Product.find({ categories: 'electronics-appliances' }).limit(6).select('-description -more_info -meta_info -categories -status ');
    const gadgetProducts = yield product_model_1.Product.find({ categories: 'mobile-accessories' }).limit(6).select('-description -more_info -meta_info -categories -status ');
    const computersProducts = yield product_model_1.Product.find({ categories: 'computer' }).limit(6).select('-description -more_info -meta_info -categories -status ');
    const products = { smartphones, recenentProducts, lifestyleProducts, electronicsProducts, gadgetProducts, computersProducts };
    return products;
});
const getProductSearch = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const formatedName = name.trim();
    if (!formatedName) {
        return [];
    }
    const products = yield product_model_1.Product.find({ name: new RegExp(formatedName, 'i') }).select('-categories -more_info -meta_info -description -status');
    return products;
});
exports.ProductService = {
    createProduct,
    getSingleProduct,
    getProductByCategory,
    getMainProduct,
    getProductSearch
};
