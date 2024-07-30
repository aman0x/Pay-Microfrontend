import { FaCircleArrowRight, FaSquare } from "react-icons/fa6";
import { useState } from "react";

import "./style.css";
import { Formik } from "formik";
const user_type = ["INDIVIDUAL", "BUSINESS"];
const bank_type = ["SAVINGS", "CURRENT"];
function AddBenficiaryBank({ handleSubmitBank }) {
  const [isPaymentTypeMenu, setPaymentMenuView] = useState(false);
  const [isReceiverMenu, setReceiversMenuView] = useState(false);
  const [bankTypeIndex, setBankTypeIndex] = useState(0);
  const [accountTypeIndex, setAccountTypeIndex] = useState(0);
  return (
    <div className="mx-auto form-width mb-20 md:mb-0 flex flex-col gap-8 mt-4">
      <div className="text-center poppins-semibold">Enter Data</div>
      <Formik
        initialValues={{
          account_name: "",
          account_number: "",
          ifsc_code: "",
          pan_no: "",
          gstin_no: "",
          bank_name: "",
        }}
        validate={(values) => {
          const errors = {};
          if (values.account_name < 3) {
            errors.account_name = "Name Should be atleast 4 Characters";
          } else if (values.account_number < 11) {
            errors.account_number = "Enter Valid Account Number";
          }
           else if (values.ifsc_code < 4) {
            errors.ifsc_code = "Enter Valid IFSC CODE";
          } 
          else if (values.pan_no < 10) {
            errors.pan_no = "Enter Valid Pan No.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const data = {
            ...values,
            account_type: user_type[accountTypeIndex],
            account_type_2: bank_type[bankTypeIndex],
          };
          handleSubmitBank(data);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  name="account_name"
                  value={values.account_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Account Name"
                />
                {/* <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div> */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="account_number"
                  value={values.account_number}
                  maxLength={16}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Account Number"
                />
                {/* <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div> */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="bank_name"
                  value={values.bank_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Bank Name"
                />
                {/* <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div> */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="ifsc_code"
                  value={values.ifsc_code}
                  onChange={handleChange}
                  maxLength={11}
                  onBlur={handleBlur}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="IFSC Code"
                />
                {/* <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div> */}
              </div>
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    name="user_account_type"
                    value={
                      accountTypeIndex !== null
                        ? user_type[accountTypeIndex]
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Set Account Type"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                    onClick={() => setReceiversMenuView(!isReceiverMenu)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="18"
                        width="18"
                        height="18"
                        rx="8"
                        transform="rotate(90 18 0)"
                        fill="#DFE0E2"
                      />
                      <path
                        d="M11 8L9 10L7 8"
                        stroke="#4E5459"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {isReceiverMenu && (
                  <ReceiversMenu
                    cardIndex={accountTypeIndex}
                    setCardIndex={setAccountTypeIndex}
                    setReceiversMenuView={setReceiversMenuView}
                  />
                )}
              </div>

              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    name="bank_account_type"
                    value={
                      bankTypeIndex !== null ? bank_type[bankTypeIndex] : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Set Account Type"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                    onClick={() => setPaymentMenuView(!isPaymentTypeMenu)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="18"
                        width="18"
                        height="18"
                        rx="8"
                        transform="rotate(90 18 0)"
                        fill="#DFE0E2"
                      />
                      <path
                        d="M11 8L9 10L7 8"
                        stroke="#4E5459"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {isPaymentTypeMenu && (
                  <PaymentTypeMenu
                    cardIndex={bankTypeIndex}
                    setCardIndex={setBankTypeIndex}
                    setPaymentMenuView={setPaymentMenuView}
                  />
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="pan_no"
                  value={values.pan_no}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={19}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="PAN"
                />
                {/* <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z" fill="#E45757"/>
                            </svg>
                        </div> */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="gstin_no"
                  value={values.gstin_no}
                  maxLength={15}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="GSTIN"
                />
              </div>
              {/* <div className="flex gap-3 justify-center">
                        <div>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 12.1421 11.6421 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8ZM7.5 12.3125C7.81065 12.3125 8.0625 12.0606 8.0625 11.75V7.25C8.0625 6.93935 7.81065 6.6875 7.5 6.6875C7.18935 6.6875 6.9375 6.93935 6.9375 7.25V11.75C6.9375 12.0606 7.18935 12.3125 7.5 12.3125ZM7.5 4.25C7.91423 4.25 8.25 4.58579 8.25 5C8.25 5.41421 7.91423 5.75 7.5 5.75C7.08577 5.75 6.75 5.41421 6.75 5C6.75 4.58579 7.08577 4.25 7.5 4.25Z" fill="#E45757"/>
                            </svg>
                        </div>
                        <div className="text-xs text-[#E45757]">Mandatory for Filling</div> 
                    </div> */}
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div>{"Next Step"}</div>
                <span className="py-1.5 pl-2 size-6">
                  <FaCircleArrowRight style={{ color: "white" }} />
                </span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

function PaymentTypeMenu({ cardIndex, setCardIndex,setPaymentMenuView }) {
  return (
    <div className=" w-[100%] mt-2 bg-white rounded-2xl  py-[1rem] px-[1.2rem] gap-4 absolute z-50" 
    onClick={()=>{
      setPaymentMenuView(false)
    }}>
      <div className="text-sm poppins-semibold my-2 flex items-center gap-1">
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_380_21893)">
              <path
                d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="text-xs poppins-regular text-[#787D81]">
          Select the Payment Type from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {bank_type.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center " key={i}>
              <div
                className={`${
                  cardIndex === i ? "poppins-bold" : "text-[#A3A6A9]"
                } flex gap-1 items-center text-sm`}
              >
                {card}
              </div>
              <div
                className={`max-w-[15px]  max-h-[15px] rounded-sm   ${
                  cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"
                }`}
              >
                <FaSquare
                  color={`${cardIndex === i ? "black" : "white"}`}
                  className="rounded-sm p-[1px]"
                  onClick={() => setCardIndex(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function ReceiversMenu({ cardIndex, setCardIndex ,setReceiversMenuView}) {
  return (
    <div className="w-[100%] bg-white rounded-2xl mt-2  py-[1rem] px-[1.2rem] gap-4 absolute z-50"
    onClick={()=>{
      setReceiversMenuView(false)
    }}>
      <div className="text-sm poppins-semibold my-2 flex items-center gap-1 ">
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_380_21893)">
              <path
                d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="text-xs poppins-regular text-[#787D81]">
          Select the Receiver from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {user_type.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center " key={i}>
              <div
                className={`${
                  cardIndex === i ? "poppins-bold" : "text-[#A3A6A9]"
                } flex gap-1 items-center text-sm`}
              >
                {card}
              </div>
              <div
                className={`max-w-[15px]  max-h-[15px] rounded-sm   ${
                  cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"
                }`}
              >
                <FaSquare
                  color={`${cardIndex === i ? "black" : "white"}`}
                  className="rounded-sm p-[1px]"
                  onClick={() => setCardIndex(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddBenficiaryBank;
