import { useState } from 'react';
import { useUserLoginAuth } from "#hooks/auth/index.js";
import { HeaderNavbar } from '../Navbar';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { PiLineVertical } from "react-icons/pi";
import { IoLogoFacebook,IoLogoApple } from "react-icons/io5";
import { Mail,Lock, Call} from '@mui/icons-material';
import PaymorzSider from '../../utils/PaymorzSider';
import {useNavigate } from "react-router-dom"
export default function LoginUser() {
  const navigate = useNavigate()
  const { handleLoginWithGoogle, handleLoginWithApple, handleLoginWithFacebook, handleLoginWithPhone,handleUserLoginWithEmail } = useUserLoginAuth()
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [withEmail,setWithEmail] = useState(true)

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex min-h-full flex-col ">
        <HeaderNavbar />
        <div className="sm:mx-auto sm:w-full  mt-12">
          <h2 className="mt-10 text-center text-sm  text-gray-900">Log in With:</h2>
        </div>
           
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-sm ">
            <div className="flex sm:mx-auto sm:w-full sm:max-w-md mt-4 bg-gray-100 py-2 rounded-xl justify-evenly ">
                <button
                className='py-3 px-9 rounded-lg'
                style={{
                  backgroundColor:withEmail?"#FFFFFF":null,
                  width:"45%",
                  fontWeight:withEmail?"bold":"normal"
                }}
                onClick={()=>setWithEmail(true)}
                >
                  Email / Password
                </button>
                <button 
                className='py-2 rounded-lg'
                style={{
                  backgroundColor:!withEmail?"#FFFFFF":null,
                  width:"45%"
                }}
                onClick={()=>setWithEmail(false)}
                >
                  Phone Number
                </button>
              </div>
            <form className="space-y-4 mt-4" >
            {
              withEmail?
              <div className='flex flex-col gap-3 '>
                <div className=" relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                
                 <Mail fontSize='small' color="disabled"/>
                 <PiLineVertical color='gray'/>
        
                </div>
                <input type="text" id="input-group-1" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-xl w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Mail."/>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                 <Lock fontSize='small' color="disabled"/>
                 <PiLineVertical color='gray' />
                </div>
                <input type="password"  id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password..."/>
              </div>
             
              </div>
              :
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                 <Call fontSize='small' color='disabled'/>
                 <PiLineVertical color='gray'/>
                </div>
                <input type="number"  id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone Number..."/>
              </div>
            }
           
            <div className='mt-3'>
              <button type="submit"
                onClick={() => {
                  navigate('/accounts/type')
                  // withEmail ? handleUserLoginWithEmail():handleLoginWithPhone()
                }}
                className="flex items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><div> {withEmail?"Log In":"Send Otp"}</div>
               <span className='py-1.5 pl-2 size-6'><FaCircleArrowRight style={{color:'white'}} /></span></button>
            </div>
          </form>
          <div 
          className='my-5 mx-2 poppins-extralight-italic text-xs px-2'>
            <p >By clicking Continue, you agree to Paymorz's <span><a className='underline font-semibold' href='#'>Terms & Conditions & Privacy Policy.</a></span></p>
          </div>
          <div class="mt-16 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 mb-2">or Continue With</a>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
          <div className='grid grid-cols-3  items-center m-2  gap-4'>

            <button
              onClick={handleLoginWithGoogle}
              className="bg-white flex flex-col items-center  border rounded-xl border-gray-300 shadow-md px-10 py-2 text-sm font-medium text-gray-800">
              <span ><FcGoogle className='size-8'/></span>
              <span> Google</span>
            </button>
            <button
              onClick={handleLoginWithFacebook}
              className="bg-white flex flex-col items-center  border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 "
              >
                <span><IoLogoApple className='size-8'/></span>
              <span>Apple</span>

            </button>
            <button
              onClick={handleLoginWithFacebook}
              className="bg-white flex flex-col items-center  border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 "
              >
                <span><IoLogoFacebook className='size-8'/></span>
              <span>Facebook</span>

            </button>
            
            <div id="recaptcha-container">

            </div>

          </div>
        </div>
      </div>
      <PaymorzSider/>
    </div>

  )
}