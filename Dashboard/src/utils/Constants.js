
const BASE_URL = process.env.BASE_URL;
 
export const PRIVATE_ENDPOINTS = {
    GET_TEMPLATE:BASE_URL+'/api/dashboard/my-template/',
    GET_CARDS:BASE_URL+'/api/card/cards/',
    GET_QUICK_SEND:BASE_URL+'/api/user/beneficiaries/list',
    GET_LATEST_ACTIONS:BASE_URL+'/api/payment/data/',
    GET_PAYMENT_STATS:BASE_URL+"/api/payment/dashboard/",
    GET_ALL_PAYMENT:BASE_URL+'/api/payment/data/',
    GET_PAYMENT_DETAIL:BASE_URL+'/api/payment/payment-details/',
    CREATE_PAYMENT:BASE_URL+'/api/payment/data/',
    GET_NOTIFICATION:BASE_URL+'/api/notification/notifications',
    GET_STATISTIC_STATS:BASE_URL+'/api/statistic/transaction-dashboard/',
    GET_STATISTIC_INVOICE_SENT_STATS:BASE_URL+'/api/statistic/invoice-sent-dashboard/',
    GET_STATISTIC_INVOICE_RECEIVED_STATS:BASE_URL+'/api/statistic/invoice-received-dashboard/',
    GET_STATISTIC_TRANSACTION:BASE_URL+'/api/statistic/transaction-list/',
    GET_STATISTIC_INVOICE_SENT:BASE_URL+'/api/statistic/invoice-sent-list/',
    GET_STATISTIC_INVOICE_RECEIVED:BASE_URL+'/api/statistic/invoice-received-list/',
    CREATE_CARD:BASE_URL+'/api/card/cards/',
    CREATE_SUPPORT:BASE_URL+'/api/support/contact/',
    GET_CREATE_BANK_ACCOUNT_LIST:BASE_URL+'/api/user/bank-accounts/',
    GET_BENEFICIARY_LIST:BASE_URL+'/api/user/beneficiaries/list',
    CREATE_BENEFICIARY_STEP_1:BASE_URL+'/api/user/beneficiaries/',
    CREATE_BENEFICIARY_STEP_2:BASE_URL+'/api/user/beneficiaries/',
    GET_CREATE_USER_KYC:BASE_URL+'/api/user/kyc/',
    UPDATE_USER_PROFILE:BASE_URL+'/api/user/profile/',
    GET_FAQS:BASE_URL+'/api/support/faqs/',
    GET_SUPPORT_INFO:BASE_URL+'/api/support/support-info/'
}



