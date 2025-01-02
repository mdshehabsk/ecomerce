"use client";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 bg-[#F9F9F9] shadow-sm rounded-sm">{children}</div>
);
const menuData = [
  {
    name: { label: "SmartPhones", value: "smartphones" },
    subMenuItems: [
      { label: "Samsung", value: "samsung" },
      { label: "Infinix", value: "infinix" },
      { label: "Oppo", value: "oppo" },
      { label: "Oneplus", value: "oneplus" },
      { label: "Techno", value: "techno" },
      { label: "Nokia", value: "nokia" },
      { label: "Motorola", value: "motorola" },
      { label: "Nothing", value: "nothing" },
      { label: "Realme", value: "realme" },
      { label: "Xiaomi", value: "xiaomi" },
      { label: "Vivo", value: "vivo" },
      { label: "Iphone", value: "iphone" },
    ],
  },
  {
    name: {
      label: "Electronics & Appliances",
      value: "electronics-appliances",
    },
    subMenuItems: [
      { label: "Air Conditioner", value: "air-conditioner" },
      { label: "Television", value: "television" },
      { label: "Refrigerator & Freezer", value: "refrigerator-freezer" },
      { label: "Room Heater", value: "room-heater" },
      { label: "Air Purifier", value: "air-purifier" },
      { label: "Iron", value: "iron" },
      { label: "Geyser", value: "geyser" },
      { label: "Washing Machine", value: "washing-machine" },
      {
        label: "Home Theater & Sound System",
        value: "home-theater-sound-system",
      },
      { label: "Grinder & Blender", value: "grinder-blender" },
      { label: "Water Purifiers & Filter", value: "water-purifiers-filter" },
      { label: "Oven", value: "oven" },
      { label: "Electric Kettle", value: "electric-kettle" },
      { label: "Rice Cooker", value: "rice-cooker" },
      { label: "Air Fryer", value: "air-fryer" },
      { label: "Induction Cooker", value: "induction-cooker" },
      { label: "Gas Burner", value: "gas-burner" },
      { label: "Kitchen Hood", value: "kitchen-hood" },
      { label: "Fans", value: "fans" },
      { label: "Tools & Hardware", value: "tools-hardware" },
      { label: "IPS", value: "ips" },

      { label: "Exercise & Fitness", value: "exercise-fitness" },
    ],
  },
  {
    name: { label: "Mobile Accessories", value: "mobile-accessories" },
    subMenuItems: [
      { label: "Smart Watch", value: "smart-watch" },
      { label: "Smart Watch Accessories", value: "smart-watch-accessories" },
      { label: "True Wireless Airbuds", value: "true-wireless-airbuds" },
      { label: "Bluetooth Headphone", value: "bluetooth-headphone" },
      { label: "Wire Headphone", value: "wire-headphone" },
      { label: "Speaker", value: "speaker" },
      { label: "Power Band", value: "power-band" },
      { label: "Smart Band", value: "smart-band" },
      { label: "Smart Gadget", value: "smart-gadget" },
      { label: "Action Cameras", value: "action-cameras" },
      { label: "Gimbal", value: "gimbal" },
      { label: "Charger & Adapter", value: "charger-adapter" },
      { label: "Data Cable", value: "data-cable" },
      { label: "Memory Card", value: "memory-card" },
      { label: "Case & Cover", value: "case-cover" },
      { label: "Screen Protector", value: "screen-protector" },
      { label: "Selfie Sticks", value: "selfie-sticks" },

    ],
  },
  {
    name: { label: "Computer", value: "computer" },
    subMenuItems: [
      { label: "Laptop & Notebook", value: "laptop-notebook" },
      { label: "Tablet", value: "tablet" },
      { label: "Mini Pc", value: "mini-pc" },
    ],
  },
  {
    name: { label: "Computer Accessories", value: "computer-accessories" },
    subMenuItems: [
      { label: "Mouse & Keyboard", value: "mouse-keyboard" },
      { label: "IP Cameras", value: "ip-cameras" },
      { label: "Pendrives", value: "pendrives" },
      { label: "HDD & SSD", value: "hdd-ssd" },
      { label: "Monitor", value: "monitor" },
      { label: "Printer", value: "printer" },
      { label: "Headset", value: "headset" },
      { label: "Webcam", value: "webcam" },
      { label: "UPS", value: "ups" },
      { label: "Software & Antivirus", value: "software-antivirus" },
      { label: "Converter & Cable", value: "converter-cable" },
      { label: "Sound System", value: "sound-system" },
      { label: "Router & Networking", value: "router-networking" },
      { label: "Projectors", value: "projectors" },
      { label: "Gaming Gears", value: "gaming-gears" },

    ],
  },
  {
    name: { label: "LifeStyle", value: "lifestyle" },
    subMenuItems: [
      { label: "Men's Watches", value: "mens-watches" },
      { label: "Women's Watches", value: "womens-watches" },
      { label: "Shaver & Trimmer", value: "shaver-trimmer" },
      { label: "Hair Straighteners", value: "hair-straighteners" },
      { label: "Hair Dryers", value: "hair-dryers" },
      { label: "Men's Fragrances", value: "mens-fragrances" },
      { label: "Women's Fragrances", value: "womens-fragrances" },
      { label: "Scented Candles", value: "scented-candles" },
    ],
  },
];

