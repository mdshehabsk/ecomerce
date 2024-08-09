import React from "react";

import { AiOutlineRight } from "react-icons/ai";
interface PropsType {
  children?: React.ReactElement | React.ReactElement[];
  Image: string;
  iconNone?: boolean;
  name: string;
  submenuClick?: () => void;
}
const SidebarListItem = ({
  children,
  Image,
  iconNone,
  submenuClick,
  name,
}: PropsType) => {
  return (
    <>
      <li className="flex flex-wrap items-center justify-between group/li my-4 first-of-type:mt-0 gap-2 relative ">
        <div className="flex items-center  gap-4">
          <div className="w-8 h-8 ">
            <Image src={Image} alt="no Image" />
          </div>
          <a className=" cursor-pointer group-hover/li:text-sky-500 grow font-medium">
            {name}
          </a>
        </div>
        {!iconNone && (
          <AiOutlineRight className="cursor-pointer  " onClick={submenuClick} />
        )}
        {children}
      </li>
    </>
  );
};

export default SidebarListItem;
