import {useEffect} from "react"
import ApiCall from "../utils/ApiCall.js"
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
           console.log("hellar", response)
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
