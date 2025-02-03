'use client'
import { FC } from "react";
import { IoReloadOutline, IoReturnDownBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
interface IProps {
    error: Error & { digest?: string }
  reset: () => void
}
const Error : FC<IProps> = ({error, reset}) => {
    const router = useRouter()
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4" >
        <p className="text-2xl text-red-500" > Error happend </p>
        <button
        onClick={() => reset() }
        className="px-8 py-2 bg-green-500 text-white flex gap-2 items-center"
      >
        Try again
        <IoReloadOutline />
      </button>
      <button onClick={()=> router.back() } className="px-8 py-2 bg-red-500 text-white flex gap-2 items-center" >
        Back
        <IoReturnDownBackOutline />
      </button>
    </div>
  )
}

export default Error