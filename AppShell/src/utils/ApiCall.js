import axios from "axios"
import { useSelector } from "react-redux";
async function ApiCall({url,method,body,PRIVATE_API = false,header}){

    try{
        const current_user = useSelector(state => state.auth.user)||null
        let axiosCall;
        let config = {
                headers:
                {
                    "Authorization": (current_user && PRIVATE_API && current_user?.accessToken) || null,
                    ...header
                }
            }

        switch (method.toUpperCase()) {
            case 'GET':
                axiosCall = axios.get(url, config);
                break;
            case 'POST':
                axiosCall = axios.post(url, body, config);
                break;
            case 'DELETE':
                axiosCall = axios.delete(url, config);
                break;
            case 'PUT':
                axiosCall = axios.put(url,body,config)
                break;
            case 'PATCH':
                axiosCall = axios.patch(url,body,config)
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }
        return await axiosCall;

    }
    catch(error){
        throw error;
    }
    

}

export default ApiCall