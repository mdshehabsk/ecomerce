

interface PropsType {
  children: string;
}

function SubmenuListItem({ children }: PropsType) {
  return (
    <li className="banner_list_item group/submenu_li ">
      <a className="font-light text-sm group-hover/submenu_li:text-mainBlueColor transition duration-200 ">
        {children}
      </a>
    </li>
  );
}

export default SubmenuListItem;
