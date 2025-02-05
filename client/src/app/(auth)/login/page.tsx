"use client";
import { useLoginUserMutation } from "@/toolkit/api/authApi";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "@/toolkit/hook";
import { setToken } from "@/toolkit/slice/authSlice";
import { useGetUserDataQuery } from "@/toolkit/api/userApi";
const Login = () => {
  const { refetch } = useGetUserDataQuery(undefined);
  const [passShow, setPassShow] = useState(false);
  const router = useRouter();
  const [inputValue, setInputVal] = useState({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<null | React.ReactElement>(null);
  const [mutate, { data, error, isError, isSuccess }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const passShowToggle = () => {
    setPassShow(!passShow);
  };
  const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(inputValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal({ ...inputValue, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (isError && "error" in error) {
      const newFieldErrors: Record<string, string> = {};
      if (Array.isArray(error.error)) {
        error.error.forEach((err) => {
          newFieldErrors[err.path] = err.message;
        });
      }
      setToast(
        <div className="w-full py-3 bg-gray-50 flex items-center justify-center">
          <p className="text-orangeColor">{(error as { error: any }).error} </p>
        </div>
      );
      setFieldErrors(newFieldErrors);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess && data) {
      setFieldErrors({});
      setToast(
        <div className="w-full py-3 bg-gray-50 flex items-center justify-center">
          <p className="text-orangeColor">{data?.message}</p>
        </div>
      );
      dispatch(setToken(data?.token));
      refetch();
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);
  return (
    <>
      <div className="my-5">
        {isError && (
          <div className="w-full bg-gray-50 flex items-center justify-center">
            <p className="text-orangeColor">
              {isError && "message" in error && error?.message}
            </p>
          </div>
        )}
        {toast}
        <form onSubmit={loginSubmit}>
          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border-none outline-none"
              onChange={handleInputChange}
            />
          </div>
          {fieldErrors.email && (
            <span className="text-orangeColor block">{fieldErrors.email}</span>
          )}

          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type={passShow ? "text" : "password"}
              name="password"
              placeholder="password"
              className="w-full border-none outline-none"
              onChange={handleInputChange}
            />
            {passShow ? (
              <LuEyeOff onClick={passShowToggle} />
            ) : (
              <LuEye onClick={passShowToggle} />
            )}
          </div>
          {fieldErrors.password && (
            <span className="text-orangeColor  block">
              {fieldErrors.password}
            </span>
          )}

          <div className="w-full flex items-center border  my-8">
            <button className="bg-orangeColor text-white w-full h-full px-4 py-3 border border-transparent hover:bg-transparent hover:border hover:border-orangeColor duration-500 hover:text-orangeColor ">
              Login
            </button>
          </div>
          <div className="w-full flex items-center justify-center my-3 text-orangeColor">
            <Link href="/forgetPassword">Forget Password?</Link>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?
            <Link href="/register" className="text-orangeColor hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
