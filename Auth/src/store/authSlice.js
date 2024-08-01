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
        cards:[]
    },
    reducers:{
        login(state,action){
            state.isLogin = true;
            state.token = action.payload.token
        },
        logout(state,action){
            state.isLogin=false
            delete state.token
        },
        setUser(state,action){
            state.user = action.payload.user
        },
        setCards(state,action){
            state.cards = action.payload.cards
        },
        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload.cardId);
        }
    }
})
export const authActions = authSlice.actions

export default authSlice.reducer;