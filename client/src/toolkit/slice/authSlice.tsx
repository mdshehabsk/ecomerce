
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   token : ''
}


if(global.window !== undefined){
  initialState.token = localStorage.getItem('authToken') as string
}
const authSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setToken : (state,action) => {
            localStorage.setItem('authToken', action.payload);
            state.token = action.payload
        },
        removeToken : (state,action) => {
            localStorage.removeItem(action.payload || 'authToken')
            state.token = ''
        }
    }
})

export default authSlice;

export const {removeToken,setToken} = authSlice.actions

