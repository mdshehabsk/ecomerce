import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterIsModal:false,
    sortIsModal:false
}

const productSortAndFilter = createSlice({
    name:'productFilter',
    initialState,
    reducers:{
        mobileFilterModalToggle : state => {
            state.filterIsModal = !state.filterIsModal;
        },
        mobileSortModalToggle : state => {
            state.sortIsModal = !state.sortIsModal
        }
    }
})

export const {mobileFilterModalToggle,mobileSortModalToggle} = productSortAndFilter.actions

export default productSortAndFilter;