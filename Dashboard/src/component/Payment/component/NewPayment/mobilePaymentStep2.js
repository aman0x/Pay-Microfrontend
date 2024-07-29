import Avatar from '@mui/material/Avatar';
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
];

export function MobilePaymentStep2({ stepIndex, setStepIndex }) {
    const [quickSend, setQuickSend] = useState(users);
    const navigate = useNavigate();

    return (
        <div className='w-full'>
            <div className="flex flex-col items-center justify-center my-4">
                <div className="text-center poppins-semibold">Choose Receiver</div>
                <div className="text-[10px]">
                    {`0${stepIndex}/03`}
                </div>
            </div>
            <div>
            <div>Often used</div>
            <div>Long press to user avatar for details</div>
            </div>
            <div className='overflow-x-auto hide-scrollbar max-w-[30rem]' style={{ paddingLeft: '1rem' }}>
                <div className='flex gap-5' style={{ marginRight: '-1rem' }}>
                    {
                        quickSend.map((user, i) => (
                            <div key={i} className='flex flex-col gap-0.5 items-center min-w-[80px]'>
                                <div className='size-20 mb-1'>
                                    <Avatar
                                        sx={{
                                            bgcolor: "#F4F4F6",
                                            border: "2px solid white",
                                            color: "black",
                                            width: "100%",
                                            height: "100%",
                                            fontWeight: "bold",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow here
                                        }}
                                        alt={user.name}
                                        src={user.dp || "#"}
                                    />
                                </div>
                                <p className='text-xs poppins-semibold text-[#232B31]'>{user.name}</p>
                            </div>
                        ))
                    }
                    {/* <div className='flex flex-col gap-0.5 min-w-[80px]' 
                        onClick={() => navigate('/dashboard/beneficiary/add-new')}>
                        <button className='rounded-[50%] mb-1 size-14 border-2 p-[1.3rem] flex items-center justify-center'>
                            <IoAdd color='#B6B8BA' />
                        </button>
                        <p className='text-xs poppins-regular text-[#B6B8BA]'>Add New</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
