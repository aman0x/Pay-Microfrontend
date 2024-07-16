
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL)
export const PRIVATE_ENDPOINTS = {
    GET_TEMPLATE:BASE_URL+'/api/dashboard/my-template/',
    GET_CARDS:BASE_URL+'/api/dashboard/my-card/',
    GET_QUICK_SEND:BASE_URL+'/api/dashboard/quick-send/',
    GET_LATEST_ACTIONS:BASE_URL+'/api/dashboard/latest-actions/',
    GET_PAYMENT_STATS:BASE_URL+"/api/payment/dashboard/",
    GET_ALL_PAYMENT:BASE_URL+'/api/payment/all-payments/',
    GET_PAYMENT_DETAIL:BASE_URL+'/api/payment/payment-details/',
    CREATE_PAYMENT:BASE_URL+'/api/payment/data/',
    GET_NOTIFICATION:BASE_URL+'/api/notification/data/',
    GET_STATISTIC_STATS:BASE_URL+'/api/statistic/transaction-dashboard/',
    GET_STATISTIC_INVOICE_SENT_STATS:BASE_URL+'/api/statistic/invoice-sent-dashboard/',
    GET_STATISTIC_INVOICE_RECEIVED_STATS:BASE_URL+'/api/statistic/invoice-received-dashboard/',
    GET_STATISTIC_TRANSACTION:BASE_URL+'/api/statistic/transaction-list/',
    GET_STATISTIC_INVOICE_SENT:BASE_URL+'/api/statistic/invoice-sent-list/',
    GET_STATISTIC_INVOICE_RECEIVED:BASE_URL+'/api/statistic/invoice-received-list/',
    CREATE_CARD:BASE_URL+'/api/card/data/',
    CREATE_SUPPORT:BASE_URL+'/api/support/data/',

    GET_CREATE_BANK_ACCOUNT_LIST:BASE_URL+'/api/account/bank/',

    GET_CREATE_BENEFICIARY_LIST:BASE_URL+'/api/account/beneficiary/'
}



