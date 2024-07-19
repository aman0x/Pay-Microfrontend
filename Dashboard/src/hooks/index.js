import ApiCall from "controllers/AxiosInstance/index.js"
import {useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
export function useDashboard(){
    const user_id = useSelector(state=>state.auth.user_id)
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
        console.log("error",e)
        toast("Error in getting Payment Cards1");
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
    const user_id = useSelector(state=>state.auth.user_id)
    console.log("user",user)
    const navigate = useNavigate()
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
        const user_data = {
            ...data,
            user:user_id
        }
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_PAYMENT, 
              method: "POST", 
              body:user_data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast.success("Payment Created!!")
            navigate(-1)
            return response.data;
          }
        catch (error) {
        toast("Error creating payment");
        }
    }

    const handleAddCard = async(data)=>{
        const user_data = {...data,
            user:user_id
        }
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_CARD, 
              method: "POST", 
              body:user_data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast.success("Card is Added Successfully!!")
            navigate(-1)
            return response.data;
           
          }
        catch (error) {
            console.log("dataHok",error)
            toast("Error in getting Templates");
        }
    }
    return {handlePaymentCreate,handlePaymentDetail,handlePaymentStats,handlePaymentData,handleAddCard}
}



export function useStatistic(){
    const user = useSelector(state=>state.auth.user)

    const handleStatisticStats=async(index)=>{
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

export function useSupport(){
    const user = useSelector(state=>state.auth.user)
    const handleSupport = async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_SUPPORT, 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast.success("Query Sended!!")
            return response.data;
          }
        catch (error) {
        toast("Error Sending Support");
        }
    }
    return{handleSupport}
}

export function useAccounts(){
    const user = useSelector(state=>state.auth.user)
    const user_id = useSelector(state=>state.auth.user_id)
    const handleGetBankAccount = async() =>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_CREATE_BANK_ACCOUNT_LIST,method:"GET",PRIVATE_API:true,current_user:user})
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
    const handleAddBankAccount = async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_CREATE_BANK_ACCOUNT_LIST, 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast.success("Query Sended!!")
            return response.data;
          }
        catch (error) {
        toast("Error Sending Support");
        }
    }
    const handleGetBeneficiary = async() =>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_CREATE_BENEFICIARY_LIST,method:"GET",PRIVATE_API:true,current_user:user})
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
    const handleAddBeneficiary= async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_CREATE_BENEFICIARY_LIST, 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast.success("Query Sended!!")
            return response.data;
          }
        catch (error) {
        toast("Error Sending Support");
        }
    }
    const handleGetCreateUserKyc = async(data)=>{
        try{
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.GET_CREATE_USER_KYC+'1/',
                //`${user_id}/`, 
                method: data?"PUT":"GET", 
                body:data,
                PRIVATE_API: true, 
                current_user: user 
              });
              return response.data;
        }
        catch(e){
            toast("Error in KYC");
        }
    }
   
    return{handleAddBankAccount,handleGetBankAccount,handleGetBeneficiary,handleAddBeneficiary,handleGetCreateUserKyc}
}