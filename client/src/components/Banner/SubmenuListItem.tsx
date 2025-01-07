import Link from "next/link";

interface IProps {
  subMenuItem : {
    label: string
    value: string
  }
}
function SubmenuListItem({subMenuItem }: IProps) {
  return (
    <li className="banner_list_item group/submenu_li ">
      <Link href={`/product/${subMenuItem?.value}`} className="font-light text-sm group-hover/submenu_li:text-mainBlueColor transition duration-200 ">
        {subMenuItem?.label}
      </Link>
    </li>
  );
}

export default SubmenuListItem;
