import { IoAddCircleSharp } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import  { useEffect ,useState}from "react"
import {Link} from "react-router-dom"
const  DUMMY_BANKS = [
    {
        bank_name:" HDFC Bank",
        bank_branch_name:"KODAK",
        ifsc_code:" HDFC000162",
        account_holder_name:"ANANTHARAPU ARUNA THEJASWINI"
    },
    {
        bank_name:" HDFC Bank",
        bank_branch_name:"KODAK",
        ifsc_code:" HDFC000162",
        account_holder_name:"ANANTHARAPU ARUNA THEJASWINI"
    }
]


function Templates({userId=null,handleTemplateData}){
    const [templates,setTemplates] = useState(DUMMY_BANKS)
    useEffect(() => {
        const fetchTemplates = async() =>{
           const data = await handleTemplateData()
           console.log(data)
           setTemplates(data)
        }
        fetchTemplates();
      
    }, [userId])
    
    return(
        <div className="w-full ">
            <div className="flex justify-between mb-4">
                <p className="poppins-semibold">My Templates</p>
                <div className="flex text-xs gap-1 items-center">
                <IoAddCircleSharp size="14px" />
                <p className="poppins-light text-gray-500">Create</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
            {
                templates.map((bank,i)=>{
                    return(
                        <div key={i} className="flex flex-col bg-white p-[1.2rem] rounded-xl min-h-[5.6rem] justify-between">
                            <div className="flex justify-between poppins-regular text-xs text-gray-600">
                                <div className="flex gap-2">
                                <BsBank2 color="gray" />
                                <div>{bank.bank_name},{bank.bank_branch_name}</div> 
                                </div>
                                <div>
                                   {bank.ifsc_code}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="poppins-semibold text-sm">
                                {bank.account_holder_name}
                                </div>
                                <Link to={'/payment/new-payment'} className="underline text-gray-500 poppins-light text-sm">
                                    Make Payment
                                </Link>
                                
                            </div>

                        </div>
                    )
                })
            }
            </div>
            <div className="text-right mt-2 cursor-pointer">
                <p className="poppins-extralight text-xs underline">All Templates</p>
            </div>
            
        </div>
    )
}

export default Templates;