const AddProduct = () => {
  const [description, setDescription] = useState("");
  const [moreInfo, setMoreInfo] = useState({ key: "", value: "" });
  const [mainInputVal,setMainInputVal] = useState({
    name:'',
    slug: '',
    base_price: 0,
    discount: 0,
    stock: 0
  })
  const [moreInfoArr, setMoreInfoArr] = useState<
    { key: string; value: string }[]
  >([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [categoryItems, setCategoryItems] = useState(
    menuData?.map((categoryItem) => ({ ...categoryItem, selected: false }))
  );
  const [subCategoryItems,setSubCategoryItems] = useState(categoryItems?.filter(categoryItem => categoryItem.selected)?.flatMap(categoryItem => categoryItem.subMenuItems?.map(categoryItem => ({...categoryItem,selected:false}))))
  const {name,slug,base_price,discount,stock} = mainInputVal
  function handleMoreInfoInput(event: React.ChangeEvent<HTMLInputElement>) {
    setMoreInfo({ ...moreInfo, [event.target.name]: event.target.value });
  }

  function handleMainInputVal (event: React.ChangeEvent<HTMLInputElement>) {
    setMainInputVal({...mainInputVal,[event.target.name]:event.target.value})
  }
  function handleAddNewInfo() {
    setMoreInfo({ key: "", value: "" });
    setMoreInfoArr((prev) => [...prev, moreInfo]);
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

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

  function handleCategorySubItemClick ( item : typeof subCategoryItems[number]) {
    const newArr = subCategoryItems?.map(subCategoryItem => {
      if(subCategoryItem.value === item.value){
        return {
          ...subCategoryItem,
          selected: ! subCategoryItem?.selected
        }
      }else {
        return subCategoryItem
      }
    })
    setSubCategoryItems(newArr)
  }
  useEffect(()=> {
    setSubCategoryItems(categoryItems?.filter(categoryItem => categoryItem.selected)?.flatMap(categoryItem => categoryItem.subMenuItems?.map(categoryItem => ({...categoryItem,selected:false}))))
  },[categoryItems])

  // slug 
  useEffect(()=> {
    if(mainInputVal.name){
      const slugVal = name.toLowerCase().split(' ').join("-")
      setMainInputVal({...mainInputVal,slug:slugVal})
    }
  },[name])
  return (
    <div className="py-8">
      <div className="flex items-center justify-between sticky top-0 left-0 right-0 bg-white py-2 ">
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <div className="flex gap-4">
          <button className="text-sm px-6 py-3 bg-transparent border-mainBlueColor hover:bg-mainBlueColor hover:text-white border rounded-lg transition ">
            Save Draft
          </button>
          <button className="text-sm px-6 py-3 bg-mainBlueColor text-white  rounded-lg">
            Publish
          </button>
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
        </Box>
        <Box>
          <label htmlFor="stock" className="block text-sm   mb-2">
            Stock
          </label>
          <div className="flex justify-between bg-[#EEEEEE]">
            <button className="text-xl bg-white text-black px-4" onClick={()=> setMainInputVal({...mainInputVal,stock: mainInputVal.stock - 1})} >-</button>
            <input
              type="number"
              id="stock"
              name="stock"
              value={mainInputVal.stock}
              onChange={handleMainInputVal}
              className="w-full px-4 py-2  rounded-sm outline-none  bg-transparent border-none  text-black placeholder:text-black/35  placeholder:text-xs custom-number-field text-center"
              placeholder="0"
            />
            <button className="text-xl bg-white text-black px-4 " onClick={()=> setMainInputVal({...mainInputVal,stock: mainInputVal.stock + 1})} >+</button>
          </div>
        </Box>
      </div>
      <div className="more-information my-2">
        <h3 className=" text-base font-medium text-black">More Information</h3>
        {moreInfoArr?.map((info, ind) => (
          <div
            key={ind}
            className={`text-[14px] flex gap-1 py-2 ${
              ind !== moreInfoArr.length - 1 ? "border-b border-black/50" : ""
            }`}
          >
            <span className="font-medium">{info.key}:</span>
            <span className="font-light">{info.value}</span>
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
          <button
            className=" py-2 w-full bg-mainBlueColor text-white"
            onClick={handleAddNewInfo}
          >
            Add
          </button>
        </div>
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
      </div>
      <div className="w-full my-2  ">
        <label className="text-sm my-2 block ">Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className="w-full  h-[300px] "
        />
      </div>
      <div className="my-[100px] flex flex-wrap justify-between ">
        <div className=" basis-full lg:basis-6/12">
          <label className="my-3 inline-block font-medium" >
            Select Category
          </label>
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
     {
      (categoryItems?.filter(categoryItem => categoryItem.selected)).length > 0   && <div className="basis-full  lg:basis-6/12 " >
      <label className="my-3 inline-block font-medium " htmlFor="select-cateogry">
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
     }
      </div>
    </div>
  );
};

export default AddProduct;
