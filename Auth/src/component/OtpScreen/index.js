import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserLoginAuth } from "#hooks/auth/index.js";
import { useCountdown } from "react-time-sync"; 
import { GET_FROM_SESSION_STORAGE } from "#utils/Helpers.js";
export function OtpScreen(){

    const [code, setCode] = useState("");
    const [expiryTime, setExpiryTime] = useState(new Date().getTime() + (300*1000))
    const {handleValidateOtp} = useUserLoginAuth()
    const location = useLocation();
    const [phoneNumber,setPhoneNumber] = useState('91*******001')
    const phoneState = location.state;

    const replaceLastFour = (str) => {
        return str.replace(/\d(?=\d{4})/g, "*");
    }
    const handleChange = (code) => {
         setCode(code);
         if(code.length === 6){
            handleValidateOtp({
                otp:code,
                phone:phoneState?.phoneNumber||GET_FROM_SESSION_STORAGE('phone'),
                session_id:phoneState?.session_id||GET_FROM_SESSION_STORAGE('session_id')

            })
         }
    }
    const formatTime = (time) => {
       
    };
    useEffect(()=>{{
        setPhoneNumber(location?.state?.phoneNumber||"91630000000")
    }},[])
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-1 p-[1rem]">
            <h2 className='poppins-bold'>Enter OTP code for verification!</h2>
            <p className='poppins-extralight text-sm m-1'>We have sent a 6-numbers OTP code </p>
            <p className='poppins-extralight text-sm'>{`to ${replaceLastFour(phoneNumber)}`}</p>
            <div className='my-4'>
            <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                renderSeparator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                border: "2px solid rgb(219 234 254)",
                borderRadius: "8px",
                width: "44px",
                height: "54px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue",
                resize:"horizontal"
                }}
                focusStyle={{
                border: "1px solid ",
                outline: "none"
                }}
                renderInput={(props) => <input {...props} />}
            />
            </div>
            <p className='poppins-light text-sm '>The Code will expire in : <span className='color-linear text-base'>{<Timer until={expiryTime}/>}</span></p>
            <span className='mt-32'><a href='#'className='poppins-light text-sm'>Didn't get the OTP code?{" "} <span className='color-linear'>Tap Here</span> </a></span>
        </div>
    )
}
const Timer = ({ until }) => {
    const time = useCountdown({ until });
    const minutes = Math.floor((time) / (60));
    const seconds = Math.floor(time%60);
    return `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   
  };