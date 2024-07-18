import { Link } from "react-router-dom"
export function HeaderNavbar({isLogin = false}){

    return(
        <div className="flex justify-between sm:pt-8 sm:px-12">
            <div className="flex">
            <img
                src="/images/paymorz-logo.png"
                alt="paymorz-logo"
            />
            <div className="italic pl-1 font-extrabold from-neutral-900 text-xl">Paymorz<span 
            className="pl-1 text-2xl font-extrabold size-14 color-linear">.</span></div>
            </div>
          {
            
            !isLogin?
            <div className="flex flex-col">
              <span className="text-right poppins-regular">New in Paymorz?</span> <span className="text-right"><Link to="/accounts/signup" className="color-linear underline" style={{
              textDecoration:"underline"
            }}>Sign Up</Link></span></div>
            :
            <div className="flex flex-col" ><span className="text-right poppins-regular">Already Have An Account?</span> <span className="text-right" ><Link to="/accounts/login" className="color-linear underline">Log In</Link></span></div>
          }
          
      </div>
      
    )
} 