'use client'

import Image from "next/image"

import Product from '@/images/product/product-1.jpg'
import {AiOutlineStar} from 'react-icons/ai' 
const SingleProduct = () => {
  return (
    <>
    <div className="flex  justify-center " >
        <Image src={Product} alt="no image"   />
    </div>
    <h3 className="text-sm font-medium" >Techno camon 20 Cksrns 8/18GB</h3>
    <div className="flex items-center " >
    <span className="text-sm text-sky-600" >৳</span>
    <p className="text-sm text-sky-600 font-semibold" >20,000</p>
    <del className="ml-3 text-sm " >৳20,000</del>
    </div>
    <div className="my-3 flex items-center gap-1" >
      <div className="flex" >
      <AiOutlineStar className="text-sm" />
      <AiOutlineStar className="text-sm" />
      <AiOutlineStar className="text-sm" />
      <AiOutlineStar className="text-sm" />
      </div>
      <div>
        <p className="text-xs" >(4)</p>
      </div>
    </div>
    </>
  )
}

export default SingleProduct