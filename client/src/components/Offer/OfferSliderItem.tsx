import Image from 'next/image';

import offerOne from '@/images/offer/offer-1.jpg'
function OfferSliderItem() {
  return (
    <div className="shadow-md rounded-lg group ">
      <div className="max-w-full overflow-hidden">
        <Image
          src={offerOne}
          alt="no Image"
          className="w-full rounded-t-lg group-hover:scale-105 transition"
        />
      </div>
      <div className="bottom w-11/12 mx-auto py-2  ">
        <h2 className="md:text-[20px]  font-semibold group-hover:text-mainBlueColor ">

          Realme c56 6/123GB
        </h2>
        <p>Flash sale price taka 9,999</p>
      </div>
    </div>
  );
}

export default OfferSliderItem