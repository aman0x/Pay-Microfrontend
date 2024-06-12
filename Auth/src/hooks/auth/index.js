import { GoogleAuthProvider,signInWithPopup,FacebookAuthProvider,signInWithEmailAndPassword, signInWithPhoneNumber ,createUserWithEmailAndPassword,RecaptchaVerifier} from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux"
export function useUserLoginAuth(){

    const dispatch = useDispatch()
    const handleLoginWithGoogle = () =>{
    const provider = new GoogleAuthProvider();

        signInWithPopup(firebaseAuth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log("google-login",credential)
                console.log("google-login",result)
                console.log("google-login",result.user)
                const token = credential.accessToken;
                dispatch(authActions.login({
                    user:result.user
                }))
                // The signed-in user info.
                const user = result.user;
    
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
        signInWithEmailAndPassword(firebaseAuth,data.email,data.password)
        .then((userData)=>{
            console.log("withEmail",userData)
        })
        .catch(()=>{

        })

    }

    const handleLoginWithPhone = (data) =>{
        captchaVerifier()
        const phoneNumber = '+916306278440'
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(firebaseAuth,phoneNumber,appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log(confirmationResult)
        })
        .catch((error) => {
        console.log(error);
        });

    }

    const handleLoginWithApple = ()=>{

    }

    const handleLoginWithFacebook = () =>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(firebaseAuth, provider)
        .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        });

    }

    function captchaVerifier(){
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                  handleLoginWithPhone();
                }
              });
          }
    }

    
    return {handleUserLoginWithEmail,handleLoginWithGoogle,handleLoginWithApple,handleLoginWithFacebook,handleLoginWithPhone}
}

export function useUserSignupAuth(){

    const handleUserSignup = (data) =>{
        window.alert("signedIn")
        // createUserWithEmailAndPassword(firebaseAuth,data.email,data.password)
        // .then((userCredential)=>{
        //     console.log("userData",userCredential)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }
    return {handleUserSignup}
}
