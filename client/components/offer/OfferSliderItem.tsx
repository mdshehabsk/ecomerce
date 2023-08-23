'use client'
import Image from "next/image"
import offerOne from '@/images/offer/offer-1.jpg'
import offerTwo from '@/images/offer/offer-2.jpg'
import offerThree from '@/images/offer/offer-3.jpg'
function OfferSliderItem() {
  return (
    <div className="shadow-md rounded-lg group " >
        <div className="max-w-full overflow-hidden" >
        <Image src={offerOne} alt="no image" className="w-full rounded-t-lg group-hover:scale-105 transition"  />
        </div>
        <div className="bottom w-11/12 mx-auto py-2  ">
            <h2 className="md:text-[20px]  font-semibold group-hover:text-sky-600 " > Realme c56 6/123GB </h2>
            <p>Flash sale price taka 9,999</p>
        </div>
    </div>
  )
}

export default OfferSliderItem