import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useAppDispatch } from "@/toolkit/hook";
import { sidebarClose } from "@/toolkit/slice/SidebarSlice";
interface PropsType {
  children?: React.ReactElement | React.ReactElement[];
  img: StaticImageData;
  iconNone?: boolean;
  name: {
    label: string,
    value: string
  };
  submenuClick?: () => void;
}
const SidebarListItem = ({
  children,
  img,
  iconNone,
  submenuClick,
  name,
}: PropsType) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div  className="flex flex-wrap items-center justify-between group/li my-4 first-of-type:mt-0 gap-2 relative ">
        <div className="flex items-center  gap-4">
          <div className="w-8 h-8 ">
            <Image src={img} alt="no Image" />
          </div>
          <Link href={`/product/${name.value}`} onClick={()=> dispatch(sidebarClose())} className=" cursor-pointer group-hover/li:text-sky-500 grow font-medium">
            {name.label}
          </Link>
        </div>
        {!iconNone && (
          <AiOutlineRight className="cursor-pointer  " onClick={submenuClick} />
        )}
        {children}
      </div>
    </>
  );
};

export default SidebarListItem;
