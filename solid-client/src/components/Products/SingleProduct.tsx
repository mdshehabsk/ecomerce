

import Product from '~/images/product/product-1.jpg'

import {AiOutlineStar} from 'solid-icons/ai' 

const SingleProduct = () => {
  return (
    <a href='/product-details' class="group/product">
      <div class="flex  justify-center overflow-hidden ">
        <img
          src={Product}
          alt="no Image"
          class="group-hover/product:scale-105 transition  "
        />
      </div>
      <h3 class="text-sm md:text-base font-medium group-hover/product:text-mainBlueColor ">
        Techno camon 20 Cksrns 8/18GB
      </h3>
      <div class="flex items-center ">
        <span class="text-sm md:text-base text-mainBlueColor">৳</span>
        <p class="text-sm md:text-base text-mainBlueColor font-semibold">20,000</p>
        <del class="ml-3 text-sm ">৳20,000</del>
      </div>
      <div class="my-3 flex items-center gap-1">
        <div class="flex">
          <AiOutlineStar class="text-sm" />
          <AiOutlineStar class="text-sm" />
          <AiOutlineStar class="text-sm" />
          <AiOutlineStar class="text-sm" />
        </div>
        <div>
          <p class="text-xs">(4)</p>
        </div>
      </div>
    </a>
  );
}

export default SingleProduct