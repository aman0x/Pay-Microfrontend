import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserLoginAuth } from "#hooks/auth/index.js";
import { useCountdown } from "react-time-sync"; 
export function OtpScreen({phNumber='91*******001'}){

    const [code, setCode] = useState("");
    const [expiryTime, setExpiryTime] = useState(new Date().getTime() + (300*1000))
    const {handleValidateOtp} = useUserLoginAuth()
    const location = useLocation();
    const phoneNumber = location.state?.phoneNumber;


    const handleChange = (code) => {
         setCode(code);
         if(code.length === 6){
            handleValidateOtp({
                otp:code,
                phone:phoneNumber
            })
         }
    }
    const formatTime = (time) => {
       
      };
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-1 p-[1rem]">
            <h2 className='poppins-bold'>Enter OTP code for verification!</h2>
            <p className='poppins-extralight text-sm m-1'>We have sent a 8-numbers OTP code </p>
            <p className='poppins-extralight text-sm'>{`to ${phNumber}`}</p>
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
            <p className='poppins-light text-sm '>The Code will be active in : <span className='color-linear'>{<Timer until={expiryTime}/>}</span></p>
            <span className='mt-32'><a href='#'className='poppins-light text-sm' style={{
                textDecoration:'underline',
                textDecorationColor:'gray'
            }}>Didn't get the OTP code? <span className='color-linear'>Tap Here</span> </a></span>
        </div>
    )
}
const Timer = ({ until }) => {
    const time = useCountdown({ until });
    const minutes = Math.floor((time) / (60));
    const seconds = Math.floor(time%60);
    return `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   
  };