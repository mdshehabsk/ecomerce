'use client'
import React from "react";
const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 bg-white shadow-sm rounded-sm">{children}</div>
);

const AddProduct = () => {
  return (
    <>

       <div className=" grid grid-cols-1 gap-2 mb-2">
       <Box>
          <label
            htmlFor="product-name"
            className="block text-sm  font-semibold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-sm outline-none focus:border-mainBlueColor "
          />
        </Box>
        <Box>
          <label
            htmlFor="product-url"
            className="block text-sm  font-semibold mb-2"
          >
            Product URL
          </label>
          <input
            type="text"
            id="product-url"
            placeholder="Product URL"
            className="w-full px-4 py-2 border rounded-sm outline-none focus:border-mainBlueColor "
          />
        </Box>
       </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 items-center">
        <Box>
          <label
            htmlFor="buying-price"
            className="block text-sm  font-semibold mb-2"
          >
            Buying Price
          </label>
          <input
            min={0}
            type="number"
            id="buying-price"
            placeholder="Product Buying Price"
            className="w-full px-4 py-2 border rounded-sm outline-none focus:border-mainBlueColor "
          />
        </Box>
        <Box>
          <label
            htmlFor="regular-price"
            className="block text-sm  font-semibold mb-2"
          >
            Regular Price
          </label>
          <input
            min={0}
            type="number"
            id="regular-price"
            placeholder="Product Regular Price"
            className="w-full px-4 py-2 border rounded-sm outline-none focus:border-mainBlueColor "
          />
        </Box>
        <Box>
          <label
            htmlFor="offer-price"
            className="block text-sm  font-semibold mb-2"
          >
            Offer Price
          </label>
          <div className="flex">
            <button disabled className="px-2 py-1 border-y border-l text-orangeColor" >-20%</button>
          <input
            min={0}
            type="number"
            id="offer-price"
            placeholder="Product Offer Price"
            className="w-full px-4 py-2 border rounded-sm outline-none focus:border-mainBlueColor "
          />
          </div>
        </Box>
      </div>
      
    </>
  );
};

export default AddProduct;
