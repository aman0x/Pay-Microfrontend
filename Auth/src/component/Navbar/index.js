import { Link } from "react-router-dom"
export function HeaderNavbar({isLogin = false}){
    return(
        <div className="pt-8 px-12">
        <ul className="flex justify-between">
            <div className="flex">
            <img
                src="/images/paymorz-logo.png"
                alt="paymorz-logo"
            />
            <li className="italic pl-1 font-extrabold from-neutral-900 text-xl">Paymorz<span 
            className="pl-1 text-2xl font-extrabold size-14 color-linear">.</span></li>
            </div>
          {
            
            !isLogin?
            <li >New in Paymorz? <span ><Link to="/accounts/signup" className="color-linear" style={{
              textDecoration:"underline"
            }}>Sign Up</Link></span></li>
            :
            <li >Already Have An Account? <span ><Link to="/accounts/login" className="color-linear">Log In</Link></span></li>
          }
          
        </ul>
      </div>
      
    )
} 