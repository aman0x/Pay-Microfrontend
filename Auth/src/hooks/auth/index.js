// import { GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,signInWithEmailAndPassword, signInWithPhoneNumber ,createUserWithEmailAndPassword,RecaptchaVerifier} from "firebase/auth";
// import { firebaseAuth } from "../../firebase/firebaseConfig";
// import { authActions } from "../../store/authSlice";
import AxiosCall from "../../utils/ApiCall.js"
import { useDispatch } from "react-redux"
import { PUBLIC_ENDPOINTS } from "../../utils/Constants.js"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
export function useUserLoginAuth(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.auth.user)
    console.log(current_user)
    const handleLoginWithGoogle = () =>{
        console.log("login with google")
    // const provider = new GoogleAuthProvider();

    //     signInWithPopup(firebaseAuth, provider)
    //         .then(async (result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             console.log("google-login",credential)
    //             console.log("google-login",result)
    //             console.log("google-login",result.user)
    //             const token = credential.accessToken;
    //             dispatch(authActions.login({
    //                 user:result.user
    //             }))
    //             // The signed-in user info.
    //             const user = result.user;
    
    //         }).catch((error) => {
    //             console.log("Google-login-error",error)
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });
    }
    const handleUserLoginWithEmail = (data) =>{
        console.log("login with email")
        const login_data = {
            email:data.email,
            password:data.password,
            is_social_login:false
        }
        AxiosCall({url:PUBLIC_ENDPOINTS.login,method:"POST",body:login_data})
        //axios.post(PUBLIC_ENDPOINTS.login,login_data)
        .then((data)=>{
            console.log("login_data",data)
        })
        .catch((e)=>{
            console.log("login_error_data",e)
        })

    }

    const handleLoginWithPhone = (phone) =>{
        console.log("Login with phoen")
        const login_data = {
            phone:phone,
            is_social_login:false
        }
        AxiosCall({url:PUBLIC_ENDPOINTS.login,method:"POST",body:login_data})
        .then((data)=>{
            console.log("login_data",data)
            navigate('/accounts/otp-verification',{state:{phoneNumber:phone}})
          
        })
        .catch((e)=>{
            console.log("login_error_data",e)
           
        })
        

    }

    const handleLoginWithApple = ()=>{

    }

    const handleLoginWithFacebook = () =>{
        console.log("Login with facebook")
        // const provider = new FacebookAuthProvider();
        // signInWithPopup(firebaseAuth, provider)
        // .then((result) => {
        // // The signed-in user info.
        // console.log("fbDat",result)
        // const user = result.user;

        // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;

        // // IdP data available using getAdditionalUserInfo(result)
        // // ...
        // })
        // .catch((error) => {
        //     console.log("err",error)
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // });

    }

    function captchaVerifier(){
        // if (!window.recaptchaVerifier) {
        //     window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'recaptcha-container', {
        //         'size': 'invisible',
        //         'callback': (response) => {
        //           // reCAPTCHA solved, allow signInWithPhoneNumber.
        //           handleLoginWithPhone();
        //         }
        //       });
        //   }
    }

    const handleValidateOtp=(data)=>{

        AxiosCall({url:PUBLIC_ENDPOINTS.login,method:"POST",body:data})
        .then((data)=>{
            console.log("validate_otp",data)
           
          
        })
        .catch((e)=>{
            console.log("valdate_otp",e)
           
        })
        navigate('/dashboard')
    }

    
    return {handleUserLoginWithEmail,handleLoginWithGoogle,handleLoginWithApple,handleLoginWithFacebook,handleLoginWithPhone,handleValidateOtp}
}

export function useUserSignupAuth(){
    const navigate = useNavigate()
    const handleUserSignup = (data) =>{
        console.log("hook_data",data)
      
        AxiosCall({url:PUBLIC_ENDPOINTS.signIn,method:"POST",PRIVATE_API:false,body:data})
        .then((data)=>{
            console.log("Success",data)
            
        })
        .catch((e)=>{
            console.log("Error In Signin",e)
        })
        // just for flow
        navigate('/accounts/type')
    }
    return {handleUserSignup}
}
