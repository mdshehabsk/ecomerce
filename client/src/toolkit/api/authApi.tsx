import baseApi from "./baseApi";
import userApi from "./userApi";
interface IRegisterApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterApiResponse, IRegisterUser>({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        data: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: "POST",
        data,
      }),
    }),
    loginWithGoogle: builder.mutation({
      query: (data) => ({
        url: '/auth/login/google',
        method: "POST",
        data,
      }),
    }),
    verifyUser: builder.query({
      query: (token) => ({
        url: `/auth/verify-user?token=${token}`,
      }),
    }),
  }),
});

// Export the auto-generated hooks



// Export the auto-generated hooks
export const { useRegisterUserMutation, useVerifyUserQuery,useLoginUserMutation,useLoginWithGoogleMutation } = authApi;

export default authApi;
