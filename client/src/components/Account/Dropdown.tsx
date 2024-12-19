import { useAppDispatch } from "@/toolkit/hook";
import { removeToken } from "@/toolkit/slice/authSlice";
import Link from "next/link"
import { useRouter } from "next/navigation";
const Dropdown = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  function handleLogout () {
    dispatch(removeToken('authToken'))
    router.push("/");
  }
  return (
    <div className=' p-3 bg-white shadow-md rounded-md '>
        <Link className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" href='/manage-account' >Manage Accounts</Link>
        <Link className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" href='/manage-account' >My Order</Link>
        <Link className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" href='/manage-account' >My Whitelist</Link>
        <Link className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" href='/manage-account' >Support Ticket</Link>
        <Link className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" href='/manage-account' >Pickaboo Club</Link>
        <button className="text-xs text-black/80 hover:text-blue-500 duration-150 block my-2" onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Dropdown