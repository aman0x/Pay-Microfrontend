import ApiCall from "controllers/AxiosInstance/index.js"
import {useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
export function useReport(){
    const user = useSelector(state=>state.auth.user)
    const handleReportData=async()=>{
        try{
            const arr = []
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_REPORT,method:"GET",PRIVATE_API:true,current_user:user})
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
    return {handleReportData}
}
