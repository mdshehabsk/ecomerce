'use client'
import Image from "next/image";
import Link from "next/link";
import { useGetCartsQuery ,useUpdateCartItemMutation,useDeleteCartItemMutation } from "@/toolkit/api/cartApi";
import { useState } from "react";
const Cart = () => {
  const {data} = useGetCartsQuery(undefined)
  const [updateMutate] = useUpdateCartItemMutation()
  const [deleteMutate] = useDeleteCartItemMutation()
  const [checkecCartItem,setCheckedCartItem] = useState<Record<string,boolean>>({})

  const handleCartItemChange = (id: string) => {
    setCheckedCartItem((prevState) => ({
      ...prevState, 
      [id]: !prevState[id], 
    }));
  };

  const selectedCartItems = data?.data?.items?.filter(item => checkecCartItem[item?._id])
  const selectedTotalItemsLength = selectedCartItems?.reduce((total,item)=> total + item?.quantity, 0)
  const selectedTotalItemsPrice = selectedCartItems?.reduce((total,item)=> total + (item?.quantity * (item?.product?.base_price / 100) * (100 - item?.product?.discount)),0)
  const dellivaryPlusTotalPrice = ((selectedTotalItemsLength || 0) * 90) + (selectedTotalItemsPrice || 0)

  const handleUpdateCartItem = (itemId: string,quantity : number) => {
    if(quantity <= 0) {
      return
    }
    updateMutate({quantity,itemId})
  }

  const handleDeleteCartItem = (itemId: string) => {
    deleteMutate({itemId})
  }


  return (
    <div className="bg-gray-50 py-10 ">
      <div className="  mx-auto h-[90vh] ">
        <div className="flex flex-col lg:flex-row lg:w-[85%] mx-auto gap-10  ">
          <div className="lg:basis-8/12 basis-full  bg-white shadow relative bottom-0 left-0 right-0   ">
            <h2 className="text-xl font-medium px-4 pt-2 ">My Cart</h2>
            <div className="w-full h-px bg-black/20 my-4 "></div>
          {
            data && data?.data && data?.data?.items.length < 1 && <div className="flex items-center justify-center" > <h3 className="text-xl text-red-500" > No Cart Avaialbe </h3> </div>
          }
            {
              data?.data?.items?.map((item,key) =>   <div key={key} className="flex py-2 ">
                <input type="checkbox" className="self-start mx-2" checked={checkecCartItem[item?._id]} onChange={() => handleCartItemChange(item?._id)} />
              <div className="flex flex-col items-center gap-2 px-4 ">
                <Image
                  src={item.product.imageArr[0]}
                  alt="no image"
                  width={120}
                  height={100}
                  className="border border-black/30"
                />
                <div className="flex">
                  <button className="px-4 py-1 border border-black/15 " onClick={()=> handleUpdateCartItem(item?._id, item?.quantity - 1)} >
                    -
                  </button>
                  <p className="px-4 py-1 border border-black/15"> {item?.quantity} </p>
                  <button className="px-4 py-1 border border-black/15" onClick={()=> handleUpdateCartItem(item?._id, item?.quantity + 1)} >
                    +
                  </button>
                </div>
              </div>
              <div>
                <Link href={`/product-details/${item?.product?.slug}`} className="text-lg font-medium ">
                   {item?.product?.name}
                </Link>
                <div className="mt-2 flex items-center gap-2 py-2  ">
                  <div>
                    <h3 className="font-semibold text-mainBlueColor text-xl md:text-2xl ">
                       ৳ {(item?.product?.base_price / 100) * (100 - item?.product?.discount)}
                    </h3>
                  </div>
                  <div>
                    <del className="md:text-lg font-normal  "> {item?.product?.base_price} </del>
                  </div>
                  <div className=" p-2 px-3 bg-slate-100 rounded ">
                    <p className=" text-sm md:text-base"> -{item?.product?.discount}%</p>
                  </div>
                </div>
                <button className="text-sm bg-red-500 text-white px-4 py-2"  onClick={()=> handleDeleteCartItem(item?._id)} >Remove</button>
              </div>
            </div> )
            }
          </div>
          <div className="lg:basis-4/12 basis-full bg-white shadow ">
          <h2 className="p-2  text-lg font-medium  " > Cart </h2>
          <div className="w-full h-px bg-black/30 "></div>
          <div className="flex p-2 justify-between">
            <span className=" text-black/70 " >Total items ({selectedTotalItemsLength}) </span>
            <p className=" font-medium " >৳ {selectedTotalItemsPrice} </p>
          </div>
          <div className="flex p-2 justify-between">
            <span className=" text-black/70 " >Shiping</span>
            <p className=" font-medium " >৳ 90 x {selectedTotalItemsLength} = {(selectedTotalItemsLength || 0) * 90} </p>
          </div>
          <div className="w-full h-px bg-black/30 "></div>
          <div className="flex p-2 justify-between">
            <span className=" font-semibold " >Total</span>
            <p className=" text-mainBlueColor text-lg font-medium " >৳ {dellivaryPlusTotalPrice} </p>
          </div>
          <button className="w-full py-2 bg-orangeColor text-white font-medium " >Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
