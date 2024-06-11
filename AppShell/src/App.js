import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux"
import "./themes/index.css";
import Auth from "Auth/Auth"
import reduxStore from "./store";
import { testActions } from "./store/testSlice";
//console.log())
function  App (){
  const value = useSelector(state => state.test.value )
  const dispatch = useDispatch()
 return (
  <div>
     <Auth/>
  </div>

)};
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={reduxStore}>  
  <App />
</Provider>
)
export default App