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
     {/* <h1 className="text-center mt-2 font-bold">This is the Container File - {value} <button 
     className=" text-white bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
     onClick={()=>{
      dispatch(testActions.increaseValue())
     }}>Increase</button></h1> */}
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