import PaymorzSider from "../../utils/PaymorzSider";
import { MdBusinessCenter } from "react-icons/md";
import { useRef, useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import { MdUploadFile, MdOutlineCancel } from "react-icons/md";
import { FaCreditCard, FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik } from "formik";
import { useUserSignupAuth } from "#hooks/auth/index.js";
export default function AccountType() {
  const navigate = useNavigate();
  const { handleUserSignup } = useUserSignupAuth();
  const [isIndividual, setAccountType] = useState(true);
  const location = useLocation();
  const userId = location.state?.userId || sessionStorage.getItem("user_id");
  if (!userId) {
    console.log("Not Permitted");
  }

  const fileInputRef = useRef(null);
  const companyInputRef = useRef(null);
  const [files, setFiles] = useState("");
  const [companyPanCard, setCompanyPanCard] = useState("");

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleCompanyInputClick = () => {
    companyInputRef.current.click();
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
    setFiles(fileName);
  };

  const uploadCompanyPanCard = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileName =
      file.name.length > 20
        ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
        : file.name;
    const formData = new FormData();
    formData.append("file", file);
    setCompanyPanCard(fileName);
  };

  return (
    <div className="grid  lg:grid-cols-2 gap-4">
      <div className="flex min-h-full flex-col py-[2rem] px-[2em] gap-2 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="text-center mt-[2rem] mb-4">
          <h2 className="poppins-bold">
            Enter following details to complete your KYC <br></br>verification!
          </h2>
          <p className="poppins-light text-sm my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <p className="poppins-regular text-base mb-3">Choose Account Type</p>
        </div>
        <div className="flex flex-row gap-12 justify-center">
          {isIndividual ? (
            <>
              <div className="gap-2 flex flex-col cursor-pointer">
                <svg
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="76"
                    height="76"
                    rx="38"
                    fill="url(#paint0_linear_522_6287)"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M22.5 38.2409V45.7677C22.5 49.2151 25.46 52 29.124 52H47.86C51.524 52 54.5 49.2 54.5 45.7527V38.2409C54.5 37.2323 53.636 36.4194 52.564 36.4194H24.436C23.364 36.4194 22.5 37.2323 22.5 38.2409ZM32.1 46.957H28.9C28.244 46.957 27.7 46.4452 27.7 45.828C27.7 45.2108 28.244 44.6989 28.9 44.6989H32.1C32.756 44.6989 33.3 45.2108 33.3 45.828C33.3 46.4452 32.756 46.957 32.1 46.957ZM42.5 46.957H36.1C35.444 46.957 34.9 46.4452 34.9 45.828C34.9 45.2108 35.444 44.6989 36.1 44.6989H42.5C43.156 44.6989 43.7 45.2108 43.7 45.828C43.7 46.4452 43.156 46.957 42.5 46.957Z"
                    fill="url(#paint1_linear_522_6287)"
                  />
                  <path
                    d="M40.9 27.9267V32.3374C40.9 33.346 40.036 34.1589 38.964 34.1589H24.436C23.348 34.1589 22.5 33.3159 22.5 32.3073C22.516 30.6063 23.236 29.0557 24.436 27.9267C25.636 26.7977 27.3 26.1052 29.124 26.1052H38.964C40.036 26.1052 40.9 26.9181 40.9 27.9267Z"
                    fill="url(#paint2_linear_522_6287)"
                  />
                  <path
                    d="M51.252 24H46.548C44.516 24 43.3 25.1441 43.3 27.0559V31.4817C43.3 33.3935 44.516 34.5376 46.548 34.5376H51.252C53.284 34.5376 54.5 33.3935 54.5 31.4817V27.0559C54.5 25.1441 53.284 24 51.252 24ZM52.756 29.9161C52.596 30.0667 52.356 30.172 52.1 30.1871H49.844L49.86 32.2796C49.844 32.5355 49.748 32.7462 49.556 32.9269C49.396 33.0774 49.156 33.1828 48.9 33.1828C48.372 33.1828 47.94 32.7763 47.94 32.2796V30.172L45.7 30.1871C45.172 30.1871 44.74 29.7656 44.74 29.2688C44.74 28.772 45.172 28.3656 45.7 28.3656L47.94 28.3806V26.2731C47.94 25.7763 48.372 25.3548 48.9 25.3548C49.428 25.3548 49.86 25.7763 49.86 26.2731L49.844 28.3656H52.1C52.628 28.3656 53.06 28.772 53.06 29.2688C53.044 29.5247 52.932 29.7355 52.756 29.9161Z"
                    fill="url(#paint3_linear_522_6287)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_522_6287"
                      x1="-11.6165"
                      y1="44.7556"
                      x2="89.1634"
                      y2="21.6943"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_522_6287"
                      x1="17.3983"
                      y1="40.4889"
                      x2="59.1953"
                      y2="29.5583"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_522_6287"
                      x1="17.3983"
                      y1="40.4889"
                      x2="59.1953"
                      y2="29.5583"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_522_6287"
                      x1="17.3983"
                      y1="40.4889"
                      x2="59.1953"
                      y2="29.5583"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="color-linear text-sm poppins-bold">INDIVIDUAL</p>
              </div>
              <div
                className="gap-2 flex flex-col cursor-pointer"
                onClick={() => setAccountType(false)}
              >
                <svg
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="76" height="76" rx="38" fill="#F0F1F2" />
                  <path
                    d="M46.6667 28.6667H45.3833C45.1126 27.35 44.3961 26.1669 43.3548 25.3168C42.3135 24.4668 41.0109 24.0017 39.6667 24L37.3333 24C35.9891 24.0017 34.6865 24.4668 33.6452 25.3168C32.6039 26.1669 31.8875 27.35 31.6167 28.6667H30.3333C28.7868 28.6685 27.3042 29.2837 26.2106 30.3773C25.117 31.4709 24.5019 32.9535 24.5 34.5001V38.0001H52.5V34.5001C52.4981 32.9535 51.883 31.4709 50.7894 30.3773C49.6959 29.2837 48.2132 28.6685 46.6667 28.6667ZM34.048 28.6667C34.2884 27.9866 34.7331 27.3975 35.3212 26.9798C35.9093 26.5621 36.612 26.3363 37.3333 26.3333H39.6667C40.388 26.3363 41.0907 26.5621 41.6788 26.9798C42.2669 27.3975 42.7116 27.9866 42.952 28.6667H34.048Z"
                    fill="#DFE0E2"
                  />
                  <path
                    d="M39.6667 41.5C39.6667 41.8094 39.5437 42.1061 39.325 42.3249C39.1062 42.5437 38.8094 42.6666 38.5 42.6666C38.1906 42.6666 37.8938 42.5437 37.675 42.3249C37.4562 42.1061 37.3333 41.8094 37.3333 41.5V40.3333H24.5V46.1667C24.5019 47.7132 25.117 49.1958 26.2106 50.2894C27.3041 51.383 28.7868 51.9981 30.3333 52H46.6667C48.2132 51.9981 49.6958 51.383 50.7894 50.2894C51.883 49.1958 52.4981 47.7132 52.5 46.1667V40.3333H39.6667V41.5Z"
                    fill="#DFE0E2"
                  />
                </svg>
                <p className=" text-sm text-center poppins-extralight text-gray-500">
                  BUSINESS
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                className="gap-2 flex flex-col"
                onClick={() => setAccountType(true)}
              >
                <svg
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="76" height="76" rx="38" fill="#F0F1F2" />
                  <path
                    d="M22.5 38.2409V45.7677C22.5 49.2151 25.46 52 29.124 52H47.86C51.524 52 54.5 49.2 54.5 45.7527V38.2409C54.5 37.2323 53.636 36.4194 52.564 36.4194H24.436C23.364 36.4194 22.5 37.2323 22.5 38.2409ZM32.1 46.957H28.9C28.244 46.957 27.7 46.4452 27.7 45.828C27.7 45.2108 28.244 44.6989 28.9 44.6989H32.1C32.756 44.6989 33.3 45.2108 33.3 45.828C33.3 46.4452 32.756 46.957 32.1 46.957ZM42.5 46.957H36.1C35.444 46.957 34.9 46.4452 34.9 45.828C34.9 45.2108 35.444 44.6989 36.1 44.6989H42.5C43.156 44.6989 43.7 45.2108 43.7 45.828C43.7 46.4452 43.156 46.957 42.5 46.957Z"
                    fill="#DFE0E2"
                  />
                  <path
                    d="M40.9 27.9267V32.3374C40.9 33.346 40.036 34.1589 38.964 34.1589H24.436C23.348 34.1589 22.5 33.3159 22.5 32.3073C22.516 30.6063 23.236 29.0557 24.436 27.9267C25.636 26.7977 27.3 26.1052 29.124 26.1052H38.964C40.036 26.1052 40.9 26.9181 40.9 27.9267Z"
                    fill="#DFE0E2"
                  />
                  <path
                    d="M51.252 24H46.548C44.516 24 43.3 25.1441 43.3 27.0559V31.4817C43.3 33.3935 44.516 34.5376 46.548 34.5376H51.252C53.284 34.5376 54.5 33.3935 54.5 31.4817V27.0559C54.5 25.1441 53.284 24 51.252 24ZM52.756 29.9161C52.596 30.0667 52.356 30.172 52.1 30.1871H49.844L49.86 32.2796C49.844 32.5355 49.748 32.7462 49.556 32.9269C49.396 33.0774 49.156 33.1828 48.9 33.1828C48.372 33.1828 47.94 32.7763 47.94 32.2796V30.172L45.7 30.1871C45.172 30.1871 44.74 29.7656 44.74 29.2688C44.74 28.772 45.172 28.3656 45.7 28.3656L47.94 28.3806V26.2731C47.94 25.7763 48.372 25.3548 48.9 25.3548C49.428 25.3548 49.86 25.7763 49.86 26.2731L49.844 28.3656H52.1C52.628 28.3656 53.06 28.772 53.06 29.2688C53.044 29.5247 52.932 29.7355 52.756 29.9161Z"
                    fill="#DFE0E2"
                  />
                </svg>
                <p className=" text-sm text-center poppins-extralight text-gray-500">
                  INDIVIDUAL
                </p>
              </div>
              <div className="gap-2 flex flex-col">
                <svg
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="76"
                    height="76"
                    rx="38"
                    fill="url(#paint0_linear_1_18356)"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M46.6667 28.6667H45.3833C45.1126 27.35 44.3961 26.1669 43.3548 25.3168C42.3135 24.4668 41.0109 24.0017 39.6667 24L37.3333 24C35.9891 24.0017 34.6865 24.4668 33.6452 25.3168C32.6039 26.1669 31.8875 27.35 31.6167 28.6667H30.3333C28.7868 28.6685 27.3042 29.2837 26.2106 30.3773C25.117 31.4709 24.5019 32.9535 24.5 34.5001V38.0001H52.5V34.5001C52.4981 32.9535 51.883 31.4709 50.7894 30.3773C49.6959 29.2837 48.2132 28.6685 46.6667 28.6667ZM34.048 28.6667C34.2884 27.9866 34.7331 27.3975 35.3212 26.9798C35.9093 26.5621 36.612 26.3363 37.3333 26.3333H39.6667C40.388 26.3363 41.0907 26.5621 41.6788 26.9798C42.2669 27.3975 42.7116 27.9866 42.952 28.6667H34.048Z"
                    fill="url(#paint1_linear_1_18356)"
                  />
                  <path
                    d="M39.6667 41.5C39.6667 41.8094 39.5437 42.1061 39.325 42.3249C39.1062 42.5437 38.8094 42.6666 38.5 42.6666C38.1906 42.6666 37.8938 42.5437 37.675 42.3249C37.4562 42.1061 37.3333 41.8094 37.3333 41.5V40.3333H24.5V46.1667C24.5019 47.7132 25.117 49.1958 26.2106 50.2894C27.3041 51.383 28.7868 51.9981 30.3333 52H46.6667C48.2132 51.9981 49.6958 51.383 50.7894 50.2894C51.883 49.1958 52.4981 47.7132 52.5 46.1667V40.3333H39.6667V41.5Z"
                    fill="url(#paint2_linear_1_18356)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_18356"
                      x1="-11.6165"
                      y1="44.7556"
                      x2="89.1634"
                      y2="21.6943"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_18356"
                      x1="20.036"
                      y1="40.4889"
                      x2="57.1655"
                      y2="31.9927"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_18356"
                      x1="20.036"
                      y1="40.4889"
                      x2="57.1655"
                      y2="31.9927"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="color-linear text-sm poppins-bold">BUSINESS</p>
              </div>
            </>
          )}
        </div>
        <Formik
          initialValues={{
            pan_no: "",
            adhaar_no: "",
            company_pan_no: "",
            company_adhaar_no: "",
            company_name: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.pan_no && isIndividual) {
              errors.pan = "Required";
            } else if (values.pan_no.length < 10 && isIndividual) {
              errors.pan = "Enter Valid PAN number";
            }
            if (!values.adhaar_no && isIndividual) {
              errors.adhaar = "Required";
            } else if (values.adhaar_no.length < 10 && isIndividual) {
              errors.adhaar = "Enter Valid Aadhar number";
            }
            if (!values.company_pan_no && !isIndividual) {
              errors.company_pan_no = "Required";
            } else if (values.company_pan_no.length < 10 && !isIndividual) {
              errors.company_pan_no = "Enter Valid PAN number";
            }
            if (!values.company_adhaar_no && !isIndividual) {
              errors.company_adhaar_no = "Required";
            } else if (values.company_adhaar_no.length < 10 && !isIndividual) {
              errors.company_adhaar_no = "Enter Valid Aadhar number";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleUserSignup(values, userId, (isError) => {
              if (!isError) {
                navigate("/dashboard");
                setSubmitting(false);
              } else {
                console.log("Error in Signup", isError);
              }
            });
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
              {isIndividual ? (
                <div className="flex flex-col gap-3 mt-4 border-0">
                  <div>
                    <div className="relative primary-linear-gr-bg  p-[2px] rounded-xl">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <IoDocumentText color="grey" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="pan_no"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pan_no}
                        className="bg-white border-0 border-gray-300 text-gray-900 text-sm rounded-xl block w-full ps-14 py-3.5 pr-3.5 pl-10 focus:outline-none"
                        placeholder="PAN Number"
                      />
                    </div>
                    <div className="text-red-400 text-xs">
                      {errors.pan_no && touched.pan_no && errors.pan_no}
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={handleFileInputClick}
                  >
                    <div className="p-3 rounded-xl border-2 border-dashed border-[#e4a5cc]">
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        ref={fileInputRef}
                        onChange={uploadFile}
                      />
                      <div className="flex items-center justify-start gap-2">
                        <MdUploadFile color="grey" />
                        <PiLineVertical color="gray" />
                        <p className="text-sm text-gray-400">
                          {files == "" ? "Upload PAN Card" : files}
                        </p>
                        {files !== "" ? (
                          <MdOutlineCancel
                            onClick={() => setFiles("")}
                            className="ml-auto"
                            color="gray"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative primary-linear-gr-bg  p-[2px] rounded-xl">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <FaCreditCard color="gray" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="adhaar_no"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.adhaar_no}
                        className="bg-white border-0 border-gray-300 text-gray-900 text-sm rounded-xl block w-full ps-14 py-3.5 pr-3.5 pl-10 focus:outline-none"
                        placeholder="Adhaar Card"
                      />
                    </div>
                    <div className="text-red-400 text-xs">
                      {errors.adhaar_no &&
                        touched.adhaar_no &&
                        errors.adhaar_no}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 mt-4">
                  <div>
                    <div className="relative primary-linear-gr-bg  p-[2px] rounded-xl">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <IoDocumentText color="grey" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        name="company_pan_no"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company_pan_no}
                        className=" bg-white border-0 border-gray-300 text-gray-900 text-sm rounded-xl block w-full ps-14 py-3.5 pr-3.5 pl-10 focus:outline-none"
                        placeholder="Company PAN"
                      />
                    </div>
                    <div className="text-red-400 text-xs">
                      {errors.company_pan_no &&
                        touched.company_pan_no &&
                        errors.company_pan_no}
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={handleCompanyInputClick}
                  >
                    <div className="p-3 rounded-xl border-2 border-dashed border-[#e4a5cc]">
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        ref={companyInputRef}
                        onChange={uploadCompanyPanCard}
                      />
                      <div className="flex items-center justify-start gap-2">
                        <MdUploadFile color="grey" />
                        <PiLineVertical color="gray" />
                        <p className="text-sm text-gray-400">
                          {companyPanCard == ""
                            ? "Upload Company PAN Card"
                            : companyPanCard}
                        </p>
                        {companyPanCard !== "" ? (
                          <MdOutlineCancel
                            onClick={() => setCompanyPanCard("")}
                            className="ml-auto"
                            color="gray"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative primary-linear-gr-bg  p-[2px] rounded-xl">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <IoDocumentText color="grey" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="company_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company_name}
                        disabled
                        className=" bg-white border-0 border-gray-300 text-gray-900 text-sm rounded-xl block w-full ps-14 py-3.5 pr-3.5 pl-10 focus:outline-none"
                        placeholder="Company Name"
                      />
                    </div>
                    {/* <div className="text-red-400 text-xs">
                      {errors.company_pan_no &&
                        touched.company_pan_no &&
                        errors.company_pan_no}
                    </div> */}
                  </div>
                  <div>
                    <div className="relative primary-linear-gr-bg  p-[2px] rounded-xl">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none gap-2">
                        <FaCreditCard color="gray" />
                        <PiLineVertical color="gray" />
                      </div>
                      <input
                        type="text"
                        name="company_adhaar_no"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company_adhaar_no}
                        className="bg-white border-0 border-gray-300 text-gray-900 text-sm rounded-xl block w-full ps-14 py-3.5 pr-3.5 pl-10"
                        placeholder="Aadhar Card"
                      />
                    </div>
                    <div className="text-red-400 text-xs">
                      {errors.company_adhaar_no &&
                        touched.company_adhaar_no &&
                        errors.company_adhaar_no}
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                  disabled={isSubmitting ? true : false}
                  style={
                    !isSubmitting
                      ? null
                      : {
                          backgroundColor: "gray",
                        }
                  }
                  className="flex w-full primary-btn items-center justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isIndividual ? "Next" : "Confirm"}
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
              <a className="underline font-semibold" href="#">
                Terms & Conditions & Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex">
        <PaymorzSider />
      </div>
    </div>
  );
}
