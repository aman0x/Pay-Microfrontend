import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.scss";
import LoginUser from "./component/Login/index.js";
import { HomePage } from "./component/Home/index.js"
import Header from "./Header.js";
import { Provider } from "react-redux";
import reduxStore from "./store";
const isLogin = false;
const App = () => (
 
  <div className="test">
  <BrowserRouter>
  <Routes>
  {
            isLogin?
            <>
              <Route path = "/dashboard" Component={HomePage}/>
            </>
            :
            <>
            <Route path="/" Component={LoginUser}/>
            <Route path="/accounts/login" Component={LoginUser}/>
            </>
            // <>
            // <Route path="/accounts/signup" element={}>
              
            // <Route path="/accounts/login">
            //   <LoginUser/>
            // </Route>
            // <Route path="/accounts/forgot-password">
            //   <ForgotPassword/>
            // </Route>
            // <Route path = "/">
            //   <LoginUser/>
            // </Route>
            // </>
            
          }
          </Routes>
  </BrowserRouter>
  </div>
);
ReactDOM.render(
  <Provider store={reduxStore}>
<App />
</Provider>
, document.getElementById("app"));
export default App;