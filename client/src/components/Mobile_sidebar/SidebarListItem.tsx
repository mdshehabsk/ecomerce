import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
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
  return (
    <>
      <Link href={`/product/${name.value}`} className="flex flex-wrap items-center justify-between group/li my-4 first-of-type:mt-0 gap-2 relative ">
        <div className="flex items-center  gap-4">
          <div className="w-8 h-8 ">
            <Image src={img} alt="no Image" />
          </div>
          <a className=" cursor-pointer group-hover/li:text-sky-500 grow font-medium">
            {name.label}
          </a>
        </div>
        {!iconNone && (
          <AiOutlineRight className="cursor-pointer  " onClick={submenuClick} />
        )}
        {children}
      </Link>
    </>
  );
};

export default SidebarListItem;
