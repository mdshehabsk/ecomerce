

interface PropsType {
  children: string;
}

import { Link } from "react-router-dom";

function SubmenuListItem({ children }: PropsType) {
  return (
    <li className="banner_list_item group/submenu_li ">
      <Link to={`/product/${children}`} className="font-light text-sm group-hover/submenu_li:text-mainBlueColor transition duration-200 ">
        {children}
      </Link>
    </li>
  );
}

export default SubmenuListItem;
