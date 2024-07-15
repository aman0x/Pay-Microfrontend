import ApiCall from "controllers/AxiosInstance/index.js"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import { useSelector } from "react-redux"
export function useSideBar(){
    const user = useSelector(state=>state.auth.user)
    const handleTotalStats=async()=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_STATS, 
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
    const handleMonthStats=async()=>{
        try {
            const response = await ApiCall({ 
              url: PRIVATE_ENDPOINTS.GET_MONTH_STATS, 
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
    return{handleMonthStats,handleTotalStats}
}

