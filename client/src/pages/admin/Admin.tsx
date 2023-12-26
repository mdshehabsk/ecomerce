import Sidebar from "@components/Admin/Sidebar"
import { Outlet } from "react-router-dom"


const Admin = () => {
  
  return (
   <div className="flex w-screen h-screen   " >
    <Sidebar/>

    <div className="flex-1 bg-gray-200 m-4" >
    <Outlet/>
    </div>

   </div>
  )
}

export default Admin