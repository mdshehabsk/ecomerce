"use client";
import Sidebar from "@/components/Admin/Sidebar";
import { useAppDispatch } from "@/toolkit/hook";
import { sidebarOpen } from "@/toolkit/slice/AdminSidebarSlice";
import { RiMenu2Fill } from "react-icons/ri";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useAppDispatch();
  function handleSidebarShow() {
    dispatch(sidebarOpen());
  }
  return (
    <div className="flex w-screen h-screen   ">
      <Sidebar />

      <div className="flex-1  p-2 md:p-4 overflow-y-auto ">
        <div className="flex justify-between items-center bg-white shadow-sm my-2 p-4 md:hidden ">
          <h2 className="text-xl font-bold text-mainBlueColor " >Dashboard</h2>
          <RiMenu2Fill className="text-2xl font-bold " onClick={handleSidebarShow} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
