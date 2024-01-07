import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarShow: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        sidebarOpen : state => { state.sidebarShow = true },
        sidebarClose : state => {state.sidebarShow = false}
    }
})

export default sidebarSlice;

export const {sidebarClose,sidebarOpen} = sidebarSlice.actions