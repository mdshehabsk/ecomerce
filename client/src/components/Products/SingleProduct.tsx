
import Image from 'next/image';
import Product from '@/images/product/product-1.jpg'
import Link from 'next/link';
import {AiOutlineStar} from 'react-icons/ai' 

const SingleProduct = () => {
  return (
    <Link href='/product-details/4' className="group/product">
      <div className="flex  justify-center overflow-hidden ">
        <Image
          src={Product}
          alt="no Image"
          className="group-hover/product:scale-105 transition  "
        />
      </div>
      <h3 className="text-sm md:text-base font-medium group-hover/product:text-mainBlueColor ">
        Techno camon 20 Cksrns 8/18GB
      </h3>
      <div className="flex items-center ">
        <span className="text-sm md:text-base text-mainBlueColor">৳</span>
        <p className="text-sm md:text-base text-mainBlueColor font-semibold">20,000</p>
        <del className="ml-3 text-sm ">৳20,000</del>
      </div>
      <div className="my-3 flex items-center gap-1">
        <div className="flex">
          <AiOutlineStar className="text-sm" />
          <AiOutlineStar className="text-sm" />
          <AiOutlineStar className="text-sm" />
          <AiOutlineStar className="text-sm" />
        </div>
        <div>
          <p className="text-xs">(4)</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct