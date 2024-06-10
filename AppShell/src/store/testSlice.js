import { createSlice } from "@reduxjs/toolkit";
const testSlice = createSlice({
    name:'test',
    initialState:{
        value:1
    },
    reducers:{
        increaseValue(state){
            state.value = state.value+1;
        }
    }
})

export const testActions =  testSlice.actions;
export default testSlice.reducer