
function LogoSliderItem({ img, name }: { img: any; name: string }) {
  return (
    <div class="item w-full ">
      <a href="#">
        <img
          src={img}
          alt="no Image"
          class=" mx-auto w-full max-w-[70px] max-h-[70px] lg:w-full lg:max-w-[100px] lg:max-h-[100px] "
        />
        <p class="mt-1 text-center uppercase text-sm md:text-md md:text-black font-medium lg:font-bold">
          {name}
        </p>
      </a>
    </div>
  );
}

export default LogoSliderItem;
