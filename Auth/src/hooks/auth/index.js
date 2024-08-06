import { GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,signInWithEmailAndPassword, signInWithPhoneNumber ,createUserWithEmailAndPassword,RecaptchaVerifier} from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import { authActions } from "../../store/authSlice";
import AxiosCall from "../../utils/ApiCall.js"
import { useDispatch } from "react-redux"
import { PUBLIC_ENDPOINTS ,PRIVATE_ENDPOINTS} from "../../utils/Constants.js"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { STORE_IN_LOCAL_STORAGE } from "../../utils/Helpers.js";
export function useUserLoginAuth(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.auth.user)
    const handleLoginWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider)
            .then(async (result) => {
                const userData = result.user
                const token = result.user.accessToken;
                const login_data = {
                    id_token:token
                }
                AxiosCall({url:PUBLIC_ENDPOINTS.GOOGLE_LOGIN,method:"POST",body:login_data})
                .then((data)=>{
                    STORE_IN_LOCAL_STORAGE("access_token",data.data.access_token)
                    STORE_IN_LOCAL_STORAGE("user_id",data.data.user_id)
                    toast.success("Login Successfull")
                    dispatch(authActions.login({token:data.data.access_token,user_id:data.data.user_id}))
                    navigate('/dashboard')
                })
                .catch((e)=>{
                    if(e?.response?.data?.message){
                        toast.error(e.response.data.message)
                    }
                    else{
                        toast.error("Error in Login")
                    }
                
                
                })
    
            }).catch((error) => {
                console.log("Google-login-error",error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const handleUserLoginWithEmail = (data) =>{
        const login_data = {
            email:data.email,
            password:data.password,
            is_social_login:false
        }
        AxiosCall({url:PUBLIC_ENDPOINTS.login,method:"POST",body:login_data})
        .then((data)=>{
            STORE_IN_LOCAL_STORAGE("access_token",data.data.access)
            toast.success("Login Successfull")
            dispatch(authActions.login({token:data.data.access}))
            navigate('/dashboard')
        })
        .catch((e)=>{
            if(e?.response?.data?.message){
                toast.error(e.response.data.message)
            }
            else{
                toast.error("Error in Login")
            }
        })
       

    }

    const handleLoginWithPhone = (phone) =>{
        const login_data = {
            phone:phone
        }
        AxiosCall({url:PUBLIC_ENDPOINTS.PHONE_LOGIN,method:"POST",body:login_data})
        .then((data)=>{
            console.log("login_phone_data",data)
            // navigate('/accounts/otp-verification',{state:{phoneNumber:phone,

            // }})
          
        })
        .catch((e)=>{
            console.log("login_error_data",e)
            toast.error(e.message)
           
        })
        

    }

    const handleLoginWithApple = ()=>{

    }

    const handleLoginWithFacebook = () =>{
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

        AxiosCall({url:PUBLIC_ENDPOINTS.OTP_VERIFY,method:"POST",body:data})
        .then((data)=>{
            console.log("validate_otp",data)
           
          
        })
        .catch((e)=>{
            toast(e.message)
           
        })
        navigate('/dashboard')
    }

    
    return {handleUserLoginWithEmail,handleLoginWithGoogle,handleLoginWithApple,handleLoginWithFacebook,handleLoginWithPhone,handleValidateOtp}
}

export function useUserSignupAuth(){
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const handleUserSignup = (data,userId=null,cb) =>{
      
        AxiosCall({
            url:userId?PUBLIC_ENDPOINTS.signIn+`${userId}/`:PUBLIC_ENDPOINTS.signIn,
            method:userId?"PUT":"POST",
            PRIVATE_API:false,
            body:data
        })
        .then((response)=>{
            if(!userId){
                sessionStorage.setItem("user_id",response.data.id)
                navigate('/accounts/type',{ state:{userId:response.data.id}})
            }
            else{
                toast.success('Account Created Succesfully')
                navigate('/')
            }
        })
        .catch((e)=>{
            if(e?.response?.data?.message){
                toast.error(e.response.data.message)
            }
            else{
                toast.error("Error in Signup")
            }
        })
    }
    return {handleUserSignup}
}

