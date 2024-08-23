"use client";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Link from "next/link";
import { useRegisterUserMutation } from "@/toolkit/api/authApi";
import { IApiError } from "@/toolkit/api/baseApi";

const Register = () => {
  const [mutate, { data, isError, error, isSuccess, status }] =
    useRegisterUserMutation();
  const [passShow, setPassShow] = useState({
    password: false,
    cpassword: false,
  });
  const [inputVal, setInputVal] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isError) {
      const apiError = error as IApiError;
      const fieldErrors: Record<string, string> = {};
      Array.isArray(apiError?.error) &&
        apiError?.error?.forEach((err) => {
          fieldErrors[err.path] = err.message;
        });
      setFieldErrors(fieldErrors);
    }
  }, [error]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputVal({ ...inputVal, [event.target.name]: event.target.value });

  const registerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(inputVal);
  };

  const { username, email, password, cpassword } = inputVal;
  return (
    <>
      <div className="my-5">
        {isError && (
          <div className="w-full py-3 bg-gray-50 flex items-center justify-center">
            <p className="text-orangeColor">{error?.message}</p>
          </div>
        )}
        <form autoComplete="off" onSubmit={registerSubmit}>
          <div className="w-full mt-2 mb-8">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="w-full px-4 py-2 border  outline-none"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          {fieldErrors.username && (
            <span className="text-orangeColor my-1 block">
              {fieldErrors.username}
            </span>
          )}
          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full  border-none outline-none"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          {fieldErrors.email && (
            <span className="text-orangeColor my-1 block">
              {fieldErrors.email}
            </span>
          )}

          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type={passShow.password ? "text" : "password"}
              name="password"
              placeholder="password"
              className="w-full border-none outline-none"
              value={password}
              onChange={handleInputChange}
              required
            />
            {passShow.password ? (
              <LuEyeOff
                onClick={() => {
                  setPassShow({ ...passShow, password: !passShow.password });
                }}
              />
            ) : (
              <LuEye
                onClick={() => {
                  setPassShow({ ...passShow, password: !passShow.password });
                }}
              />
            )}
          </div>
          {fieldErrors.password && (
            <span className="text-orangeColor my-1 block">
              {fieldErrors.password}
            </span>
          )}

          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type={passShow.cpassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm password"
              className="w-full border-none outline-none"
              value={cpassword}
              onChange={handleInputChange}
              required
            />
            {passShow.cpassword ? (
              <LuEyeOff
                onClick={() => {
                  setPassShow({ ...passShow, cpassword: !passShow.cpassword });
                }}
              />
            ) : (
              <LuEye
                onClick={() => {
                  setPassShow({ ...passShow, cpassword: !passShow.cpassword });
                }}
              />
            )}
          </div>
          {fieldErrors.cpassword && (
            <span className="text-orangeColor my-1 block">
              {fieldErrors.cpassword}
            </span>
          )}

          <div className="w-full flex items-center border my-8">
            <button className="bg-orangeColor text-white w-full h-full px-4 py-3 hover:bg-transparent border border-transparent hover:border hover:border-orangeColor duration-500 hover:text-orangeColor">
              Register
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-orangeColor hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
