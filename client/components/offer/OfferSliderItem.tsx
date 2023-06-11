'use client'
import Image from "next/image"
import offerOne from '@/images/offer/offer-1.jpg'
import offerTwo from '@/images/offer/offer-2.jpg'
import offerThree from '@/images/offer/offer-3.jpg'
function OfferSliderItem() {
  return (
    <div className="shadow-md rounded-lg  " >
        <Image src={offerOne} alt="no image" className="w-full rounded-t-lg  "  />
        <div className="bottom w-11/12 mx-auto py-2  ">
            <h2 className="md:text-[20px]  font-semibold" > Realme c56 6/123GB </h2>
            <p>Flash sale price taka 9,999</p>
        </div>
    </div>
  )
}

export default OfferSliderItem