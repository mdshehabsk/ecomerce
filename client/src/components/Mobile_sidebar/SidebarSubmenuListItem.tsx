import { useAppDispatch } from "@/toolkit/hook";
import { sidebarClose } from "@/toolkit/slice/SidebarSlice";
import Link from "next/link";


interface IsubMenuItem {
  label: string
  value: string
}

function SidebarSubmenuListItem({subMenuItem}:{subMenuItem:IsubMenuItem}) {
  const dispatch = useAppDispatch()
  function linkClick  () {
    dispatch(sidebarClose())
  }
  return (
    <li className="py-2 ">
      <Link href={`/product/${subMenuItem?.value}`} onClick={linkClick}  className='active:text-mainBlueColor'  > {subMenuItem?.label} </Link>
    </li>
  );
}

export default SidebarSubmenuListItem;
