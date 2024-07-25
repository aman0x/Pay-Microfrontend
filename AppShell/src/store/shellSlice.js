import { createSlice } from "@reduxjs/toolkit";
const shellSlice = createSlice({
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

export const testActions =  shellSlice.actions;
export default shellSlice.reducer