
const BASE_URL = process.env.BASE_URL;
 
export const PRIVATE_ENDPOINTS = {
   GET_SENT_INVOICE_STATS : BASE_URL+'/api/invoice/sent-dashboard/',
   GET_RECEIVED_INVOICE_STATS : BASE_URL+'/api/invoice/received-dashboard/',
   GET_ALL_INVOICE:BASE_URL+'/api/invoice/invoices/',
   GET_INVOICE_DETAIL:BASE_URL+'/api/invoice/invoice-details/',
   GET_NEW_INVOICE_LIST:BASE_URL+'/api/invoice/all-invoices/',
   CREATE_INVOICE:BASE_URL+'/api/invoice/invoices/',
   GET_NEW_INVOICES:BASE_URL+'/api/invoice/new-invoices/'
}



