import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import productOne from "@/images/product/product-1.jpg";
const SingleReview = () => {
  return (
    <div className="p-3 border-b border-zinc-300 ">
      <div className="flex gap-1   ">
        <div className="w-[60px] rounded-full   ">
          <Image src={productOne} alt="no image" />
        </div>
        <div className="flex flex-col gap-1 grow">
          <div className="flex  items-center justify-between">
            <h3 className="text-lg font-normal">Shehab Uddin</h3>
            <span className="text-xs font-light text-black/60">
              {" "}
              13th Aug 2024{" "}
            </span>
          </div>
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fuga
            nostrum tenetur, pariatur hic totam delectus repellendus iste id
            aut!
          </p>
        </div>
      </div>
      <div className="flex my-2 gap-1 ">
        <div className="w-[100px] h-[100px] border  border-black/10 ">
          <Image src={productOne} alt="no image" />
        </div>
        <div className="w-[100px] h-[100px] border  border-black/10 ">
          <Image src={productOne} alt="no image" />
        </div>
        <div className="w-[100px] h-[100px] border  border-black/10 ">
          <Image src={productOne} alt="no image" />
        </div>
        <div className="w-[100px] h-[100px] border  border-black/10 ">
          <Image src={productOne} alt="no image" />
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
