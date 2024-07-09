
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL)
export const PRIVATE_ENDPOINTS = {
    
}

export const PUBLIC_ENDPOINTS  = {
    login:BASE_URL + '/api/user/login/',
    logout:BASE_URL +'',
    signIn:BASE_URL +'/api/user/register/'
}

