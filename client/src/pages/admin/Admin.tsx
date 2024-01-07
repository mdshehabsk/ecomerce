import Sidebar from "@components/Admin/Sidebar"
import { useAppDispatch } from "@toolkit/hook"
import { sidebarOpen } from "@toolkit/slice/AdminSidebarSlice"
import { Outlet } from "react-router-dom"


const Admin = () => {
  const dispath = useAppDispatch()
  function sidebarShow () {
    dispath(sidebarOpen())
  }
  return (
   <div className="flex w-screen h-screen   " >
    <Sidebar/>

    <div className="flex-1 bg-gray-200 md:p-4" >
      <button className="px-4 py-2 bg-blue-500 text-white"  onClick={sidebarShow} >Click</button>
    <Outlet/>
    </div>

   </div>
  )
}

export default Admin