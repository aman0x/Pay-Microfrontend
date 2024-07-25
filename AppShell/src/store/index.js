import { configureStore ,combineReducers} from "@reduxjs/toolkit"
import shellReducer from "./shellSlice.js"
import authReducer from "Auth/authReducer"
const reduxStore = configureStore({
    reducer:{
      auth:authReducer,
      shell:shellReducer
    }
})
export default reduxStore;