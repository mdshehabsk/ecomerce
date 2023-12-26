import { Link, useLocation, Outlet } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Auth = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  return (
    <>
      <div className="mx-auto my-6 max-w-[400px] ">
        <div className="flex mx-auto justify-center">
          <Link
            to="/login"
            className={`flex justify-center basis-1/2   font-semibold  ${
              pathname === "/login"
                ? "text-orangeColor  border-b-[3px] border-orangeColor "
                : null
            } `}
          >
            <h2 className="">LOGIN</h2>
          </Link>

          <Link
            to="/register"
            className={`flex justify-center basis-1/2   font-semibold  ${
              pathname === "/register"
                ? "text-orangeColor  border-b-[3px] border-orangeColor "
                : null
            } `}
          >
            <h2>REGISTER</h2>
          </Link>
        </div>
        <Outlet />

        <div className="w-full flex justify-center">
          <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-gray-300 rounded bg-white">
            <FcGoogle />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>

        <div className="w-full flex justify-center mt-4 ">

          <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-blue-500 rounded bg-blue-500 text-white" >
            <FaFacebookF className="text-white" />
            <span className=" font-semibold text-white ">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
