

import Product from '@images/product/product-1.jpg'
import {AiOutlineStar} from 'react-icons/ai' 
import { Link } from 'react-router-dom';
const SingleProduct = () => {
  return (
    <Link to='/product-details' className="group/product">
      <div className="flex  justify-center overflow-hidden ">
        <img
          src={Product}
          alt="no image"
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