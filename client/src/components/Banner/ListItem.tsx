import Link from "next/link";
import React from "react";

// import react icon
import { AiOutlineRight } from "react-icons/ai";

interface IProps {
  item: {
    label: string;
    value: string;
  };
  children: JSX.Element | JSX.Element[]
}
function ListItem({ item ,children}: IProps) {
  return (
    <li className="banner_list_item  mt-2 group  ">
      <Link
        href={`/product/${item.value}`}
        className="font-medium group-hover:text-mainBlueColor  "
      >
        {item.label}
      </Link>
      <AiOutlineRight className="group-hover:text-mainBlueColor " />
      {children}
    </li>
  );
}

export default ListItem;
