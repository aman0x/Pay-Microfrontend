
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL)
export const PRIVATE_ENDPOINTS = {
    GET_STATS:BASE_URL + '/api/dashboard/stats/',
    GET_MONTH_STATS:BASE_URL+'/api/dashboard/total-month-spendings/'
}

export const PUBLIC_ENDPOINTS  = {
   
}

