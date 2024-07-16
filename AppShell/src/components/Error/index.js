import React from "react";
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <h1 className="text-3xl font-bold mb-4">Sorry for the issue!</h1>
      <p className="text-lg mb-6 text-center">
        The page you are looking has some issues, but don't worry, you can access other services easily.
      </p>
      <p className="font-bold my-2">Go To</p>
      <div  className="flex gap-2">
        <button
        className="border-2 py-2 px-4 rounded-2xl bg-black-primary primary-btn"
        onClick={()=>
          window.location.href="/dashboard"
        } 
        >Dashboard</button>
        <button
        className="border-2 py-2 px-4 rounded-2xl bg-black-primary primary-btn"
        onClick={()=>
          window.location.href="/invoice"
            
        }>Invoice</button>
        <button
        className="border-2 py-2 px-4 rounded-2xl bg-black-primary primary-btn"
        onClick={()=>
            window.location.href="/admin"
        }>Admin</button>
        <button
        className="border-2 py-2 px-4 rounded-2xl bg-black-primary primary-btn"
         onClick={()=>
            window.location.href="/report"
         }
        >
        Report</button>
        <button
        className="border-2 py-2 px-4 rounded-2xl bg-black-primary primary-btn"
        onClick={()=>
            navigate('/')
        }>Auth</button>
      </div>
    </div>
  );
};

export default NotFound;