import Avatar from '@mui/material/Avatar';
import { IoAdd } from "react-icons/io5";
/**------------------------------DUMMY USERS-------------------------------- */
const users = [
    {
        name: "John Doe",
        username: "john_doe",
        dp: "https://example.com/images/john_doe.jpg"
    },
    {
        name: "Jane Smith",
        username: "jane_smith",
        dp: "https://example.com/images/jane_smith.jpg"
    },
    {
        name: "Alex Jones",
        username: "alex_jones",
        dp: "https://example.com/images/alex_jones.jpg"
    },
    {
        name: "Emma Watson",
        username: "emma_watson",
        dp: "https://example.com/images/emma_watson.jpg"
    },
    {
        name: "Michael Brown",
        username: "michael_brown",
        dp: "https://example.com/images/michael_brown.jpg"
    },
    {
        name: "Sarah Lee",
        username: "sarah_lee",
        dp: "https://example.com/images/sarah_lee.jpg"
    },
    {
        name: "David Clark",
        username: "david_clark",
        dp: "https://example.com/images/david_clark.jpg"
    },
    {
        name: "Linda Taylor",
        username: "linda_taylor",
        dp: "https://example.com/images/linda_taylor.jpg"
    }
];

export  function QuickSend(){
    return(
        <div className="m-[1rem]">
           <div className="flex items-center justify-between my-2">
            <p className="poppins-semibold text-lg">Quick Send</p>
            <p className="poppins-extralight text-xs underline">All Beneficaries</p>
           </div>
           <div className='flex gap-2'>
            {
                users.map((user)=>{
                    return(
                    <div className='flex flex-col gap-0.5 items-center' >
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