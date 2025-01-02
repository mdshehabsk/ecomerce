import bannerOne from "@/images/banner-1.jpg";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const products = [
  {
    id: 1,
    image: "/images/galaxy-m35.jpg", // Replace with your actual image path
    name: "Samsung Galaxy M35",
    category: ["Electronics > Phones"],
    price: "$299",
    stock: 15,
    rating: "4/5",
    status: "Publish",
  },
  {
    id: 2,
    image: "/images/iphone-15.jpg",
    name: "iPhone 15",
    category: ["Electronics > Phones"],
    price: "$999",
    stock: 10,
    rating: "4.8/5",
    status: "Publish",
  },
  {
    id: 3,
    image: "/images/macbook-air.jpg",
    name: "MacBook Air M2",
    category: ["Electronics > Laptops"],
    price: "$1,199",
    stock: 5,
    rating: "4.7/5",
    status: "Draft",
  },
  {
    id: 4,
    image: "/images/sony-camera.jpg",
    name: "Sony Alpha A7 III",
    category: ["Electronics > Cameras"],
    price: "$2,099",
    stock: 3,
    rating: "4.9/5",
    status: "Publish",
  },
  {
    id: 5,
    image: "/images/washing-machine.jpg",
    name: "Samsung Washing Machine",
    category: ["Home Appliances"],
    price: "$699",
    stock: 8,
    rating: "4.5/5",
    status: "Draft",
  },
  {
    id: 6,
    image: "/images/airpods.jpg",
    name: "Apple AirPods Pro",
    category: ["Electronics > Accessories"],
    price: "$249",
    stock: 20,
    rating: "4.6/5",
    status: "Publish",
  },
  {
    id: 7,
    image: "/images/smartwatch.jpg",
    name: "Amazfit GTR 4",
    category: ["Electronics > Wearables"],
    price: "$179",
    stock: 12,
    rating: "4.3/5",
    status: "Publish",
  },
  {
    id: 8,
    image: "/images/tv.jpg",
    name: "LG 55 Inch OLED TV",
    category: ["Electronics > Televisions"],
    price: "$1,499",
    stock: 7,
    rating: "4.8/5",
    status: "Draft",
  },
  {
    id: 9,
    image: "/images/microwave.jpg",
    name: "Panasonic Microwave Oven",
    category: ["Home Appliances"],
    price: "$199",
    stock: 25,
    rating: "4.4/5",
    status: "Publish",
  },
  {
    id: 10,
    image: "/images/dslr.jpg",
    name: "Canon EOS Rebel T7",
    category: ["Electronics > Cameras", "Home Appliances"],
    price: "$499",
    stock: 6,
    rating: "4.6/5",
    status: "Publish",
  },
];

const ManageProduct = () => {
  return (
    <>
      <h1 className="text-2xl font-medium my-2 ">Manage Product</h1>

      <div className="w-full  ">
      <div className="w-full overflow-x-auto">
  <table className="w-full overflow-auto">
    <thead className="bg-gray-200">
      <tr className="border-y">
        <th className="my-table-th">
          <input type="checkbox" />
        </th>
        <th className="my-table-th">Product</th>
        <th className="my-table-th">Category</th>
        <th className="my-table-th">Price</th>
        <th className="my-table-th">Stock</th>
        <th className="my-table-th">Rating</th>
        <th className="my-table-th">Status</th>
        <th className="my-table-th">Action</th>
      </tr>
    </thead>
    <tbody>
      {products?.map((product) => (
        <tr key={product.id} className="border-y">
          <td className="my-table-td">
            <input type="checkbox" />
          </td>
          <td className="my-table-td min-w-min">
            <div className="inline-flex flex-wrap items-center gap-1">
              <Image
                className="w-[50px] h-[50px] object-cover"
                src={bannerOne}
                alt="no image"
              />
              <span className="font-medium"> {product.name} </span>
            </div>
          </td>
          <td className="my-table-td">
            {product?.category?.map((item, ind) => (
              <div key={ind}> {item} </div>
            ))}
          </td>
          <td className="my-table-td"> {product.price} </td>
          <td className="my-table-td"> {product.stock} </td>
          <td className="my-table-td"> {product.rating} </td>
          <td className="my-table-td">
            <span className="border border-green-500 text-green-500 bg-green-100 text-sm inline-block px-4 py-1 rounded-full">
              {product.status}
            </span>
          </td>
          <td className="my-table-td">
            <div className="flex gap-1">
              <div className="p-2 text-white bg-green-500 cursor-pointer">
                <FiEdit2 className="text-lg" />
              </div>
              <div className="p-2 text-white bg-red-500 cursor-pointer">
                <MdDelete />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={8} className="border" >
          <div className="flex justify-center items-center gap-4 w-full px-4 py-2 border-t">
            <button className="text-sm border border-black/30 px-6 py-2 rounded-full">
              Previous
            </button>
            <div>1/10</div>
            <button className="text-sm border border-black/30 px-6 py-2 rounded-full">
              Next
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>

      </div>
    </>
  );
};

export default ManageProduct;
