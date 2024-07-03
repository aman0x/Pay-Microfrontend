import Avatar from '@mui/material/Avatar';
import { IoAdd } from "react-icons/io5";
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

export  function QuickSend(){
    return(
        <div >
           <div className="flex items-center justify-between my-2">
            <p className="poppins-semibold text-lg">Quick Send</p>
            <p className="poppins-extralight text-xs underline">All Beneficaries</p>
           </div>
           <div className='flex gap-2'>
            {
                users.map((user,i)=>{
                    return(
                    <div key={i} className='flex flex-col gap-0.5 items-center' >
                    <Avatar sx={{
                        bgcolor:"#F4F4F6",
                        border:"2px solid white",
                        width:"60px",
                        height:"60px",
                        color:"black",
                        fontWeight:"bold"
                        }} alt={user.name} src={user.dp}
                    />
                    <p className='text-sm poppins-semibold'>{user.name}</p>
                    <p  className='text-xs poppins-extralight'>@{user.username}</p>
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