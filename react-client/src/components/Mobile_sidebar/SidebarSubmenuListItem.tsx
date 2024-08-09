import { useAppDispatch } from "@toolkit/hook";
import { sidebarClose } from "@toolkit/slice/SidebarSlice";
import { NavLink } from "react-router-dom";

function SidebarSubmenuListItem({ children }: { children: string }) {
  const dispatch = useAppDispatch()
  function linkClick  () {
    dispatch(sidebarClose())
  }
  return (
    <li className="py-2 ">
      <NavLink to={`/product/${children}`} onClick={linkClick}  className='active:text-mainBlueColor'  >{children}</NavLink>
    </li>
  );
}

export default SidebarSubmenuListItem;
