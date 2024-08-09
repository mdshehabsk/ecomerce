import Link from "next/link";


interface PropsType {
  children: React.ReactNode;
}



function SubmenuListItem({ children }: PropsType) {
  return (
    <li className="banner_list_item group/submenu_li ">
      <Link href={`/product/${children}`} className="font-light text-sm group-hover/submenu_li:text-mainBlueColor transition duration-200 ">
        {children}
      </Link>
    </li>
  );
}

export default SubmenuListItem;
