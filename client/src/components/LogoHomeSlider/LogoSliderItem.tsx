import { Link } from "react-router-dom";

function LogoSliderItem({ image, name }: { image: string; name: string }) {
  return (
    <div className="item w-full ">
      <Link to="#">
        <img
          src={image}
          alt="no image"
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
