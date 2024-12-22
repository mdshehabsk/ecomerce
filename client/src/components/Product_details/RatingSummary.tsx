import { IoMdStar } from "react-icons/io";

const RatingSummary = () => {
  return (
    <div className="bg-zinc-50 px-2 py-4 md:px-0 md:py-0 md:bg-transparent ">
      <div className="flex items-center justify-between px-2 ">
        <h2 className="text-lg font-medium">Ratings & Review</h2>
        <button className="px-2 py-1 bg-orangeColor border-none outline-none text-white text-sm rounded font-medium">
          Rate Product
        </button>
      </div>
      <div className="flex gap-4 p-3">
      <div className="relative flex flex-col items-center gap-1 px-4 after:content-[''] after:absolute after:h-full after:w-[2px] after:bg-zinc-100 after:top-0 after:right-0">
  <div>
    <span className="text-xl font-medium">5</span>/
    <span className="text-sm">5</span>
  </div>
  <div className="flex">
    <IoMdStar className="text-orangeColor text-sm " />
    <IoMdStar className="text-orangeColor text-sm " />
    <IoMdStar className="text-orangeColor text-sm " />
    <IoMdStar className="text-orangeColor text-sm " />
    <IoMdStar className="text-orangeColor text-sm " />
  </div>
  <div>
    <p className="text-sm">100% Ratings</p>
  </div>
</div>

       <div className="flex flex-col" >
       <div className="flex items-center gap-1 " >
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <div className="h-[6px] bg-zinc-100 w-[150px] rounded " >
            <div className="w-1/3 h-full bg-orangeColor " ></div>
          </div>
          <span className="text-xs font-medium " >
            30
          </span>
        </div>
        <div className="flex items-center gap-1 " >
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <div className="h-[6px] bg-zinc-100 w-[150px] rounded " >
            <div className="w-1/3 h-full bg-orangeColor " ></div>
          </div>
          <span className="text-xs font-medium " >
            30
          </span>
        </div>
        <div className="flex items-center gap-1 " >
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <div className="h-[6px] bg-zinc-100 w-[150px] rounded " >
            <div className="w-1/3 h-full bg-orangeColor " ></div>
          </div>
          <span className="text-xs font-medium " >
            30
          </span>
        </div>
        <div className="flex items-center gap-1 " >
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <div className="h-[6px] bg-zinc-100 w-[150px] rounded " >
            <div className="w-1/3 h-full bg-orangeColor " ></div>
          </div>
          <span className="text-xs font-medium " >
            30
          </span>
        </div>
        <div className="flex items-center gap-1 " >
          <div className="flex">
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
            <IoMdStar className="text-orangeColor text-sm " />
          </div>
          <div className="h-[6px] bg-zinc-100 w-[150px] rounded " >
            <div className="w-1/3 h-full bg-orangeColor " ></div>
          </div>
          <span className="text-xs font-medium " >
            30
          </span>
        </div>
       </div>
      </div>
    </div>
  );
};

export default RatingSummary;
