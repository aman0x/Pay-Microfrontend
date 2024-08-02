import Avatar from "@mui/material/Avatar";
import { IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "#hooks/index";
import { FaCircleArrowRight } from "react-icons/fa6";

// {
//     "id": 1,
//     "user": 1,
//     "name": "Shyam",
//     "phone_number": "9123456789",
//     "bank_account": 9,
//     "verified": false,
//     "verified_at": "2024-07-22T04:37:29.916618Z",
//     "created_at": "2024-08-01T12:00:00Z",
//     "deleted": false
// }

function stringAvatar(name) {
  return {
    children: `${name.split("")[0]}${name.split("")[1]}`,
  };
}

export function MobilePaymentStep2({
  stepIndex,
  setStepIndex,
  selectedName,
  setSelectedName,
  setSelectedBeneficiary
}) {
  const [quickSend, setQuickSend] = useState([]);
  const navigate = useNavigate();

  const [serachValue, setSearchValue] = useState("");
  const { handleQuickSendData } = useDashboard();

  useEffect(() => {
    const fetchQuickSend = async () => {
      const data = await handleQuickSendData();
      setQuickSend(data.results);
    };
    fetchQuickSend();
  }, [serachValue]);

  return (
    <>
      <div className="p-5 mt-2 w-full mb-16 md:mb-0">
        <div className="relative flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-center text-[16px] text-[#232B31] poppins-semibold">
            Choose Receiver
          </div>
          <div className="text-[10px] text-[#A3A6A9]">{`0${
            stepIndex + 1
          }/03`}</div>
          <div className="absolute left-0" onClick={() => setStepIndex(0)}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="18"
                y="18.5"
                width="18"
                height="18"
                rx="8"
                transform="rotate(-180 18 18.5)"
                fill="#F0F1F2"
              />
              <path
                d="M10 11.5L8 9.5L10 7.5"
                stroke="#4E5459"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[#232B31] poppins-semibold text-14px">
            Often used
          </p>
          <div className="flex mt-2 gap-2 items-center">
            <img
              src="/images/notify.svg"
              width={14}
              height={14}
              alt="notify-icon"
            />
            <p className="poppins-light text-[10px] text-[#A3A6A9]">
              Long press to user avatar for details
            </p>
          </div>
        </div>

        <div className="flex max-w-full overflow-x-auto gap-5 mt-5">
          {quickSend?.map((user, i) => {
            return (
              <div key={i} className="flex flex-col gap-0.5 items-center">
                <div
                  className="size-20 mb-1"
                  onClick={() => {
                    setSelectedName(user.name)
                    setSelectedBeneficiary(user)
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        selectedName === user.name ? "#ecbfe8" : "#F4F4F6",
                      border:
                        selectedName === user.name
                          ? "2.5px solid #e4a6cc"
                          : "2.5px solid white",
                      color: "#B6B8BA",
                      width: "100%",
                      height: "100%",
                      fontWeight: "bold",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    alt={user.name}
                    src={user.dp || "#"}
                    {...stringAvatar(user.name)}
                  />
                </div>
                <p className="text-[10px] text-center poppins-regular text-[#A3A6A9] mb-4">
                  {user.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex gap-1 items-center mt-4 mb-2">
            <div className="poppins-semibold">All Contacts</div>
            <div className="text-xs poppins-light text-[#787D81] ">
              ({quickSend?.length})
            </div>
          </div>
          <div
            onClick={() => navigate("/dashboard/accounts/add-new")}
            className="flex gap-2 items-center"
          >
            <div
              onClick={() => {
                navigate("/dashboard/beneficiary/add-new");
              }}
              className="text-xs text-[#787D81] poppins-lights cursor-pointer"
            >
              Add New
            </div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM12 9.75H9.75V12C9.75 12.1989 9.67099 12.3897 9.53033 12.5303C9.38968 12.671 9.19892 12.75 9 12.75C8.80109 12.75 8.61033 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V9.75H6C5.80109 9.75 5.61033 9.67098 5.46967 9.53033C5.32902 9.38968 5.25 9.19891 5.25 9C5.25 8.80109 5.32902 8.61032 5.46967 8.46967C5.61033 8.32902 5.80109 8.25 6 8.25H8.25V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61033 5.32902 8.80109 5.25 9 5.25C9.19892 5.25 9.38968 5.32902 9.53033 5.46967C9.67099 5.61032 9.75 5.80109 9.75 6V8.25H12C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75Z"
                  fill="#232B31"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-4">
          <input
            type="text"
            id="voice-search"
            value={serachValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-[#F0F1F2] h-14 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl block py-[0.7rem] px-5 poppins-light-italic"
            placeholder="Search for Contacts..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906 6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825 1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z"
                fill="#232B31"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 mb-4">
          <div
            className="flex flex-col gap-0.5"
            onClick={() => {
              navigate("/dashboard/beneficiary/add-new");
            }}
          >
            <button className="rounded-[50%] mb-2 size-16 border-2 p-[1.3rem] flex items-center justify-center">
              <IoAdd color="#B6B8BA" />
            </button>
            <p className="text-xs poppins-regular text-[#B6B8BA] text-center">
              ADD NEW
            </p>
          </div>
          {quickSend.map((user, i) => {
            return (
              <div key={i} className="flex flex-col gap-0.5 items-center">
                <div
                  className="size-16 mb-2"
                  onClick={() => setSelectedName(user.name)}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        selectedName === user.name ? "#ecbfe8" : "#F4F4F6",
                      border:
                        selectedName === user.name
                          ? "2px solid #e4a6cc"
                          : "2px solid white",
                      color: "#B6B8BA",
                      width: "100%",
                      height: "100%",
                      fontWeight: "bold",
                    }}
                    alt={user.name}
                    src={user.dp || "#"}
                  />
                </div>
                <p className="text-[8px] poppins-semibold text-[#A3A6A9]">
                  {user.name}
                </p>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          onClick={() => {
            if (selectedName !== "") {
              setStepIndex(2);
            }
          }}
          className={`my-4 flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${
            selectedName !== "" ? "bg-[#232B31]" : "bg-[#cdced0]"
          } px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          <div className="text-[12px]">Next</div>
          <span className="flex justify-center items-center size-8">
            <FaCircleArrowRight style={{ color: "white" }} />
          </span>
        </button>
      </div>
    </>
  );
}
