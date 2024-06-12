import OtpInput from 'react-otp-input';
import { useState } from 'react';

export function OtpScreen({phNumber='91*******001'}){
    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-1 p-[1rem]">
            <h2 className='poppins-bold'>Enter OTP code for verification!</h2>
            <p className='poppins-extralight text-sm m-1'>We have sent a 8-numbers OTP code </p>
            <p className='poppins-extralight text-sm'>{`to ${phNumber}`}</p>
            <div className='my-4'>
            <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={8}
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
                caretColor: "blue"
                }}
                focusStyle={{
                border: "1px solid ",
                outline: "none"
                }}
                renderInput={(props) => <input {...props} />}
            />
            </div>
            <p className='poppins-light text-sm '>The Code will be active in:<span className='color-linear'> 02 Min : 60 Sec</span></p>
            <span className='mt-32'><a href='#'className='poppins-light text-sm' style={{
                textDecoration:'underline',
                textDecorationColor:'gray'
            }}>Didn't get the OTP code? <span className='color-linear'>Tap Here</span> </a></span>
        </div>
    )
}