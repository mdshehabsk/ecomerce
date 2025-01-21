import Image from "next/image";
import product from "@/images/product/product-1.jpg";
const Cart = () => {
  return (
    <div className="bg-gray-50 py-10 ">
      <div className="  mx-auto h-[90vh] ">
        <div className="flex flex-col lg:flex-row lg:w-[85%] mx-auto gap-10  ">
          <div className="lg:basis-8/12 basis-full  bg-white shadow relative bottom-0 left-0 right-0   ">
            <h2 className="text-xl font-medium px-4 pt-2 ">My Cart</h2>
            <div className="w-full h-px bg-black/20 my-4 "></div>
            <div className="flex py-2 ">
                <input type="checkbox" className="self-start mx-2" />
              <div className="flex flex-col items-center gap-2 px-4 ">
                <Image
                  src={product}
                  alt="no image"
                  width={120}
                  height={100}
                  className="border border-black/30"
                />
                <div className="flex">
                  <button className="px-4 py-1 border border-black/15   ">
                    -
                  </button>
                  <p className="px-4 py-1 border border-black/15">1</p>
                  <button className="px-4 py-1 border border-black/15">
                    +
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium ">
                  Hisense 566L Side by Side Glass Door Refrigerator (RS67W4NV)
                </h3>
                <div className="mt-2 flex items-center gap-2 py-2  ">
                  <div>
                    <h3 className="font-semibold text-mainBlueColor text-xl md:text-2xl ">
                      ৳ 20000
                    </h3>
                  </div>
                  <div>
                    <del className="md:text-lg font-normal  ">20,000</del>
                  </div>
                  <div className=" p-2 px-3 bg-slate-100 rounded ">
                    <p className=" text-sm md:text-base"> -10%</p>
                  </div>
                </div>
                <button className="text-sm bg-red-500 text-white px-4 py-2" >Remove</button>
              </div>
            </div>

          </div>
          <div className="lg:basis-4/12 basis-full bg-white shadow ">
          <h2 className="p-2  text-lg font-medium  " > Cart </h2>
          <div className="w-full h-px bg-black/30 "></div>
          <div className="flex p-2 justify-between">
            <span className=" text-black/70 " >Total items (5) </span>
            <p className=" font-medium " >৳ 93,990</p>
          </div>
          <div className="flex p-2 justify-between">
            <span className=" text-black/70 " >Shiping</span>
            <p className=" font-medium " >৳ 90</p>
          </div>
          <div className="w-full h-px bg-black/30 "></div>
          <div className="flex p-2 justify-between">
            <span className=" font-semibold " >Total</span>
            <p className=" text-mainBlueColor text-lg font-medium " >৳ 90200</p>
          </div>
          <button className="w-full py-2 bg-orangeColor text-white font-medium " >Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
