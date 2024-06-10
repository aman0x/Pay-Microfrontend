
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL)
export const PRIVATE_ENDPOINTS = {
    
}

export const PUBLIC_ENDPOINTS  = {
    login:BASE_URL + 'accounts/login',
    logout:BASE_URL +'accounts/logout',
    signIn:BASE_URL +'accounts/sign-in'
}

