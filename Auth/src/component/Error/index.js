import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    const [time,setTime] = useState()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },3000)  
    })
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <h1 className="text-3xl font-bold mb-4">Unauthorized Access!!</h1>
      <p className="text-lg mb-6 text-center">
        Redirecting to login page in 3 seconds .....
      </p>
    </div>
  );
};

export default NotFound;