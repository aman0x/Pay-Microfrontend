
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL)
export const PRIVATE_ENDPOINTS = {
    GET_TEMPLATE:BASE_URL+'/api/dashboard/my-template/',
    GET_CARDS:BASE_URL+'/api/dashboard/my-card/',
    GET_QUICK_SEND:BASE_URL+'/api/dashboard/quick-send/',
    GET_LATEST_ACTIONS:BASE_URL+'/api/dashboard/latest-actions/'
}



