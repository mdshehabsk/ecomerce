import React from "react";

// import react icon
import { AiOutlineRight } from "react-icons/ai";

interface PropsType {
    children:React.ReactNode | React.ReactNode[],
    name:string
}
function ListItem({children,name}:PropsType) {
  return (
    <li className="banner_list_item  mt-2 group  ">
    <a className="font-medium group-hover:text-mainBlueColor  "> {name} </a>
    <AiOutlineRight  className="group-hover:text-mainBlueColor " />
    {children}
    </li>
  );
}

export default ListItem;
