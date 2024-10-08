
import { JSX } from "solid-js";




interface PropsType {
  children: JSX.Element;
}



function SubmenuListItem({ children }: PropsType) {
  return (
    <li class="banner_list_item group/submenu_li ">
      <a href={`/product/${children}`} class="font-light text-sm group-hover/submenu_li:text-mainBlueColor transition duration-200 ">
        {children}
      </a>
    </li>
  );
}

export default SubmenuListItem;
