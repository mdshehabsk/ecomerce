"use client";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 bg-[#F9F9F9] shadow-sm rounded-sm">{children}</div>
);

const AddProduct = () => {
  const [value, setValue] = useState('');
  return (
    <>
    <h1 className='text-2xl font-semibold' >Add New Product</h1>
      <div className=" grid grid-cols-1 gap-2 mb-2">
        <div className="flex"></div>
        <Box>
          <label htmlFor="product-name" className="block text-sm   mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            placeholder="Enter the product name"
            className="w-full px-4 py-2  rounded outline-none  bg-[#EEEEEE] text-black placeholder:text-black/35 placeholder:text-xs "
          />
        </Box>
        <Box>
          <label htmlFor="product-slug" className="block text-sm   mb-2">
            Product Slug
          </label>
          <input
            type="text"
            id="product-slug"
            placeholder="Slug"
            className="w-full px-4 py-2  rounded-sm outline-none  bg-[#EEEEEE] text-black placeholder:text-black/35  placeholder:text-xs "
          />
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
            id="base-price"
            placeholder="Regular Price"
            className="w-full px-4 py-2  rounded-sm outline-none bg-[#EEEEEE] text-black placeholder:text-black/35  placeholder:text-xs "
          />
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
              placeholder="Discount"
              className="w-full px-4 py-2  rounded-sm outline-none  bg-transparent border-none  text-black placeholder:text-black/35  placeholder:text-xs "
            />
            <span className="inline-block px-2 text-xs ">%</span>
          </div>
        </Box>
        <Box>
          <label htmlFor="stock" className="block text-sm   mb-2">
            Stock
          </label>
          <div className="flex justify-between bg-[#EEEEEE]">
            <button className="text-xl bg-white text-black px-4 ">-</button>
            <input
              type="number"
              id="stock"
              className="w-full px-4 py-2  rounded-sm outline-none  bg-transparent border-none  text-black placeholder:text-black/35  placeholder:text-xs custom-number-field "
              placeholder="0"
            />
            <button className="text-xl bg-white text-black px-4 ">+</button>
          </div>
        </Box>
      </div>
      <div className="more-information">
        <h3 className='text-lg font-semibold text-black' >More Information</h3>
        <hr/>
        <div className="flex gap-3 w-full p-2 bg-[#EEEEEE]">
          <input type="text" placeholder='Key'  className='border-none outline-none grow p-2 '  />
          <input type="text" placeholder='Value' className='border-none outline-none grow p-2 '  />
        </div>
      </div>
       <div className='w-full my-2  ' >
        <label className='text-sm my-2 block ' >Description</label>
       <ReactQuill theme="snow" value={value} onChange={setValue} className='w-full  h-[300px] '  />
       </div>
    </>
  );
};

export default AddProduct;
