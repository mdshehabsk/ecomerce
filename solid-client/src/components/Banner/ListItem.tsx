

// import react icon
import { AiOutlineRight } from "solid-icons/ai";
import { JSX } from "solid-js";

interface PropsType {
    children: JSX.Element,
    name:string
}
function ListItem({children,name}:PropsType) {
  return (
    <li class="banner_list_item  mt-2 group  ">
    <a class="font-medium group-hover:text-mainBlueColor  "> {name} </a>
    <AiOutlineRight  class="group-hover:text-mainBlueColor " />
    {children}
    </li>
  );
}

export default ListItem;
