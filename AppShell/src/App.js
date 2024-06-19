import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./themes/index.css";
import Auth from "Auth/Auth"
import Dashboard from "Dashboard/Dashboard"
import Invoice from "Invoice/Invoice"
import reduxStore from "./store";
import { testActions } from "./store/testSlice";
//console.log())
function  App (){
  const value = useSelector(state => state.test.value )
  const dispatch = useDispatch()
 return (
  <div>
    <Auth/>
    <Dashboard/>
    <Invoice/>
  </div>

)};
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={reduxStore}>  
  <App />
</Provider>
)
export default App