import { useState } from "react";
import { HeaderNavbar } from "../Navbar";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { useUserSignupAuth, useUserLoginAuth } from "#hooks/auth/index.js";
import PaymorzSider from "../../utils/PaymorzSider";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook, IoLogoApple, IoPerson } from "react-icons/io5";
import { Mail, Lock, Call } from "@mui/icons-material";
import { CiCircleChevLeft } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SignUpUser() {
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(1);
  const { handleUserSignup } = useUserSignupAuth();
  const {
    handleLoginWithGoogle,
    handleLoginWithApple,
    handleLoginWithFacebook,
    handleLoginWithPhone,
    handleUserLoginWithEmail,
  } = useUserLoginAuth();
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [isPassword2Shown, setPassword2Shown] = useState(false);

  return (
    <div className="grid  lg:grid-cols-2">
      <div className="flex min-h-full flex-col p-6 sm:p-[0px] ">
        <HeaderNavbar isLogin={true} />
        <div className="sm:mx-auto sm:w-full mt-5 lg:mt-20">
          <div className="flex justify-center text-sm text-gray-900 lg:mt-10 lg:mb-6">
            <button
              style={{
                display: pageIndex > 1 ? "inline" : "none",
              }}
              onClick={() => setPageIndex(1)}
              className="mr-3"
            >
              <CiCircleChevLeft color="gray" fontSize="large" />
            </button>
            <span className="hide md:block text-[#4E5459] ">Sign Up: &nbsp;&nbsp;</span>
            <span className="color-linear font-medium ">{`0${pageIndex} / 02`}</span>
          </div>
        </div>
        <h2 className="md:hidden mt-6 mb-2 lg:my-10 text-center text-xs  text-[#A3A6A9]">
          Enter your Data:
        </h2>

        <div className="sm:mx-auto sm:w-full sm:max-w-md text-sm mt-2 ">
          <Formik
            initialValues={{
              first_name: "",
              middle_name: "",
              last_name: "",
              password: "",
              phone: "",
              email: "",
              password2: "",
            }}
            validate={(values) => {
              const errors = {};
              if (values.first_name.length < 2) {
                errors.first_name =
                  "First name should be atleast 3 character long";
              }
              if (!values.email && pageIndex === 2) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  values.email
                ) &&
                pageIndex === 2
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.phone && pageIndex === 2) {
                errors.phone = "Required";
              } else if (!/^\d{10}$/.test(values.phone) && pageIndex === 2) {
                errors.phone = "Add Valid Phone number";
              }
              if (values.password2 !== values.password && pageIndex === 2) {
                errors.password2 =
                  "Password didn't match with entered password!!";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              const newVal = {
                ...values,
                phone: "+91" + values.phone,
              };
              console.log(newVal);
              pageIndex === 1 ? setPageIndex(2) : handleUserSignup(newVal);
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
              <form className="space-y-4 mt-4">
                {pageIndex < 2 ? (
                  <div className="flex flex-col gap-3 ">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                          <IoPerson color="grey" />
                          <PiLineVertical color="gray" />
                        </div>
                        <input
                          type="text"
                          name="first_name"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="First Name..."
                        />
                      </div>
                      <div className="text-red-400 text-xs">
                        {errors.first_name &&
                          touched.first_name &&
                          errors.first_name}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <IoPerson color="grey" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="middle_name"
                        value={values.middle_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Middle Name..."
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <IoPerson color="grey" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name..."
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 ">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                          <Call fontSize="small" color="disabled" />
                          <PiLineVertical color="gray" />
                        </div>
                        <input
                          type="number"
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="Enter Your Phone..."
                        />
                      </div>
                      <div className="text-red-400 text-xs">
                        {errors.phone && touched.phone && errors.phone}
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                          <Mail fontSize="small" color="disabled" />
                          <PiLineVertical color="gray" />
                        </div>
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Your Mail..."
                        />
                      </div>
                      <div className="text-red-400 text-xs">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <Lock fontSize="small" color="disabled" />
                          <PiLineVertical color="gray" />
                        </div>
                        <input
                          type={isPasswordShown ? "text" : "password"}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5 "
                          placeholder="Enter Password..."
                        />
                        <div
                          className="absolute  inset-y-4 end-0 pe-3.5 cursor-pointer"
                          onClick={() => setPasswordShown(!isPasswordShown)}
                        >
                          {isPasswordShown ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.0743 9.47303C17.0743 9.14574 16.8973 8.93084 16.5432 8.50093C15.2479 6.9282 12.3907 4 9.07432 4C5.75792 4 2.90081 6.9282 1.60544 8.50093C1.25138 8.93084 1.07434 9.14574 1.07434 9.47303C1.07434 9.80032 1.25138 10.0152 1.60544 10.4451C2.90081 12.0179 5.75792 14.9461 9.07432 14.9461C12.3907 14.9461 15.2479 12.0179 16.5432 10.4451C16.8973 10.0152 17.0743 9.80032 17.0743 9.47303ZM9.07432 12.2095C10.5857 12.2095 11.8108 10.9844 11.8108 9.47303C11.8108 7.96165 10.5857 6.73651 9.07432 6.73651C7.56304 6.73651 6.33783 7.96165 6.33783 9.47303C6.33783 10.9844 7.56304 12.2095 9.07432 12.2095Z"
                                fill="#B6B8BA"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.994827 1.2246L14.8496 15.0794L16.0742 13.8548L13.6433 11.4239C14.0897 10.9777 14.4662 10.5496 14.7588 10.1944C15.0948 9.78636 15.263 9.5822 15.263 9.27154C15.263 8.96089 15.095 8.7569 14.7589 8.3489C13.5293 6.85591 10.8168 4.076 7.6686 4.076C7.24854 4.076 6.83626 4.12548 6.43422 4.21479L2.21943 0L0.994827 1.2246Z"
                                fill="#DFE0E2"
                              />
                              <path
                                d="M5.07084 9.27154C5.07084 8.80351 5.19461 8.3644 5.4112 7.98513L3.21638 5.7903C2.07806 6.64337 1.16153 7.64075 0.578395 8.34873C0.242373 8.75672 0.0742188 8.9609 0.0742188 9.27154C0.0742188 9.58219 0.24223 9.78619 0.578252 10.1942C1.80794 11.6872 4.52034 14.4671 7.6686 14.4671C8.84011 14.4671 9.95118 14.0822 10.948 13.5219L8.95502 11.5289C8.57574 11.7456 8.13663 11.8693 7.6686 11.8693C6.23394 11.8693 5.07084 10.7063 5.07084 9.27154Z"
                                fill="#DFE0E2"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="text-red-400 text-xs">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <Lock fontSize="small" color="disabled" />
                          <PiLineVertical color="gray" />
                        </div>
                        <input
                          type={isPassword2Shown ? "text" : "password"}
                          name="password2"
                          value={values.password2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-3.5 "
                          placeholder="Confirm Password..."
                        />
                        <div
                          className="absolute  inset-y-4 end-0 pe-3.5 cursor-pointer"
                          onClick={() => setPassword2Shown(!isPassword2Shown)}
                        >
                          {isPassword2Shown ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.0743 9.47303C17.0743 9.14574 16.8973 8.93084 16.5432 8.50093C15.2479 6.9282 12.3907 4 9.07432 4C5.75792 4 2.90081 6.9282 1.60544 8.50093C1.25138 8.93084 1.07434 9.14574 1.07434 9.47303C1.07434 9.80032 1.25138 10.0152 1.60544 10.4451C2.90081 12.0179 5.75792 14.9461 9.07432 14.9461C12.3907 14.9461 15.2479 12.0179 16.5432 10.4451C16.8973 10.0152 17.0743 9.80032 17.0743 9.47303ZM9.07432 12.2095C10.5857 12.2095 11.8108 10.9844 11.8108 9.47303C11.8108 7.96165 10.5857 6.73651 9.07432 6.73651C7.56304 6.73651 6.33783 7.96165 6.33783 9.47303C6.33783 10.9844 7.56304 12.2095 9.07432 12.2095Z"
                                fill="#B6B8BA"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.994827 1.2246L14.8496 15.0794L16.0742 13.8548L13.6433 11.4239C14.0897 10.9777 14.4662 10.5496 14.7588 10.1944C15.0948 9.78636 15.263 9.5822 15.263 9.27154C15.263 8.96089 15.095 8.7569 14.7589 8.3489C13.5293 6.85591 10.8168 4.076 7.6686 4.076C7.24854 4.076 6.83626 4.12548 6.43422 4.21479L2.21943 0L0.994827 1.2246Z"
                                fill="#DFE0E2"
                              />
                              <path
                                d="M5.07084 9.27154C5.07084 8.80351 5.19461 8.3644 5.4112 7.98513L3.21638 5.7903C2.07806 6.64337 1.16153 7.64075 0.578395 8.34873C0.242373 8.75672 0.0742188 8.9609 0.0742188 9.27154C0.0742188 9.58219 0.24223 9.78619 0.578252 10.1942C1.80794 11.6872 4.52034 14.4671 7.6686 14.4671C8.84011 14.4671 9.95118 14.0822 10.948 13.5219L8.95502 11.5289C8.57574 11.7456 8.13663 11.8693 7.6686 11.8693C6.23394 11.8693 5.07084 10.7063 5.07084 9.27154Z"
                                fill="#DFE0E2"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="text-red-400 text-xs">
                        {errors.password2 &&
                          touched.password2 &&
                          errors.password2}
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {pageIndex > 1 ? "Sign Up" : "Next"}
                    <span className="py-1.5 pl-2 size-6">
                      <FaCircleArrowRight style={{ color: "white" }} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Formik>
          <div className="my-5 mx-2 poppins-extralight-italic text-xs px-2">
            <p>
              By clicking Continue, you agree to Paymorz's{" "}
              <span>
                <a className="underline font-semibold">
                  Terms & Conditions & Privacy Policy.
                </a>
              </span>
            </p>
          </div>
          <div className="mt-[2rem] flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 mb-2">
              or Continue With
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="grid grid-cols-3  items-center m-2  gap-4">
            <button
              onClick={handleLoginWithGoogle}
              className="bg-white flex flex-col items-center   border rounded-xl border-gray-300 shadow-md px-10 py-2 text-sm font-medium text-gray-800 "
            >
              <span>
                <FcGoogle className="size-8" />
              </span>
              <span> Google</span>
            </button>
            {/* <button
                onClick={handleLoginWithFacebook}
                className="bg-white flex flex-col items-center  border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 "
                >
                  <span><IoLogoApple className='size-8'/></span>
                <span>Apple</span>
  
              </button>
              <button
                onClick={handleLoginWithFacebook}
                className="bg-white flex flex-col items-center  border rounded-xl border-gray-300 shadow-md px-8 py-2 text-sm font-medium text-gray-800 "
                >
                  <span><IoLogoFacebook className='size-8'/></span>
                <span>Facebook</span>
  
              </button> */}

            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
      <div className="hide lg:flex">
        <PaymorzSider />
      </div>
    </div>
  );
}
