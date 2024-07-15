import ApiCall from "controllers/AxiosInstance/index.js"
import {useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
export function useDashboard(){
    const user = useSelector(state=>state.auth.user)

   const handleTemplateData=async()=>{
    try {
        const arr = []
        const response = await ApiCall({ 
          url: PRIVATE_ENDPOINTS.GET_TEMPLATE, 
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
    toast("Error in getting Templates");
    return [];
    }
   }

   const handlePaymentCardData=async()=>{
    try{
        const arr = []
       const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_CARDS,method:"GET",PRIVATE_API:true,current_user:user})
       if(Array.isArray(response.data)){
        return response.data;
    }
    else{
        arr.push(response.data)
        return arr;
    }
        
    }
    catch(e){
        toast("Error in getting Payment Cards");
        return [];
    }
       
    }

    const handleQuickSendData=async()=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_QUICK_SEND,method:"GET",PRIVATE_API:true,current_user:user})
           if(Array.isArray(response.data)){
            return response.data;
        }
        else{
            arr.push(response.data)
            return arr;
        }
            
        }
        catch(e){
            toast("Error in getting QuickSends");
            return [];
        }
    }
    
    const handleLatestActionData=async()=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_LATEST_ACTIONS,method:"GET",PRIVATE_API:true,current_user:user})
           
           if(Array.isArray(response.data)){
            return response.data;
            }
            else{
                arr.push(response.data)
                return arr;
            }
            
        }
        catch(e){
            toast("Error in getting Latest Actions");
            return [];
        }
   }
   return{handleLatestActionData,handleTemplateData,handleQuickSendData,handlePaymentCardData}
}

export function usePayment(){
    const user = useSelector(state=>state.auth.user)

    const handlePaymentStats=async()=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_PAYMENT_STATS, 
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
    const handlePaymentData=async()=>{
        try {
            const arr = []
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_ALL_PAYMENT, 
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
        toast("Error in getting Templates");
        return [];
        }
       }
       const handlePaymentDetail=async(paymentId=1)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_PAYMENT_DETAIL+ `?${paymentId}`, 
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
    const handlePaymentCreate=async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_PAYMENT, 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            return response.data;
          }
        catch (error) {
        toast("Error in getting Templates");
        }
    }
    return {handlePaymentCreate,handlePaymentDetail,handlePaymentStats,handlePaymentData}
}

export function useStatistic(){
    const user = useSelector(state=>state.auth.user)

    const handleStatisticStats=async(index)=>{
        (index)
        try {
            const response = await ApiCall({ 
              url: index>0?(index===1?PRIVATE_ENDPOINTS.GET_STATISTIC_INVOICE_SENT_STATS:PRIVATE_ENDPOINTS.GET_STATISTIC_INVOICE_RECEIVED_STATS):PRIVATE_ENDPOINTS.GET_STATISTIC_STATS, 
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
    const handleStatisticData =async(index)=>{

        try{
            const arr = []
           const response = await ApiCall({
            url: index>0?(index===1?PRIVATE_ENDPOINTS.GET_STATISTIC_INVOICE_SENT:PRIVATE_ENDPOINTS.GET_STATISTIC_INVOICE_RECEIVED):PRIVATE_ENDPOINTS.GET_STATISTIC_TRANSACTION, 
            method:"GET",
            PRIVATE_API:true,
            current_user:user
        })
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
            toast("Error in getting Latest Actions");
            return [];
        }
    }
    return{handleStatisticData,handleStatisticStats}
}
export function useNotfication(){
    const user = useSelector(state=>state.auth.user)
    const handleGetNotification = async()=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_NOTIFICATION,method:"GET",PRIVATE_API:true,current_user:user})
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
            toast("Error in getting Latest Actions");
            return [];
        }
    }
    return{handleGetNotification}
}
