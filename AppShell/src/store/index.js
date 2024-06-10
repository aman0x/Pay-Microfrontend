import { configureStore ,combineReducers} from "@reduxjs/toolkit"
import testReducer from "./testSlice.js"
import authReducer from "Auth/authReducer"
const reduxStore = configureStore({
    reducer:{
      auth:authReducer,
      test:testReducer
    }
})
export default reduxStore;