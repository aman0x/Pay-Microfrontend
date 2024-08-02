import ApiCall from "controllers/AxiosInstance/index.js"
import {useSelector} from "react-redux"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import {toast} from "react-toastify"
export function useReport(){
    const user = useSelector(state=>state.auth.user)
    const handleReportData=async()=>{
        try{
            
           const response = await ApiCall({url:PRIVATE_ENDPOINTS.GET_REPORT,method:"GET",PRIVATE_API:true,current_user:user})
          
            return response.data;
        
            
        }
        catch(e){
            toast("Error in getting report");
            return [];
        }
           
    }
    return {handleReportData}
}
