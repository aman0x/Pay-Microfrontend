import { useState } from 'react';
import { HeaderNavbar } from '../Navbar';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { PiLineVertical } from 'react-icons/pi';
import { useUserSignupAuth ,useUserLoginAuth} from '#hooks/auth/index.js';
import PaymorzSider from '../../utils/PaymorzSider';
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook,IoLogoApple ,IoPerson} from "react-icons/io5";
import { Mail,Lock, Call} from '@mui/icons-material';
import { CiCircleChevLeft } from "react-icons/ci";
export default function SignUpUser(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pNumber,setPNumber] = useState("+91")
    const [fName,seFName] = useState('')
    const [mName,setMName] = useState('')
    const [lName,setLname] = useState('')
    const [pageIndex,setPageIndex] = useState(1)
    const { handleUserSignup } = useUserSignupAuth()
    const { handleLoginWithGoogle, handleLoginWithApple, handleLoginWithFacebook, handleLoginWithPhone,handleUserLoginWithEmail } = useUserLoginAuth()
  
    return(
        <div className="grid grid-cols-2 gap-4">
        <div className="flex min-h-full flex-col ">
          <HeaderNavbar isLogin={true}/>
          <div className="sm:mx-auto sm:w-full mt-20">
            <div className="flex justify-center text-sm text-gray-900">
              <button
              style={{
                display:pageIndex>1 ?"inline":"none",
              }}
              onClick={()=>setPageIndex(1)}
              className='mr-3'>
              <CiCircleChevLeft color='gray' fontSize="large" />
              </button>Sign Up: &nbsp;&nbsp;<span className='color-linear font-medium '>{`0${pageIndex} / 02`}</span></div>
          </div>
             
          <div className="sm:mx-auto sm:w-full sm:max-w-md text-sm mt-2 ">
              <form className="space-y-4 mt-4">
                {
                  pageIndex<2?
                  <div className='flex flex-col gap-3 '>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <IoPerson color='grey' />
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="text"  id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name..."/>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <IoPerson color='grey' />
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="text"  id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Middle Name..."/>
                  </div>
                  <div className="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                  <IoPerson color='grey' />
                   <PiLineVertical color='gray'/>
                  </div>
                  <input type="text"  id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name..."/>
                  </div>
                </div>
                :
                <div className='flex flex-col gap-3 '>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <Call fontSize='small' color='disabled'/>
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="text" 
                     id="input-group-1" 
                     className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={pNumber}
                      onChange={(e)=>setPNumber(e.currentTarget.value)}
                      placeholder="Enter Your Phone..."/>
                  </div>
                  
                    <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <Mail fontSize='small' color="disabled"/>
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="password" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Mail..."/>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <Lock fontSize='small' color="disabled"/>
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="password" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password..."/>
                  </div>
                  <div className="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                    <Lock fontSize='small' color="disabled"/>
                    <PiLineVertical color='gray'/>
                    </div>
                    <input type="password" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Your Password..."/>
                  </div>
                </div>
                }
              <div className='mt-3'>
                <button type="submit"
                  onClick={(e) =>{ 
                    e.preventDefault()
                    pageIndex>1 ?
                     handleUserSignup()
                     :
                     setPageIndex(2) 
                  }}
                  className="flex w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {pageIndex>1 ? "Sign Up":"Next"}<span className='py-1.5 pl-2 size-5'><FaCircleArrowRight style={{color:'white'}} /></span></button>
              </div>
            </form>
            <div 
            className='my-5 mx-2 poppins-extralight-italic text-xs px-2'>
              <p >By clicking Continue, you agree to Paymorz's <span><a className='underline font-semibold'>Terms & Conditions & Privacy Policy.</a></span></p>
            </div>
            <div className="mt-[2rem] flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                  <a href="#" className="text-xs text-center text-gray-500 mb-2">or Continue With</a>
                  <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
            <div className='grid grid-cols-3  items-center m-2  gap-4'>
  
              <button
                onClick={handleLoginWithGoogle}
                className="bg-white flex flex-col items-center  dark:bg-gray-900 border rounded-xl border-gray-300 shadow-md px-10 py-2 text-sm font-medium text-gray-800 dark:text-white">
                <span ><FcGoogle className='size-8'/></span>
                <span> Google</span>
              </button>
              <button
                onClick={handleLoginWithFacebook}
                className="bg-white flex flex-col items-center dark:bg-gray-900 border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  <span><IoLogoApple className='size-8'/></span>
                <span>Apple</span>
  
              </button>
              <button
                onClick={handleLoginWithFacebook}
                className="bg-white flex flex-col items-center dark:bg-gray-900 border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 dark:text-white"
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