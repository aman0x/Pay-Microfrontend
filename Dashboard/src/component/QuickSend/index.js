import Avatar from '@mui/material/Avatar';
import { IoAdd } from "react-icons/io5";
import { useState ,useEffect} from "react"
/**------------------------------DUMMY USERS-------------------------------- */
const users = [
    {
        name: "John Doe",
        username: "john_doe",
        dp: "#"
    },
    {
        name: "Jane Smith",
        username: "jane_smith",
        dp: "#"
    },
    {
        name: "Alex Jones",
        username: "alex_jones",
        dp: "#"
    },
    {
        name: "Emma Watson",
        username: "emma_watson",
        dp: "#"
    },
    {
        name: "Michael Brown",
        username: "michael_brown",
        dp: "#"
    },
    {
        name: "Sarah Lee",
        username: "sarah_lee",
        dp: "#"
    },
    {
        name: "David Clark",
        username: "david_clark",
        dp: "#"
    },
    {
        name: "Linda Taylor",
        username: "linda_taylor",
        dp: "#"
    }
];

export  function QuickSend({handleQuickSendData}){
    const [quickSend,setQuickSend] = useState(users)
    useEffect(()=>{
        const fetchQuickSend =async()=>{
          const data = await handleQuickSendData()
          setQuickSend(data)
        }
        fetchQuickSend()
       
    },[])
    return(
        <div>
           <div className="flex items-center justify-between ">
            <p className="poppins-semibold text-lg">Quick Send</p>
            <p className="poppins-extralight text-xs underline cursor-pointer">All Beneficaries</p>
           </div>
           <div className='flex gap-2'>
            {
                quickSend.map((user,i)=>{
                    return(
                    <div key={i} className='flex flex-col gap-0.5 items-center' >
                    <div className='size-14'>
                    <Avatar sx={{
                        bgcolor:"#F4F4F6",
                        border:"2px solid white",
                        color:"black",
                        width:"100%",
                        height:"100%",
                        fontWeight:"bold",
                        }} alt={user.name} src={user.dp||"#"}
                    />
                    </div>
                    <p className='text-sm poppins-semibold'>{user.name}</p>
                    <p  className='text-xs poppins-extralight'>{user.username}</p>
                    </div>
                )})
            }
            <div className='flex flex-col gap-2' >
            <button className='rounded-[50%] border-2 p-[1.3rem]'>
            <IoAdd color='black'/>
            </button>
            <p className='text-xs poppins-extralight'>Add New</p>
            </div>
           
           
           </div>
        </div>
    )
}