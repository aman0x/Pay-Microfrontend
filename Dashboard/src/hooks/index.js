import ApiCall from "controllers/AxiosInstance/index.js"
import {useDispatch, useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import {authActions} from "Auth/authReducer"
export function useDashboard(){
    const user_id = useSelector(state=>state.auth.user_id)
    const user = useSelector(state=>state.auth.user)
   const handleTemplateData=async()=>{
    try {
        const arr = []
        const response = await ApiCall({ 
          url: PRIVATE_ENDPOINTS.GET_CREATE_BANK_ACCOUNT_LIST, 
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

    const handlePaymentCardDetail=async(id=1)=>{
        try{

           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_CARDS+`${id}/`,method:"GET",PRIVATE_API:true,current_user:user})
            return response.data;
     
        }
        catch(e){
            console.log("error",e)
            toast("Error in getting Payment Cards1")
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
   return{handleLatestActionData,handleTemplateData,handleQuickSendData,handlePaymentCardData,handlePaymentCardDetail}
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
              url: PRIVATE_ENDPOINTS.GET_ALL_PAYMENT+ `${paymentId}/`, 
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
            // toast("Error in getting Latest Actions");
            return [];
        }
    }
    return{handleStatisticData,handleStatisticStats}
}
export function useNotfication(){
    const user = useSelector(state=>state.auth.user)
    const handleGetNotification = async(topic)=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_NOTIFICATION+'?topic='+topic
            ,method:"GET",PRIVATE_API:true,current_user:user})
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
    const handleSupportInfo = async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_SUPPORT_INFO, 
              method: "GET", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            return response.data;
          }
        catch (error) {
        toast("Error Getting Support Info");
        }
    }
    const handleGetFaq = async(topic="general")=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_FAQS+`?topic=${topic}`
            ,method:"GET",PRIVATE_API:true,current_user:user})
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
            //toast("Error in getting Faqs");
            return [];
        }
    }
    return{handleSupport,handleGetFaq,handleSupportInfo}
}

export function useAccounts(){
    const dispatch  = useDispatch()
    const user = useSelector(state=>state.auth.user)
    const user_id = useSelector(state=>state.auth.user_id)
    const navigate = useNavigate()
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
    const handleAddBankAccount = async(data,id)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_CREATE_BANK_ACCOUNT_LIST+'add/', 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            navigate(-1)
            toast.success("Account Added!!")
            return response.data;
          }
        catch (error) {
        toast("Error Sending Support");
        }
    }
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
            toast("Error in getting Latest Actions");
            return [];
        }
    }
    const handleAddBeneficiary= async(data)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_BENEFICIARY_STEP_1, 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            return response.data;
          }
        catch (error) {
        toast("Error  Adding Beneficiaries");
        }
    }
    const handleAddBeneficiaryBank= async(data,id)=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.CREATE_BENEFICIARY_STEP_2+id+'/update-bank/', 
              method: "POST", 
              body:data,
              PRIVATE_API: true, 
              current_user: user 
            });
            toast("Beneficiary Added")
            navigate(-1)
            return response.data; 
          }
        catch (error) {
        toast("Error  Adding Beneficiaries");
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
    const handleUserProfile = async(data)=>{
        try{
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.UPDATE_USER_PROFILE,
                method: "PUT",
                body:data,
                PRIVATE_API: true, 
                current_user: user 
              });
              dispatch(authActions.setUser({user:response.data}))
              toast.success("Profile Updated")
              return response.data;
             
        }
        catch(e){
            toast("Error in User Profile");
        }
    }
    const handleDeleteBank = async()=>{
        try{
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.GET_CREATE_USER_KYC+'1/',
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
    const handleGetBankById = async(id=1)=>{
        try{
            const response = await ApiCall({ 
                url: PRIVATE_ENDPOINTS.GET_CREATE_BANK_ACCOUNT_LIST+id+'/',
                method:"GET", 
                PRIVATE_API: true, 
                current_user: user 
              });
              return response.data;
        }
        catch(e){
            console.log("err",e)
            toast("Error In Bank");
        }
    }
   
    return{handleAddBankAccount,handleGetBankAccount,handleGetBeneficiary,handleAddBeneficiary,handleAddBeneficiaryBank,handleGetCreateUserKyc,handleUserProfile,handleGetBankById}
}