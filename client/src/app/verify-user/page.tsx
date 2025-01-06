"use client";

import { useVerifyUserQuery } from "@/toolkit/api/authApi";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/toolkit/hook";
import { setToken } from "@/toolkit/slice/authSlice";

const MyComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const token = searchParams.get("token");
  const dispatch = useAppDispatch()
  if (!token) {
    router.push("/not-found");
  }
  const { data, isLoading, isError, isSuccess } = useVerifyUserQuery(token);
  useEffect(() => {
    if (isError) {
      router.push("/not-found");
    }
    if (isSuccess) {
      dispatch(setToken(token))
      router.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isSuccess, isError, isLoading]);
  return <div></div>;
};

const VerifyUser = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default VerifyUser;
