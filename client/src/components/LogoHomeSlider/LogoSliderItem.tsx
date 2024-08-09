import Link  from 'next/link';
import Image from 'next/image';
function LogoSliderItem({ img, name }: { img: any; name: string }) {
  return (
    <div className="item w-full ">
      <Link href="#">
        <Image
          src={img}
          alt="no Image"
          className=" mx-auto w-full max-w-[70px] max-h-[70px] lg:w-full lg:max-w-[100px] lg:max-h-[100px] "
        />
        <p className="mt-1 text-center uppercase text-sm md:text-md md:text-black font-medium lg:font-bold">
          {name}
        </p>
      </Link>
    </div>
  );
}

export default LogoSliderItem;
