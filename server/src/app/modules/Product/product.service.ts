import { cloudinaryImageUpload } from "../Cloudinary/cloudinary.image.upload.service";
import { TgetImagesWithResulation } from "../Cloudinary/resulation";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (
  body: IProduct,
  files: TgetImagesWithResulation
) => {
  const {
    name,
    slug,
    description,
    more_info,
    base_price,
    discount,
    stock,
    categories,
    status,
    meta_info,
  } = body;
  const uploadedImages = await cloudinaryImageUpload(files, "pickaboo/product");
  const uploadedImagesURLS = uploadedImages.map(
    (uploadedImage) => uploadedImage.url
  );


  const parsedMoreInfo = JSON.parse(more_info as unknown as string);
  const parsedCategories = JSON.parse(categories as unknown as string);
  const parsedMeta = JSON.parse(meta_info as unknown as string);

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
    status,
    meta_info: parsedMeta,
  });

  return { product };
};

const getSingleProduct = async (slug: string) => {
  const product = await Product.findOne({ slug }).select("-categories -status");
  return product;
};

const getProductByCategory = async ({
  category,
  query,
}: {
  category: string;
  query: Record<string, unknown | string | number | string[]>;
}) => {
  const min = Number(query.min);
  const max = Number(query.max);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const sort = query.sort
  delete query.min;
  delete query.max;
  delete query.page;
  delete query.sort;
  const totalProductItems = await Product.countDocuments({
    categories: category,
  });
  const filterQueryObj: Record<string, string[]> = {};
  for (const i in query) {
    const value = (query[i] as string).toString();
    filterQueryObj[i] = value?.split(",");
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
  const mongoseQuery: Record<string, unknown> = { categories: category };
  if (metaInfoArr.length > 0) {
    mongoseQuery.$and = metaInfoArr;
  }
  const priceFilter: Record<string, number> = {};
  if (min && typeof min === "number") {
    priceFilter.$gte = min;
  }
  if (max && typeof max === "number") {
    priceFilter.$lte = max;
  }
  if (Object.entries(priceFilter).length > 0) {
    mongoseQuery.base_price = priceFilter;
  }
  const sortObj: Record<string, Record<string, 1 | -1>> = {
    'price-1': { base_price: -1 },
    'price1': { base_price: 1 },
    'name-1': { name: -1 },
    'name1': { name: 1 },
    'date-1': { createdAt: -1 },
    'date1': { createdAt: 1 },
  };
  
  const currentSortObj = sort ? sortObj[sort as keyof typeof sortObj] : undefined;

  const products = await Product.find(mongoseQuery)
    .skip(skip)
    .limit(limit)
    .sort(currentSortObj || {createdAt: -1})
    .select("-status -categories -description");
  const data = {
    meta: {
      totalItems: totalProductItems,
    },
    products,
  };
  return data;
};

export const ProductService = {
  createProduct,
  getSingleProduct,
  getProductByCategory,
};
