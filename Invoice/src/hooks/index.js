import ApiCall from "controllers/AxiosInstance/index.js"
import {useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
export function useInvoice(){
    const navigate  = useNavigate()
    const user = useSelector(state=>state.auth.user)
    const user_id = useSelector(state=>state.auth.user_id)
    const handleInvoiceStats=async(isSent=true)=>{
        try {
            const response = await ApiCall({ 
                url: isSent?PRIVATE_ENDPOINTS.GET_SENT_INVOICE_STATS:PRIVATE_ENDPOINTS.GET_RECEIVED_INVOICE_STATS, 
                method: "GET", 
                PRIVATE_API: true, 
                current_user: user 
            });
            return response.data;
            }
        catch (error) {
            console.log("dataHok",error)
        toast("Error in getting Templates");
        }
    }
    const handleInvoiceData=async(query)=>{
        try {
            const arr = []
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.GET_ALL_INVOICE+query, 
                method: "GET", 
                PRIVATE_API: true, 
                current_user: user 
            });
            if(Array.isArray(response.data)){
                return response.data;
            }
            else{
                arr.push(response.data)
                return arr;
            }
                
            
            }
        catch (error) {
        toast("Invoice Error");
        return [];
        }
        }
        const handleNewInvoiceData=async()=>{
            try {
                const arr = []
                const response = await ApiCall({ 
                    url: PRIVATE_ENDPOINTS.GET_NEW_INVOICES, 
                    method: "GET", 
                    PRIVATE_API: true, 
                    current_user: user 
                });
                if(Array.isArray(response.data)){
                    return response.data;
                }
                else{
                    arr.push(response.data)
                    return arr;
                }
                    
                
                }
            catch (error) {
            toast("Error in getting Invoices");
            return [];
            }
            }
        const handleInvoiceDetail=async(invoiceId=1)=>{
        try {
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.GET_ALL_INVOICE+ `${invoiceId}/`, 
                method: "GET", 
                PRIVATE_API: true, 
                current_user: user 
            });
            return response.data;
            }
        catch (error) {
        toast("Error in getting Templates");
        }
    }
    const handleInvoiceCreate=async(data)=>{
        
        try {
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.CREATE_INVOICE, 
                method: "POST", 
                body:data,
                PRIVATE_API: true, 
                current_user: user 
            });
            toast.success("Invoice Sent Succesfully")
            navigate(-1)
            return response.data;
            }
        catch (error) {
        toast("Error in Sending Invoice");
        }
    }
    return {handleInvoiceStats,handleInvoiceData,handleInvoiceDetail,handleInvoiceCreate,handleNewInvoiceData}
    
}

export function useCommon(){
    const navigate  = useNavigate()
    const user = useSelector(state=>state.auth.user)
    const handleGetBeneficiary = async() =>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_BENEFICIARY_LIST,method:"GET",PRIVATE_API:true,current_user:user})
           console.log(response)
           if(Array.isArray(response.data)){
            return response.data;
            }
            else{
                arr.push(response.data)
                return arr;
            }
            
        }
        catch(e){
            toast("Error in getting Beneficiaries");
            return [];
        }
    }

    return {handleGetBeneficiary}
}
