import axios from "axios"
async function ApiCall({url,method,body,PRIVATE_API = false,header,current_user=null}){
    console.log(url)
    console.log("user",current_user)
    let token =""
    if (PRIVATE_API) {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            const cleanedToken = accessToken.replace(/^"(.*)"$/, '$1');
            token = `Bearer ${cleanedToken}`;
        } else {
            console.error("Access token not found in localStorage");
        }
    }
    try{
        let axiosCall;
        let config = {
                headers:
                {
                    "Authorization": token || null,
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
        console.log("AXIOS_ERROR",error)
        throw error;
    }
    

}

export default ApiCall