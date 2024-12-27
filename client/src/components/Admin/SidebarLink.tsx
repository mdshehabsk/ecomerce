"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

interface ISidebarLink {
  id: number;
  name: string;
  icon?: IconType;
  link?: string;
  submenu?: ISidebarLink[];
}

export type TProps = {
  singleLink: ISidebarLink;
};

const SidebarLink: React.FC<TProps> = ({ singleLink }) => {

  const router = useRouter();
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  function handleSubMenuOpen() {
    if (singleLink?.submenu) {
      return setIsSubMenuOpen(!isSubMenuOpen);
    }
    if (singleLink?.link) {
      return router.push(singleLink?.link);
    }
  }
  return (
    <>
      <li
        className={`text-white flex  items-center justify-between   hover:bg-gray-700 transition-['background'] ${(singleLink?.link === pathname || isSubMenuOpen) ? 'bg-gray-700' : ''}  w-full cursor-pointer `}
        onClick={() => handleSubMenuOpen()}
      >
        <div
          className={`flex items-center  gap-2  hover:bg-gray-700 transition-['background'] p-3 w-full  `}
        >
          {singleLink.icon ? <singleLink.icon className="text-xl" /> : null}
          <span> {singleLink.name} </span>
        </div>
        {singleLink?.submenu && (
          <MdKeyboardArrowRight
            className={`text-2xl  ${isSubMenuOpen ? "rotate-90" : "rotate-0"} `}
          />
        )}
      </li>
      <ul>
        {isSubMenuOpen &&
          singleLink?.submenu?.map((subItem) => (
            <SidebarLink key={singleLink?.id} singleLink={subItem} />
          ))}
      </ul>
    </>
  );
};

export default SidebarLink;
