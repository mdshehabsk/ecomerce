

import Oven from '~/images/slider/oven-102.jpg'
import {AiOutlineStar} from 'solid-icons/ai' 
const Main_product_item = () => {
  return (
    <>
   <div class='border border-gray-100 p-2  hover:shadow-lg ' >
   <div class="flex justify-center  " >
        <img src={Oven} alt="no Image"  />
    </div>
    <h3 class="text-sm font-medium" >Techno camon 20 Cksrns 8/18GB</h3>
    <div class="flex items-center " >
    <span class="text-sm text-mainBlueColor" >৳</span>
    <p class="text-sm text-mainBlueColor font-semibold" >20,000</p>
    <del class="ml-3 text-sm" >৳20,000</del>
    </div>
    <div class=" flex items-center gap-1" >
      <div class="flex" >
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      </div>
      <div>
        <p class="text-sm" >(4)</p>
      </div>
    </div>
   </div>
    </>
  )
}

export default Main_product_item