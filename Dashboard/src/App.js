import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";
import { SideNavBar } from "./component/SideNavBar/index.js";
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar/index.js";
import DashboardMain from "./component/Main/index.js";
import MainPayment from "./component/Payment/component/Main/index.js";
import ContactForm from "./component/Support/ContactUsFrom/index.js";
import  {useState} from "react"
import {useLocation,useParams} from "react-router-dom"
function App (){
  const [isRightBarShown,setIsRightBarShown] = useState(true)
  const params = useLocation()
  {console.log("hwloo",params)}
  return(
    <div className="w-full">
    
   
    <div className="bg-slate-50 p-[1rem]">
      <div className="flex">
        <div>
        <SideNavBar/>
        </div>
        <div className="w-full">
          <TopNavbar/>
          <Routes>
          <Route path = "support" element={<ContactForm/>}/>
          </Routes>
          <div className="flex ">
          <Routes>
          <Route path="/" element={<DashboardMain/>}/>
          <Route path="payment" element={<MainPayment/>}/>
         
          </Routes>
           {
            (isRightBarShown && params.pathname !== '/support') ?
            <div className="p-[0.8rem] mt-[1.5rem]">
              <RightSideBar/>
            </div>
            :
            null
           } 
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter basename="/dashboard">
  <App />
  </BrowserRouter>
)
export default App