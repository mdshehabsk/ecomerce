import baseApi from "./baseApi";

let authToken: string

if(global.window !== undefined){
  authToken = localStorage.getItem('authToken') as string
}

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getUserData : builder.query({
        query: (undefined) => ({
            url:'/user/get-user-data',
            method:'GET',
            headers:{
              Authorization : `Bearer ${authToken}`
            }
        })
      })
    }),
  });

export const {useGetUserDataQuery} = userApi

export default userApi
