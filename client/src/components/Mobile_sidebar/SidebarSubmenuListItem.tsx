import { useAppDispatch } from "@/toolkit/hook";
import { sidebarClose } from "@/toolkit/slice/SidebarSlice";
import Link from "next/link";


function SidebarSubmenuListItem({ children }: { children: string }) {
  const dispatch = useAppDispatch()
  function linkClick  () {
    dispatch(sidebarClose())
  }
  return (
    <li className="py-2 ">
      <Link href={`/product/${children}`} onClick={linkClick}  className='active:text-mainBlueColor'  >{children}</Link>
    </li>
  );
}

export default SidebarSubmenuListItem;
