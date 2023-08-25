import Link from "next/link";
import React from "react";
const allCategories = [
  {
    name: "Smartphone",
    submenu: [
      "Samsung",
      "Infinis",
      "Oppo",
      "Oneplus",
      "Techo",
      "Nokia",
      "Motorola",
      "Nothing",
      "Realme",
      "Xiaomi",
      "Vivo",
      "Iphone",
    ],
  },
  {
    name: "Electronics & Appliances",
    submenu: [
      "Air Conditioner",
      "Television",
      "Refrigerator & freezer",
      "Room Heater",
      "Air purifier",
      "Iron",
      "Geyser",
      "Washing Machine",
      "Home Theater & Sound System",
      "Grinder & Blender",
      "Water Purifiers & Filter",
      "Oven",
      "Electric Kettle",
      "Rice Cooker",
      "Air Fryer",
      "Induction Cooker",
      "Gas Burner",
      "Kitchen Hood",
      "Fans",
      "Tools & Hardware",
      "IPS",
      "Others",
      "Excercise & Fitness",
    ],
  },
  {
    name: "Mobile Accessories",
    submenu: [
      "Smart Watch",
      "Smart Watch Accessories",
      "True Wireless Airbuds",
      "Bluetooth Headphone",
      "Wire Headphone",
      "Speaker",
      "Power Band",
      "Smart Band",
      "Smart Gadget",
      "Actions Cameras",
      "Gimbal",
      "Charger & Adapter",
      "Data Cable",
      "Mamory Card",
      "Cause & Cover",
      "Screen Protector",
      "Selfi Sticks",
      "Others",
    ],
  },
  {
    name: "Computer",
    submenu: ["Laptop & Notebook", "Tablet", "Mini Pc"],
  },
  {
    name: "Computer Accessories",
    submenu: [
      "Mouse & Keyboard",
      "IP Cameras",
      "Pendrives",
      "HDD & SSD",
      "Monitor",
      "Printer",
      "Headset",
      "Webcam",
      "UPS",
      "Software & Antivirus",
      "Converter & Cable",
      "Sound System",
      "Router & Networking",
      "Projectors",
      "Gaming Gears",
      "Others",
    ],
  },
  {
    name: "Lifestyle",
    submenu: [
      "Mens Watches",
      "Womens Watches",
      "Shaver & Trimmer",
      "Hair Straightnairs",
      "Hair Dryers",
      "Mens Fragrences",
      "Womens Fragrences",
      "Scented Candles",
    ],
  },
];
const Brand_directory = () => {
  return (
    <section className="my-[40px]">
      <div className="my_container mx-auto">
        <h2 className="font-bold text-md lg:text-xl my-2">
          Pickaboo: Your Trusted Partner for Hassle-Free Online Shopping
        </h2>
        <div className="w-full h-[1px] bg-slate-300 my-4"></div>
        <div>
          {allCategories.map((elem, i) => (
            <div key={i} className="flex gap-2 my-1 items-center flex-wrap">
              <p className="text-[12px] font-semibold uppercase  ">
                {elem.name} :{" "}
              </p>
              {elem.submenu.map((elem, i) => (
                <Link
                  key={i}
                  className=" hover:text-sky-600 transition duration-500 text-[12px] font-medium text-black opacity-80 capitalize "
                  href={elem}
                >
                  {elem} {"|"}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand_directory;
