import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { useAccounts } from "#hooks/index";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "Auth/authReducer";
function ProfileOrKyc() {
  const location = useLocation();
  const [pathName, setPathName] = useState(null);
  const dispatch = useDispatch();
  const fileInputRef = useRef()
  useEffect(() => {
    if (location) {
      let tmp = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
      setPathName(tmp);
    }
  }, [location]);

  const [isProfile, setProfileIndex] = useState(pathName);

  useEffect(() => {
    setProfileIndex(pathName);
  }, [pathName]);

  const handleInputClick = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileName =
      file.name.length > 20
        ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
        : file.name;
    const formData = new FormData();
    formData.append("file", file);
  };

  const [isDataShown, setDataShown] = useState(false);
  const { handleGetCreateUserKyc, handleUserProfile } = useAccounts();
  const user = useSelector((state) => state.auth.user);
  // const user ={
  //     first_name: "First name",
  //      middle_name:"Middle Name",
  //      last_name:"Last Name",
  //     nick_name:"Nick Name",
  //     account_type:"INDIVIUAL",
  //     phone:"Phone",
  //     email:"contact@email.com",
  //     password:"password"

  // }
  const [kycDetail, setKycDetail] = useState();
  const navigate = useNavigate();
  // useEffect(()=>{
  //     const fectchUserKyc = async()=>{
  //         const data = await handleGetCreateUserKyc()
  //         setKycDetail(data)
  //     }
  //     fectchUserKyc()
  // },[])
  return (
    <>
      <div className="md:hidden w-full">
        <div className="w-full p-5">
          {isProfile === "profile" ? (
            <Formik
              initialValues={{
                verification_status: "Verified" || "",
                first_name: user.first_name || "",
                middle_name: user.middle_name || "",
                last_name: user.last_name || "",
                nick_name: user.nick_name || "",
                account_type: user.account_type || "",
                phone: user.phone || "",
                email: user.email || "",
                password: user.password || "",
              }}
              validate={(values) => {
                const errors = {};

                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const data = {
                  ...values,
                };
                delete data.password;
                await handleUserProfile(data);
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
                <form className="w-full h-full">
                  <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-center">
                      <div className="relative">
                      <div className="primary-linear-gr-bg p-[2px] rounded-full">
                        <div className="w-24 h-24 bg-white rounded-full">
                          <img
                            src="/images/profile.png"
                            className="rounded-full w-full h-full"
                            />
                        </div>
                        <div className="absolute bottom-2 right-1" onClick={()=>handleInputClick()}>
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                        </div>
                      </div>
                      </div>
                      <div className="flex flex-col gap-1 text-center">
                        <div className="poppins-semibold text-lg">
                          {user.first_name} {user.middle_name} {user.last_name}
                        </div>
                        <div className="text-[#787D81] text-sm">
                          ID: 
                          {user.id}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                      <div className="flex flex-col">
                        <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                          Verification Status
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="verification_status"
                            value={values.verification_status}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Verification Status"
                            className="bg-transparent poppins-semibold text-[#27A963] w-full py-1 focus:outline-none px-4 "
                          />
                          <div className="absolute bottom-2 right-4">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z"
                                fill="#27A963"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                          Account Type
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="account_type"
                            value={values.account_type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Account Type"
                            className="bg-transparent poppins-semibold text-[#4E5459] w-full py-1 focus:outline-none px-4 "
                          />
                          <div className="absolute bottom-2 right-4">
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                fill="#CDCED1"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                          Phone
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone"
                            className="bg-transparent poppins-semibold text-[#4E5459] w-full py-1 focus:outline-none px-4"
                          />
                          <div className="absolute bottom-2 right-4">
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                fill="#CDCED1"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="customer@email.com"
                            className="bg-transparent poppins-semibold text-[#4E5459] w-full py-1 focus:outline-none px-4 "
                          />
                          <div className="absolute bottom-2 right-4">
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                fill="#CDCED1"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-4 flex items-center">
                            <svg
                              width="17"
                              height="11"
                              viewBox="0 0 17 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.5742 5.47303C16.5742 5.14574 16.3972 4.93084 16.0431 4.50093C14.7478 2.9282 11.8906 0 8.5742 0C5.2578 0 2.40069 2.9282 1.10532 4.50093C0.751253 4.93084 0.574219 5.14574 0.574219 5.47303C0.574219 5.80032 0.751253 6.01522 1.10532 6.44513C2.40069 8.0179 5.2578 10.9461 8.5742 10.9461C11.8906 10.9461 14.7478 8.0179 16.0431 6.44513C16.3972 6.01522 16.5742 5.80032 16.5742 5.47303ZM8.5742 8.20954C10.0856 8.20954 11.3107 6.98441 11.3107 5.47303C11.3107 3.96165 10.0856 2.73651 8.5742 2.73651C7.06291 2.73651 5.8377 3.96165 5.8377 5.47303C5.8377 6.98441 7.06291 8.20954 8.5742 8.20954Z"
                                fill="#CDCED1"
                              />
                            </svg>
                          </div>
                          <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="**********"
                            className="pt-2 ml-2 bg-transparent poppins-semibold text-[#4E5459] w-full px-9 py-1 focus:outline-none "
                          />
                          <div className="absolute bottom-2 right-4">
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                fill="#CDCED1"
                              />
                              <path
                                d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                fill="#CDCED1"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full justify-center items-center mt-5">
                        <button
                          onClick={() => {
                            dispatch(authActions.logout());
                            localStorage.clear();
                            navigate("/");
                          }}
                          className="cursor-pointer flex gap-4 items-center"
                        >
                          <span>
                            <img
                              src="/images/logout-red.svg"
                              alt="Logout logo"
                            />
                          </span>
                          <p className="text-[#E45757] hover:font-semibold">
                            Logout
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          ) : (
            <div className="flex flex-col justify-between w-full h-full overflow-y-scroll">
              <div className="flex items-center justify-center py-5">
                <img src="/images/verified-icon.svg" alt="Verified" />
                <p className="poppins-semibold text-sm">Verified</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="poppins-semibold mb-2">Personal Info:</div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Name</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.name : "***********"}
                  </div>
                </div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Region</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.region : "***********"}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="poppins-semibold  mb-2">
                  Uploaded Documents:
                </div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Name</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.document_name : "***********"}
                  </div>
                </div>
                <div className="flex gap-2 poppins-light items-center text-[#A3A6A9] ">
                  <div className="min-w-fit">Document ID</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className=" text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.document_id : "***********"}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="poppins-regular text-[#A3A6A9]">
                  Document Scan / Photo
                </div>
                {!isDataShown ? (
                  <div className="flex items-center justify-center w-full">
                    <div className="bg-[#232B31] opacity-20 w-[295px] h-[195px] flex items-center justify-center  border-4 border-gray-500 rounded-2xl">
                      <svg
                        width="63"
                        height="59"
                        viewBox="0 0 63 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75788 4.76234L57.6376 58.6421L62.4 53.8797L52.9465 44.4263C54.6823 42.6912 56.1466 41.0263 57.2844 39.6447C58.5913 38.0581 59.2453 37.2641 59.2453 36.056C59.2453 34.8479 58.5918 34.0546 57.2849 32.4679C52.5031 26.6619 41.9546 15.8511 29.7114 15.8511C28.0779 15.8511 26.4746 16.0435 24.9111 16.3909L8.52022 0L3.75788 4.76234Z"
                          fill="white"
                        />
                        <path
                          d="M19.609 36.056C19.609 34.2359 20.0904 32.5282 20.9327 31.0533L12.3973 22.5178C7.97046 25.8353 4.40618 29.714 2.13842 32.4673C0.831667 34.0539 0.177734 34.8479 0.177734 36.056C0.177734 37.2641 0.831111 38.0574 2.13786 39.6441C6.91999 45.4503 17.4682 56.2609 29.7114 56.2609C34.2673 56.2609 38.5881 54.7641 42.4648 52.5853L34.7142 44.8347C33.2392 45.6772 31.5316 46.1585 29.7114 46.1585C24.1322 46.1585 19.609 41.6356 19.609 36.056Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="w-[295px] h-[195px] flex items-center justify-center  rounded-2xl">
                      <img
                        src="/images/paymentCard.png"
                        alt="documet_image"
                        className="max-h-full w-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 w-full flex items-center justify-center">
                <div className=" p-[1.5px] max-w-fit">
                  <div
                    className="flex justify-between items-center py-[10px] px-5 poppins-medium text-xs  gap-2"
                    // onClick={() =>setDataShown(!isDataShown) }
                  >
                    <span>
                      <svg
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.0742 5.47303C16.0742 5.14574 15.8972 4.93084 15.5431 4.50093C14.2478 2.9282 11.3906 0 8.0742 0C4.7578 0 1.90069 2.9282 0.605322 4.50093C0.251253 4.93084 0.0742188 5.14574 0.0742188 5.47303C0.0742188 5.80032 0.251253 6.01522 0.605322 6.44513C1.90069 8.0179 4.7578 10.9461 8.0742 10.9461C11.3906 10.9461 14.2478 8.0179 15.5431 6.44513C15.8972 6.01522 16.0742 5.80032 16.0742 5.47303ZM8.0742 8.20954C9.58558 8.20954 10.8107 6.98441 10.8107 5.47303C10.8107 3.96165 9.58558 2.73651 8.0742 2.73651C6.56291 2.73651 5.3377 3.96165 5.3377 5.47303C5.3377 6.98441 6.56291 8.20954 8.0742 8.20954Z"
                          fill="#232B31"
                        />
                      </svg>
                    </span>
                    <span className="poppins-semibold">
                      {isDataShown ? "Hide" : "Show"} Data
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-20">
              </div>
            

            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex mt-5 bg-primary py-[2rem] pr-[2rem] rounded-3xl gap-4 mr-2 w-full my-4">
        <div className="flex flex-col gap-2 mt-2 p-[2rem] pr-[2rem] border-r-2">
          {isProfile === "profile" ? (
            <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
              <button
                className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-2 poppins-medium text-sm w-48"
                onClick={() => {}}
              >
                <span>Profile</span>
                <span>
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H8M8 4L4.88889 1M8 4L4.88889 7"
                      stroke="white"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ) : (
            <button
              className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start"
              onClick={() => {
                setProfileIndex("profile");
                navigate("/dashboard/profile");
              }}
            >
              Profile
            </button>
          )}
          {isProfile !== "profile" ? (
            <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
              <button
                className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-2   poppins-medium text-sm w-48"
                onClick={() => {}}
              >
                <span>KYC</span>
                <span>
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H8M8 4L4.88889 1M8 4L4.88889 7"
                      stroke="white"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ) : (
            <button
              className="text-[#B6B8BA] text-sm py-[6px] px-3 text-start"
              onClick={() => {
                setProfileIndex("kyc");
                navigate("/dashboard/kyc");
              }}
            >
              KYC
            </button>
          )}
        </div>
        <div className="ml-3 w-full">
          {isProfile === "profile" ? (
            <Formik
              initialValues={{
                first_name: user.first_name || "",
                middle_name: user.middle_name || "",
                last_name: user.last_name || "",
                nick_name: user.nick_name || "",
                account_type: user.account_type || "",
                phone: user.phone || "",
                email: user.email || "",
                password: user.password || "",
              }}
              validate={(values) => {
                const errors = {};

                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const data = {
                  ...values,
                };
                delete data.password;
                await handleUserProfile(data);
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
                <form className="w-full h-full">
                  <div className="flex flex-col gap-8 w-full">
                    <div className="flex gap-4 items-center">
                      <div className="relative">
                        <div className="primary-linear-gr-bg p-[2px] rounded-full">
                          <div className="w-24 h-24 bg-white rounded-full">
                          <img
                              src="/images/profile.png"
                              
                              className="rounded-full w-full h-full"
                          />
                         </div>
                          <input
                          type="file"
                          accept="image/*"
                          hidden
                          ref={fileInputRef}
                          onChange={uploadFile}
                          />
                          {/*  */}
                        </div>
                        <div className="absolute bottom-2 right-1" onClick={()=>handleInputClick()}>
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-8 items-center">
                          <div className="poppins-bold text-xs text-green-500">
                            Verified
                          </div>
                          <div>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z"
                                fill="#27A963"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="poppins-semibold text-sm">
                          {user.first_name} {user.middle_name} {user.last_name}
                        </div>
                        <div className="text-[#787D81] text-sm">
                          ID: 
                          {user.id}
                        </div>
                        <div className="text-xs text-[#787D81]">
                          @{user.first_name}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2  gap-10">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            First Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="first_name"
                              value={values.first_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Name"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full focus:outline-none py-1 px-4"
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Middle Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="middle_name"
                              value={values.middle_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Middle name"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4"
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Last Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="last_name"
                              value={values.last_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Last Name"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4"
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Nick Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="nick_name"
                              value={values.nick_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Nick Name"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4"
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Account Type
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="account_type"
                              value={values.account_type}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Account Type"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4 "
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Phone
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Phone"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4"
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Email
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="customer@email.com"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full py-1 focus:outline-none px-4 "
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#A3A6A9] poppins-regular text-xs ml-4 mb-1">
                            Password
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-4 flex items-center">
                              <svg
                                width="17"
                                height="11"
                                viewBox="0 0 17 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.5742 5.47303C16.5742 5.14574 16.3972 4.93084 16.0431 4.50093C14.7478 2.9282 11.8906 0 8.5742 0C5.2578 0 2.40069 2.9282 1.10532 4.50093C0.751253 4.93084 0.574219 5.14574 0.574219 5.47303C0.574219 5.80032 0.751253 6.01522 1.10532 6.44513C2.40069 8.0179 5.2578 10.9461 8.5742 10.9461C11.8906 10.9461 14.7478 8.0179 16.0431 6.44513C16.3972 6.01522 16.5742 5.80032 16.5742 5.47303ZM8.5742 8.20954C10.0856 8.20954 11.3107 6.98441 11.3107 5.47303C11.3107 3.96165 10.0856 2.73651 8.5742 2.73651C7.06291 2.73651 5.8377 3.96165 5.8377 5.47303C5.8377 6.98441 7.06291 8.20954 8.5742 8.20954Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                            <input
                              type="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="**********"
                              className="bg-transparent poppins-semibold text-[#4E5459] border-b-2 w-full px-9 py-1 focus:outline-none "
                            />
                            <div className="absolute bottom-2 right-4">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.5 13.6667V16.8C13.9705 16.6387 14.3987 16.3734 14.7527 16.024L16.5233 14.252C16.8732 13.8985 17.1387 13.4705 17.3 13H14.1667C13.9899 13 13.8203 13.0702 13.6953 13.1953C13.5702 13.3203 13.5 13.4899 13.5 13.6667Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M6.28133 10.2186C6.03361 10.4662 5.83711 10.7603 5.70305 11.0839C5.56898 11.4075 5.49999 11.7543 5.5 12.1046V12.9999H6.39533C6.74561 12.9999 7.09246 12.9309 7.41606 12.7969C7.73967 12.6628 8.03369 12.4663 8.28133 12.2186L15.8333 4.66659C16.0985 4.40137 16.2475 4.04166 16.2475 3.66659C16.2475 3.29152 16.0985 2.93181 15.8333 2.66659C15.5681 2.40137 15.2084 2.25238 14.8333 2.25238C14.4583 2.25238 14.0985 2.40137 13.8333 2.66659L6.28133 10.2186Z"
                                  fill="#CDCED1"
                                />
                                <path
                                  d="M17.5 4.30133C17.3865 4.79587 17.1371 5.24888 16.78 5.60933L9.224 13.162C8.85338 13.5346 8.41254 13.8299 7.92699 14.031C7.44145 14.2321 6.92086 14.3348 6.39533 14.3333H5.5C5.14638 14.3333 4.80724 14.1929 4.55719 13.9428C4.30714 13.6928 4.16667 13.3536 4.16667 13V12.1047C4.16521 11.5792 4.26805 11.0586 4.46923 10.5732C4.67041 10.0878 4.96593 9.64707 5.33867 9.27667L12.8907 1.724C13.2484 1.36636 13.6989 1.11563 14.1913 1C14.1827 1 14.1753 1 14.1667 1H4.83333C3.9496 1.00106 3.10237 1.35259 2.47748 1.97748C1.85259 2.60237 1.50106 3.4496 1.5 4.33333V13.6667C1.50106 14.5504 1.85259 15.3976 2.47748 16.0225C3.10237 16.6474 3.9496 16.9989 4.83333 17H12.1667V13.6667C12.1667 13.1362 12.3774 12.6275 12.7525 12.2525C13.1275 11.8774 13.6362 11.6667 14.1667 11.6667H17.5V4.33333C17.5 4.32267 17.5 4.31267 17.5 4.30133Z"
                                  fill="#CDCED1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="primary-linear-gr-bg p-[1.5px] rounded-xl shadow-red-200 shadow-2xl max-w-fit">
                          <button
                            type="button"
                            className="flex justify-between items-center bg-primary rounded-xl py-[10px] px-5 poppins-medium text-xs  gap-2"
                            onClick={() => handleSubmit()}
                          >
                            <span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.6569 13.6568C10.5327 16.781 5.46731 16.781 2.34315 13.6568C-0.78105 10.5326 -0.781022 5.4673 2.34315 2.34313C5.46734 -0.781062 10.5327 -0.781062 13.6569 2.34313C16.781 5.4673 16.781 10.5326 13.6569 13.6568ZM7.99999 4.57153C8.33136 4.57153 8.59998 4.84015 8.59999 5.17153L8.60002 7.39996L10.8284 7.39995C11.1598 7.39995 11.4284 7.6686 11.4284 7.99997C11.4284 8.33134 11.1598 8.59998 10.8284 8.59995H8.59997L8.60002 10.8284C8.60002 11.1597 8.33138 11.4284 8 11.4284C7.66862 11.4284 7.39998 11.1597 7.39998 10.8284V8.60001L5.17157 8.59995C4.84021 8.59996 4.57157 8.33133 4.57158 7.99996C4.57158 7.66859 4.84023 7.39994 5.17154 7.39999L7.39998 7.39996L7.39999 5.17152C7.39998 4.84015 7.66862 4.57152 7.99999 4.57153Z"
                                  fill="#232B31"
                                />
                              </svg>
                            </span>
                            <span className="poppins-semibold ">
                              Save Changes
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          ) : (
            <div className="flex flex-col gap-4 w-full h-full">
              <div className="flex flex-col gap-2">
                <div className="poppins-semibold mb-2">Personal Info:</div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Name</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.name : "***********"}
                  </div>
                </div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Region</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.region : "***********"}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="poppins-semibold  mb-2">
                  Uploaded Documents:
                </div>
                <div className="flex gap-2 items-center poppins-light text-[#A3A6A9] ">
                  <div className="">Name</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className="text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.document_name : "***********"}
                  </div>
                </div>
                <div className="flex gap-2 poppins-light items-center text-[#A3A6A9] ">
                  <div className="min-w-fit">Document ID</div>
                  <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]" />
                  <div className=" text-sm pt-1 items-center">
                    {isDataShown ? kycDetail.document_id : "***********"}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="poppins-regular text-[#A3A6A9]">
                  Document Scan / Photo
                </div>
                {!isDataShown ? (
                  <div className="bg-[#232B31] opacity-20 w-[306px] h-[195px] flex items-center justify-center border-4 border-gray-500 rounded-2xl">
                    <div>
                      <svg
                        width="63"
                        height="59"
                        viewBox="0 0 63 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75788 4.76234L57.6376 58.6421L62.4 53.8797L52.9465 44.4263C54.6823 42.6912 56.1466 41.0263 57.2844 39.6447C58.5913 38.0581 59.2453 37.2641 59.2453 36.056C59.2453 34.8479 58.5918 34.0546 57.2849 32.4679C52.5031 26.6619 41.9546 15.8511 29.7114 15.8511C28.0779 15.8511 26.4746 16.0435 24.9111 16.3909L8.52022 0L3.75788 4.76234Z"
                          fill="white"
                        />
                        <path
                          d="M19.609 36.056C19.609 34.2359 20.0904 32.5282 20.9327 31.0533L12.3973 22.5178C7.97046 25.8353 4.40618 29.714 2.13842 32.4673C0.831667 34.0539 0.177734 34.8479 0.177734 36.056C0.177734 37.2641 0.831111 38.0574 2.13786 39.6441C6.91999 45.4503 17.4682 56.2609 29.7114 56.2609C34.2673 56.2609 38.5881 54.7641 42.4648 52.5853L34.7142 44.8347C33.2392 45.6772 31.5316 46.1585 29.7114 46.1585C24.1322 46.1585 19.609 41.6356 19.609 36.056Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-[306px] h-[195px] flex items-center justify-center  rounded-2xl">
                    <img
                      src="/images/paymentCard.png"
                      alt="documet_image"
                      className="max-h-full w-auto"
                    />
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="primary-linear-gr-bg p-[1.5px] rounded-xl shadow-red-200 shadow-2xl max-w-fit">
                  <button
                    className="flex justify-between items-center bg-primary rounded-xl py-[10px] px-5 poppins-medium text-xs  gap-2"
                    //  onClick={() =>setDataShown(!isDataShown) }
                  >
                    <span>
                      <svg
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.0742 5.47303C16.0742 5.14574 15.8972 4.93084 15.5431 4.50093C14.2478 2.9282 11.3906 0 8.0742 0C4.7578 0 1.90069 2.9282 0.605322 4.50093C0.251253 4.93084 0.0742188 5.14574 0.0742188 5.47303C0.0742188 5.80032 0.251253 6.01522 0.605322 6.44513C1.90069 8.0179 4.7578 10.9461 8.0742 10.9461C11.3906 10.9461 14.2478 8.0179 15.5431 6.44513C15.8972 6.01522 16.0742 5.80032 16.0742 5.47303ZM8.0742 8.20954C9.58558 8.20954 10.8107 6.98441 10.8107 5.47303C10.8107 3.96165 9.58558 2.73651 8.0742 2.73651C6.56291 2.73651 5.3377 3.96165 5.3377 5.47303C5.3377 6.98441 6.56291 8.20954 8.0742 8.20954Z"
                          fill="#232B31"
                        />
                      </svg>
                    </span>
                    <span className="poppins-semibold">
                      {isDataShown ? "Hide" : "Show"} Data
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileOrKyc;
