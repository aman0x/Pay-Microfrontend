
const BASE_URL = process.env.BASE_URL;
 
export const PRIVATE_ENDPOINTS = {
    GET_USER_DETAIL:'/api/user/register/'
}

export const PUBLIC_ENDPOINTS  = {
    login:BASE_URL + '/api/user/login/email/',
    logout:BASE_URL +'',
    signIn:BASE_URL +'/api/user/register/'
}

