
const BASE_URL = process.env.BASE_URL;
 
export const PRIVATE_ENDPOINTS = {
    GET_USER_DETAIL:'/api/user/register/'
}

export const PUBLIC_ENDPOINTS  = {
    login:BASE_URL + '/api/user/login/email/',
    logout:BASE_URL +'',
    signIn:BASE_URL +'/api/user/register/',
    GOOGLE_LOGIN:BASE_URL+'/api/user/api/google-login/',
    PHONE_LOGIN:BASE_URL+'/api/user/otp/request/',
    OTP_VERIFY:BASE_URL+'/api/user/otp/verify'
}

