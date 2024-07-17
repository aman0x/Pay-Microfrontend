import { createSlice } from "@reduxjs/toolkit";
const isLogin  = localStorage.getItem("access_token")?true:false


const authSlice = createSlice({
    name:'auth',
    initialState:{
        user_id:'1',
        user:{
           
        },
        isLogin:isLogin,
        token:'',
    },
    reducers:{
        login(state,action){
            state.isLogin = true;
            state.token = action.payload.token
            state.user_id = action.payload.user_id
        },
        logout(state,action){
            state.isLogin=false
            delete state.token
        },
        setUser(state,action){
            state.user = action.payload.user
            state.user_id = action.payload.user.id
            state.isLogin = true
        }
        

    }
})
export const authActions = authSlice.actions

export default authSlice.reducer;