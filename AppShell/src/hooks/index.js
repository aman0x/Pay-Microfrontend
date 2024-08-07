import ApiCall from "controllers/AxiosInstance/index.js"
import { PRIVATE_ENDPOINTS } from "../utils/Constants.js"
import { useSelector,useDispatch } from "react-redux"
import {authActions} from "Auth/authReducer"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
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
            toast("Error in getting Templates");
        }
    }
    return{handleMonthStats,handleTotalStats}
}

export function useUserCommon(){
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const user = useSelector(state=>state.auth.user)
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
        toast("Error in getting Payment Cards1");
        return [];
    }
       
    }
  const handleGetUserDetail = async(id) =>{
      try {
          const response = await ApiCall({ 
            url: PRIVATE_ENDPOINTS.GET_USER_DETAIL, 
            method: "GET", 
            PRIVATE_API: true, 
          });
          dispatch(authActions.setUser({user:response.data}))
          return response.data;
          
        }
      catch (error) {
      //toast("Error Sending Support");
      }
  }
  return {handleGetUserDetail,handlePaymentCardData}
}

