import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        userId:'1',
        user:{
            id:1,
            first_name:'Dezo',
            last_name:'Zacker'
        },
        isLogin:false,
        token:'',
       
    },
    reducers:{
        login(state,action){
            state.isLogin = true;
            state.user = action.payload.user
            // state.userId = action.payload.user.id
        },
        logout(state,action){
            
        },
        increaseCounter(state,action){
            state.counter = state.counter+1;
        }

    }
})
export const authActions = authSlice.actions

export default authSlice.reducer;