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
    <h3 className="text-lg font-medium" >Techno camon 20 Cksrns 8/18GB</h3>
    <div className="flex items-center " >
    <span className="text-lg text-sky-600" >৳</span>
    <p className="text-lg text-sky-600 font-semibold" >20,000</p>
    <del className="ml-3" >৳20,000</del>
    </div>
    <div className="my-3 flex items-center gap-1" >
      <div className="flex" >
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      </div>
      <div>
        <p className="text-sm" >(4)</p>
      </div>
    </div>
    </>
  )
}

export default SingleProduct