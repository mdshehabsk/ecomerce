"use client";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import Quill from "@/components/RichText/Quiill";

import * as categories from '@/../src/helper.json'
import { useCreateProductMutation } from "@/toolkit/api/productApi";
import Box from "./Box";
import Spinner from "@/components/Loader/Spinner";
import ProductDetails from "@/components/Product_details/ProductDetails";
import PreviewPopover from "./PreviewPopover";
const Add_product = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [description, setDescription] = useState<string>("");
  const [moreInfo, setMoreInfo] = useState({ key: "", value: "" });
  const [mainInputVal, setMainInputVal] = useState({
    name: "",
    slug: "",
    base_price: 0,
    discount: 0,
    stock: 0,
  });
  const [moreInfoArr, setMoreInfoArr] = useState<
    { key: string; value: string }[]
  >([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageArr, setImageArr] = useState<FileList | null>();
  const [categoryItems, setCategoryItems] = useState(
    categories?.map((categoryItem) => ({ ...categoryItem, selected: false }))
  );
  const [subCategoryItems, setSubCategoryItems] = useState(
    categoryItems
      ?.filter((categoryItem) => categoryItem.selected)
      ?.flatMap((categoryItem) =>
        categoryItem.subCategories?.map((categoryItem) => ({
          ...categoryItem,
          selected: false,
        }))
      )
  );
  const [mutate, { data, isLoading, isSuccess, error, isError }] =
    useCreateProductMutation();
  const { name, slug, base_price, discount, stock } = mainInputVal;
  function handleMoreInfoInput(event: React.ChangeEvent<HTMLInputElement>) {
    setMoreInfo({ ...moreInfo, [event.target.name]: event.target.value });
  }

  function handleMainInputVal(event: React.ChangeEvent<HTMLInputElement>) {
    setMainInputVal({
      ...mainInputVal,
      [event.target.name]: event.target.value,
    });
  }
  function handleAddNewInfo() {
    if (moreInfo.key === "" || moreInfo.value === "") {
      return setFieldErrors({
        ...fieldErrors,
        more_info: "key and value required",
      });
    }
    setMoreInfo({ key: "", value: "" });
    setMoreInfoArr((prev) => [...prev, moreInfo]);
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    setImageArr(files);
    if (files) {
      const fileArray = Array.from(files);
      const previewUrls: string[] = [];

      fileArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target?.result) {
            previewUrls.push(e.target.result as string);

            // Once all files are processed, update state
            if (previewUrls.length === fileArray.length) {
              setImagePreviews(previewUrls);
            }
          }
        };

        reader.readAsDataURL(file);
      });
    }
  }

  function handleCategoryItemClick(item: (typeof categoryItems)[number]) {
    const newArr = categoryItems?.map((categoryItem) => {
      if (categoryItem.name.value === item.name.value) {
        return {
          ...categoryItem,
          selected: !categoryItem?.selected,
        };
      } else {
        return categoryItem;
      }
    });

    setCategoryItems(newArr);
  }

  function handleCategorySubItemClick(item: (typeof subCategoryItems)[number]) {
    const newArr = subCategoryItems?.map((subCategoryItem) => {
      if (subCategoryItem.value === item.value) {
        return {
          ...subCategoryItem,
          selected: !subCategoryItem?.selected,
        };
      } else {
        return subCategoryItem;
      }
    });
    setSubCategoryItems(newArr);
  }
  useEffect(() => {
    setSubCategoryItems(
      categoryItems
        ?.filter((categoryItem) => categoryItem.selected)
        ?.flatMap((categoryItem) =>
          categoryItem.subCategories?.map((categoryItem) => ({
            ...categoryItem,
            selected: false,
          }))
        )
    );
  }, [categoryItems]);

  // slug
  useEffect(() => {
    if (mainInputVal.name) {
      const slugVal = name.toLowerCase().split(/[ /]+/).join("-");
      setMainInputVal({ ...mainInputVal, slug: slugVal });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  function handleAddProductSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("base_price", base_price.toString());
    formData.append("discount", discount.toString());
    formData.append("stock", stock.toString());
    const selectedCategoriesItems = categoryItems
      ?.filter((item) => item.selected)
      ?.map((item) => item.name.value);
    const selectedSubCategoriesItems = subCategoryItems
      .filter((item) => item.selected)
      ?.map((item) => item.value);
    const mergedCategories = [
      ...selectedCategoriesItems,
      ...selectedSubCategoriesItems,
    ];
    formData.append("categories", JSON.stringify(mergedCategories));
    formData.append("more_info", JSON.stringify(moreInfoArr));
    Array.from((imageArr as FileList) || Object)?.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("status", status);
    mutate(formData);
  }
  useEffect(() => {
    if (isError && "error" in error) {
      const newFieldErrors: Record<string, string> = {};
      if (Array.isArray(error.error)) {
        error.error.forEach((err) => {
          newFieldErrors[err.path] = err.message;
        });
      }
      setFieldErrors(newFieldErrors);
      toast.error(error?.message);
    }
  }, [error, isError]);
  useEffect(() => {
    if (isSuccess && data) {
      setFieldErrors({});
      toast.success(data?.message);
    }
  }, [data, isSuccess]);

  function handlePreviewOpen() {
    setPreviewOpen(true);
  }
  function handleDeleteMoreInfo(ind: number)  {
    setMoreInfoArr(prev => prev.filter((_moreInfo,index) => index !== ind ))
  }
  return (
    <div className="py-8">
      <div className="flex items-center justify-between sticky top-0 left-0 right-0 bg-white py-2 ">
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <div className="flex gap-4">
          <button
            onClick={handlePreviewOpen}
            className="text-sm px-6 py-3 border-mainBlueColor  border hover:bg-mainBlueColor hover:text-white transition-colors duration-100  rounded-lg"
          >
            Preview
          </button>
          <React.Fragment>
            {isLoading ? (
              <button className="text-sm px-6 py-3 box-content w-[40px] rounded-lg">
                <Spinner />
              </button>
            ) : (
              <button
                onClick={handleAddProductSubmit}
                className="text-sm px-6 py-3 bg-mainBlueColor text-white  rounded-lg"
              >
                Upload
              </button>
            )}
          </React.Fragment>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-2 mb-2">
        <div className="flex"></div>
        <Box>
          <label htmlFor="product-name" className="block text-sm   mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            name="name"
            value={mainInputVal.name}
            placeholder="Enter the product name"
            onChange={handleMainInputVal}
            className="w-full px-4 py-2  rounded outline-none  bg-[#EEEEEE] text-black placeholder:text-black/35 placeholder:text-xs "
          />
          {fieldErrors.name && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.name}
            </span>
          )}
        </Box>
        <Box>
          <label htmlFor="product-slug" className="block text-sm   mb-2">
            Product Slug
          </label>
          <input
            type="text"
            id="product-slug"
            name="slug"
            value={mainInputVal.slug}
            onChange={handleMainInputVal}
            placeholder="Slug"
            className="w-full px-4 py-2  rounded-sm outline-none  bg-[#EEEEEE] text-black placeholder:text-black/35  placeholder:text-xs "
          />
          {fieldErrors.slug && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.slug}
            </span>
          )}
        </Box>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 items-center">
        <Box>
          <label htmlFor="base-price" className="block text-sm  mb-2">
            Base Price
          </label>
          <input
            min={0}
            type="number"
            value={mainInputVal.base_price}
            name="base_price"
            id="base-price"
            onChange={handleMainInputVal}
            placeholder="Regular Price"
            className="w-full px-4 py-2  rounded-sm outline-none bg-[#EEEEEE] text-black placeholder:text-black/35  placeholder:text-xs "
          />
          {fieldErrors.base_price && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.base_price}
            </span>
          )}
        </Box>
        <Box>
          <label htmlFor="discount" className="block text-sm  mb-2">
            Discount
          </label>

          <div className="flex items-center bg-[#EEEEEE] ">
            <input
              min={0}
              type="number"
              id="discount"
              value={mainInputVal.discount}
              onChange={handleMainInputVal}
              name="discount"
              placeholder="Discount"
              className="w-full px-4 py-2  rounded-sm outline-none  bg-transparent border-none  text-black placeholder:text-black/35  placeholder:text-xs "
            />
            <span className="inline-block px-2 text-xs ">%</span>
          </div>
          {fieldErrors.discount && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.discount}
            </span>
          )}
        </Box>
        <Box>
          <label htmlFor="stock" className="block text-sm   mb-2">
            Stock
          </label>
          <div className="flex justify-between bg-[#EEEEEE]">
            <button
              className="text-xl bg-white text-black px-4"
              onClick={() =>
                setMainInputVal({
                  ...mainInputVal,
                  stock: mainInputVal.stock - 1,
                })
              }
            >
              -
            </button>
            <input
              type="number"
              id="stock"
              name="stock"
              value={mainInputVal.stock}
              onChange={handleMainInputVal}
              className="w-full px-4 py-2  rounded-sm outline-none  bg-transparent border-none  text-black placeholder:text-black/35  placeholder:text-xs custom-number-field text-center"
              placeholder="0"
            />
            <button
              className="text-xl bg-white text-black px-4 "
              onClick={() =>
                setMainInputVal({
                  ...mainInputVal,
                  stock: mainInputVal.stock + 1,
                })
              }
            >
              +
            </button>
          </div>
          {fieldErrors.stock && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.stock}
            </span>
          )}
        </Box>
      </div>
      <div className="more-information my-2">
        <h3 className=" text-base font-medium text-black">More Information</h3>
        {moreInfoArr?.map((info, ind) => (
          <div className={`flex justify-between ${
            ind !== moreInfoArr.length - 1 ? "border-b border-black/50" : ""
          } `}   key={ind} >
            <div
        
              className={`text-[14px] flex gap-1 py-2 `}
            >
              <span className="font-medium">{info.key}:</span>
              <span className="font-light">{info.value}</span>
            </div>
            <div className="bg-white p-3 cursor-pointer " onClick={()=>handleDeleteMoreInfo(ind)} >
              <RxCross1 className="text-red-500 text-xl font-semibold " />
            </div>
          </div>
        ))}

        <div>
          <div className="flex p-2 gap-3 w-full  bg-[#EEEEEE]">
            <input
              onChange={handleMoreInfoInput}
              value={moreInfo.key}
              type="text"
              name="key"
              placeholder="Key"
              className="border-none outline-none grow p-2 "
            />
            <input
              onChange={handleMoreInfoInput}
              value={moreInfo.value}
              type="text"
              name="value"
              placeholder="Value"
              className="border-none outline-none grow p-2 placeholder:text-black/30 font-light "
            />
          </div>
          {fieldErrors.more_info && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.more_info}
            </span>
          )}
        </div>
        <button
          className=" py-2 w-full bg-mainBlueColor text-white"
          onClick={handleAddNewInfo}
        >
          Add
        </button>
      </div>
      <div className="my-4">
        <h3 className=" font-medium   ">Upload Image</h3>
        <div className="flex gap-4 my-3 ">
          {imagePreviews.map((preview, index) => (
            <Image
              key={index}
              src={preview}
              alt="no image"
              width={150}
              height={150}
              className="object-cover"
            />
          ))}
        </div>
        <label
          className="block w-full py-2 bg-mainBlueColor text-center text-white cursor-pointer "
          htmlFor="image-file"
        >
          Add Image
        </label>
        <input
          type="file"
          multiple
          id="image-file"
          className="hidden"
          onChange={handleImageUpload}
        />
        {fieldErrors.images && (
          <span className="text-orangeColor text-sm block">
            {fieldErrors.images}
          </span>
        )}
      </div>
      <div className="w-full my-2  ">
        <label className="text-sm my-2 block ">Description</label>
        <Quill
          value={description}
          setValue={setDescription}
          className="w-full  h-[300px] "
        />
        <div className="my-14">
          {fieldErrors.description && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.description}
            </span>
          )}
        </div>
      </div>
      <div className="my-[100px] flex flex-wrap justify-between ">
        <div className=" basis-full lg:basis-6/12">
          <label className="my-3 inline-block font-medium">
            Select Category
          </label>
          {fieldErrors.categories && (
            <span className="text-orangeColor text-sm block">
              {fieldErrors.categories}
            </span>
          )}
          <div className="flex gap-2 flex-wrap ">
            {categoryItems.map((categoryItem) => (
              <div
                onClick={() => handleCategoryItemClick(categoryItem)}
                key={categoryItem?.name?.label}
                className={`flex items-center px-6 py-2 border  ${
                  categoryItem.selected
                    ? "bg-mainBlueColor/85 text-white"
                    : "border-mainBlueColor text-black"
                }  gap-1 rounded-full cursor-pointer text-sm `}
              >
                <span> {categoryItem?.name?.label} </span>
              </div>
            ))}
          </div>
        </div>
        {(categoryItems?.filter((categoryItem) => categoryItem.selected))
          .length > 0 && (
          <div className="basis-full  lg:basis-6/12 ">
            <label
              className="my-3 inline-block font-medium "
              htmlFor="select-cateogry"
            >
              Select Sub Category
            </label>
            <div className="flex gap-2 flex-wrap ">
              {subCategoryItems.map((subcategoryItem) => (
                <div
                  onClick={() => handleCategorySubItemClick(subcategoryItem)}
                  key={subcategoryItem?.label}
                  className={`flex items-center px-6 py-2 border  ${
                    subcategoryItem.selected
                      ? "bg-mainBlueColor/85 text-white"
                      : "border-mainBlueColor text-black"
                  }  gap-1 rounded-full cursor-pointer text-sm `}
                >
                  <span> {subcategoryItem?.label} </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-center" />

      <PreviewPopover
        isOpen={previewOpen}
        handlePopoverClose={() => setPreviewOpen(false)}
      >
        <ProductDetails
          product={{
            name,
            slug,
            base_price,
            more_info: moreInfoArr,
            description,
            discount,
            stock,
            imageArr: imagePreviews,
          }}
        />
      </PreviewPopover>
    </div>
  );
};

export default Add_product;
