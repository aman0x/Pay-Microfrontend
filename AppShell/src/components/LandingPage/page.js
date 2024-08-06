import {FAQ} from "./faq"
import {useState} from "react"
import "./style.css"
import { useNavigate } from "react-router-dom"
export default function Home() {
  const [IsDropdown,setInDropDown] = useState(false)
  const navigate = useNavigate()
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    <>
      {/* Top Section */}


      <div className="landing-page w-full bg-cover bg-center bg-no-repeat">

        {/* Header  */}


        <div className="flex flex-col justify-center min-w-[320px]">
          <div className="overflow-hidden gap-2.5 self-stretch  py-3 w-full text-xs tracking-wider leading-relaxed text-center text-white bg-gray-800 max-md:px-5 max-md:max-w-full">
            Advertisement/Promotions text Lorem ipsum dolor sit amet, consectetur
            adipiscing{" "}
          </div>
          <div className="flex flex-wrap gap-5 justify-between items-center px-16 py-5 w-full text-sm font-semibold rounded-[73px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0f76d2bdea7f403ab163842ac4a0749d8d8daea00cb51fea4c7381b361e07a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto aspect-[3.04] w-[170px]"
            /> 
            <div className="hidden md:flex flex-wrap gap-2.5 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              <div className="hidden lg:flex gap-5 items-start self-stretch pr-16 my-auto text-white min-w-[240px]">
                <div onClick={()=>scrollToDiv('features')} className="cursor-pointer">Features</div>
                <div onClick={()=>scrollToDiv('howitworks')} className="cursor-pointer">How it Works</div>
                <div onClick={()=>scrollToDiv('payment')} className="cursor-pointer">Payments</div>
              </div>
              <div className="flex gap-2 justify-center items-center self-stretch py-3 pr-7 pl-5 my-auto text-white rounded-[100px] max-md:pr-5 cursor-pointer" onClick={()=>navigate('/accounts/login')}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fef38cf45dd1e56a226f37c3751a5c12fa2eb1e15fc6a333292db703e1eecb4d?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
                <div className="self-stretch my-auto">Log In</div>
              </div>
              <div className="flex gap-2 justify-center items-center self-stretch py-3 pr-7 pl-5 my-auto bg-white shadow-2xl rounded-[100px] max-md:pr-5"
              onClick={()=>navigate('/accounts/signup')}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcf79772331b6463b14d15b883d2d46099bfdb56f3081b43b28b479e8fddad4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
                <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                  Sign Up
                </div>
              </div>
            </div>
            <div className="lg:hidden" onClick={()=>setInDropDown(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3_456)">
              <path d="M1 5.99994H23C23.2652 5.99994 23.5196 5.89458 23.7071 5.70704C23.8946 5.51951 24 5.26515 24 4.99994C24 4.73472 23.8946 4.48037 23.7071 4.29283C23.5196 4.1053 23.2652 3.99994 23 3.99994H1C0.734784 3.99994 0.48043 4.1053 0.292893 4.29283C0.105357 4.48037 0 4.73472 0 4.99994C0 5.26515 0.105357 5.51951 0.292893 5.70704C0.48043 5.89458 0.734784 5.99994 1 5.99994Z" fill="white"/>
              <path d="M23 9H9C8.73478 9 8.48043 9.10536 8.29289 9.29289C8.10536 9.48043 8 9.73478 8 10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11H23C23.2652 11 23.5196 10.8946 23.7071 10.7071C23.8946 10.5196 24 10.2652 24 10C24 9.73478 23.8946 9.48043 23.7071 9.29289C23.5196 9.10536 23.2652 9 23 9Z" fill="white"/>
              <path d="M23 19H9C8.73478 19 8.48043 19.1054 8.29289 19.2929C8.10536 19.4804 8 19.7348 8 20C8 20.2652 8.10536 20.5196 8.29289 20.7071C8.48043 20.8947 8.73478 21 9 21H23C23.2652 21 23.5196 20.8947 23.7071 20.7071C23.8946 20.5196 24 20.2652 24 20C24 19.7348 23.8946 19.4804 23.7071 19.2929C23.5196 19.1054 23.2652 19 23 19Z" fill="white"/>
              <path d="M23 14H1C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8947 0.734784 16 1 16H23C23.2652 16 23.5196 15.8947 23.7071 15.7071C23.8946 15.5196 24 15.2652 24 15C24 14.7348 23.8946 14.4804 23.7071 14.2929C23.5196 14.1054 23.2652 14 23 14Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_3_456">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            
             {IsDropdown && <Dropdown setDropdown={setInDropDown} scrollToDiv={scrollToDiv}/>}
          </div>
        </div>

        {/* Intro */}

        <div className="flex flex-col gap-9 mt-5 justify-center items-center ">
          <div className="w-3/5 text-center">
            <p className="text-[14px] font-semibold text-white ">Paymorz Your best solution for making payments
              with the lowest fees</p>

            <p className="text-[30px] md:text-[42px] font-bold text-white">Payments Have Newer
              Been Easier !</p>

            <p className="text-[14px] font-normal text-white">
              Pay community maintenance fees,
              home goods, cost of education
              Freelancer services,
              taxes and more with our great app!
            </p>
          </div>

          <div onClick={()=>navigate('/accounts/signup')} className="flex overflow-hidden gap-2 justify-center items-center py-5 pr-8 pl-9 text-sm font-semibold shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px]">
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              Create an Account
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/313524931b5d946b5f7657284f2778f794c3e1cc7c44b917d4f5a2584beaa809?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center pt-10 pb-10">
            <div className="text-xs font-semibold text-center text-white">
              Download Our Application
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center mt-3.5 w-[80%] max-w-full md:!w-[100%]">
              <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center self-stretch px-6 py-4 my-auto bg-white rounded-2xl shadow-xl basis-0 min-w-[240px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bc9e3c4cb41164f9b7f323ebdac634fa6d3845e2ab4dc249a39747f35c4627?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.93]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-xs tracking-wide text-zinc-400">
                    Download in the
                  </div>
                  <div className="text-sm font-semibold text-gray-800">App Store</div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center self-stretch px-6 py-4 my-auto bg-white rounded-2xl shadow-xl basis-0 min-w-[240px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cea2454eafb2885eb978cbb08a1e253e1aa9130979a2fe7f50a355211086131?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.93]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-xs tracking-wide text-zinc-400">
                    Download in the
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    Play Market
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>



      </div>


      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac69aa83fcc958a17470a76c839e504873d9479b8e543598915122ff76ca704a?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
        className="object-contain w-full aspect-[2.56]"
      />


      {/* Features */}


      <div className="flex flex-col z-0 items-center pt-3 pb-12 px-16 max-md:px-5 max-md:max-w-full " id="features">
        <div className="flex flex-col lg:!flex-row  flex-wrap gap-5 justify-between lg:!items-end max-w-full w-[1180px]">
          <div className="flex flex-col  font-semibold min-w-[240px]">
            <div className="flex gap-2.5 items-center md:self-start px-5 py-2.5 text-sm text-center whitespace-nowrap rounded-[94px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74fa2dc2c879140b7c7c26a6ebeb53c2de2652a021fbea4647cc4c276cb4a032?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                Features
              </div>
            </div>
            <div className="mt-5 text-3xl text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              The Best <span className="font-bold">Features</span> That{" "}
              <br />
              Paymorz Provides To You
            </div>
          </div>
          <div className="flex-1 shrink text-sm leading-6 basis-0 max-w-[470px] text-zinc-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra.
          </div>
        </div>
        <div className="flex flex-col lg:!flex-row gap-5 justify-center items-start self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/208e7380373cd6a5b534c863bd18227bdbed7e11c686734be2d253eaaed14ec8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain w-full aspect-[1.66] min-h-[354px] max-md:max-w-full"
            />
            <div className="flex flex-col justify-center px-5 mt-3.5 w-full max-md:max-w-full">
              <div className="text-lg font-medium leading-tight text-gray-800 max-md:max-w-full">
                Sent And Received Invoices
              </div>
              <div className="mt-3.5 text-xs leading-5 text-zinc-400 max-md:max-w-full">
                Torem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Curabitur
                tempus urna at turpis condimentum lobortis.
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea55eec7ddd17d9ee480c92628a654356df3ed06a82f8f219a4d158e5eafc8c0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain w-full aspect-[1.66] min-h-[354px] max-md:max-w-full"
            />
            <div className="flex flex-col justify-center px-5 mt-3.5 w-full max-md:max-w-full">
              <div className="text-lg font-medium leading-tight text-gray-800 max-md:max-w-full">
                Make Quick Pyments
              </div>
              <div className="mt-3.5 text-xs leading-5 text-zinc-400 max-md:max-w-full">
                Torem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Curabitur
                tempus urna at turpis condimentum lobortis.
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48b40f1251d7700eb06fdb57a139997c994887307cb47dfaff50380718a912f4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain w-full aspect-[1.66] min-h-[354px] max-md:max-w-full"
            />
            <div className="flex flex-col justify-center px-5 mt-3.5 w-full max-md:max-w-full">
              <div className="text-lg font-medium leading-tight text-gray-800 max-md:max-w-full">
                Track Your Activity
              </div>
              <div className="mt-3.5 text-xs leading-5 text-zinc-400 max-md:max-w-full">
                Torem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Curabitur
                tempus urna at turpis condimentum lobortis.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 max-w-full w-[400px] max-md:mt-10">
          <div className="text-lg leading-6 text-center text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
            Get the <span className="font-bold">best services</span> by
            becoming <br />
            our user
          </div>
          <div className="flex overflow-hidden gap-2 justify-center items-center py-5 pr-8 pl-9 mt-5 text-sm font-semibold shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px] max-md:px-5">
            <div onClick={()=>navigate('/accounts/signup')} className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              Sign Up Now
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e82778b0972f3288e76ca0047f9c32ce71a5eece450f9ae6ff03dca74313d93?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </div>


      {/* How it work */}


      <div className="howItwork flex flex-col justify-center items-center py-16 px-16 max-md:px-5 max-md:max-w-full" id="howitworks">
        <div className="flex flex-wrap gap-5 justify-between items-end max-w-full w-[1180px]">
          <div className="flex flex-col justify-center items-start font-semibold text-center max-w-[400px] min-w-[240px] w-[400px]">
            <div className="flex gap-2.5 items-center px-5 py-2.5 text-sm rounded-[94px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/537473d31d748cc94e66086fc3d3518e1be95aa7b77d1db4194bf1e56bebee7f?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                How It Works
              </div>
            </div>
            <div className="mt-5 text-3xl text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              With Paymorz You get The{" "}
              <span className="font-bold gradient-text">Best Payment Experience</span>
            </div>
          </div>
          <div className="flex-1 shrink text-sm leading-6 basis-0 max-w-[470px] text-zinc-600 max-md:max-w-full">
            Make payments in three easy steps regardless of where you are with your
            mobile phone and internet connection at hand
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-6 gap-2">

          <div>
            <div className="flex flex-col md:!flex-row  justify-center items-center  ">
              <div className="flex justify-center md:w-1/2">
                <img
                  loading="lazy"
                  src="./images/step.png" />
              </div>
              <div className="md:w-1/2 flex md:justify-end">
                <div className="w-4/5">
                  <p className="gradient-text" >Step-1</p>
                  <p className="font-medium text-lg lg:text-2xl text-gray-900">Choose the amount you want to pay and the type of payment.</p>
                  <p className=" font-normal text-xs lg:text-sm text-gray-800">Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div className="flex flex-col-reverse md:!flex-row  justify-center items-center">
              <div className="flex md:justify-center md:w-1/2">
                <div className="w-4/5">
                  <p className="gradient-text" >Step-2</p>
                  <p className="font-medium text-lg lg:text-2xl text-gray-900">Select one or more recipients to whom you want to send the payment.</p>
                  <p className=" font-normal text-xs lg:text-sm text-gray-800">Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>
              <div className="flex justify-center md:w-1/2">
                <img
                  loading="lazy"
                  src="./images/step.png" />
              </div>


            </div>
          </div>

          <div>
            <div className="flex flex-col md:!flex-row  justify-center items-center">
              <div className="flex justify-center md:w-1/2">
                <img
                  loading="lazy"
                  src="./images/step.png" />
              </div>
              <div className="md:w-1/2 flex md:justify-end ">
                <div className="w-4/5">
                  <p className="gradient-text" >Step-3</p>
                  <p className="font-medium text-lg lg:text-2xl text-gray-900">Choose the card you want to pay with and confirm the payment</p>
                  <p className=" font-normal text-xs lg:text-sm text-gray-800">Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>

            </div>
          </div>

        </div>


        <div className="flex flex-col justify-center items-center pt-5">
          <div className="text-lg leading-6 text-center text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
            <span className="font-bold gradient-text">Download our app</span> right now to make
            your payment process easier
          </div>
          <div className="flex flex-col items-center mt-10 max-w-full w-[80%] md:!w-[100%]">
            <div className="flex flex-wrap gap-2.5 items-start w-full  max-w-[600px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center px-6 py-2.5 bg-white rounded-2xl basis-0 min-w-[240px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/910c3597694c3b0d1fe02f07a185d0e1d87d34bab4f850166e4bbb5bcd1c142d?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-xs tracking-wide text-zinc-400">
                    Download in the
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    App Store
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center px-6 py-2.5 bg-white rounded-2xl basis-0 min-w-[240px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ffd3df8f39e2cb26a98e553f381204dba9f2fa74cdefdc84d342bcfecd9f230?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-xs tracking-wide text-zinc-400">
                    Download in the
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    Play Market
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Why Choose Us */}


      <div className=" py-3 px-16 max-md:px-5 max-md:max-w-full">

        <div className="flex flex-col py-10">
          <div className="flex flex-col justify-center self-center max-w-full text-sm font-semibold text-center w-[400px]">
            <div className="flex gap-2.5 items-center self-center px-5 py-2.5 rounded-[94px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ec10d8efe6fe779823e1f19d681f32d3533efe8cfb40e63239745830c045fa?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                Why Choose Us
              </div>
            </div>
            <div className="mt-5 text-3xl text-gray-800 bg-clip-text">
              We Havea Lot to <span className="font-bold gradient-text">Offer You</span>
            </div>
            <div className="mt-5 leading-6 text-zinc-400">
              Jorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-start mt-10 w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 max-w-[380px] min-w-[332px] rounded-[30px] max-md:px-5 border border-gray-300 ">
              <div className="flex gap-5 justify-center items-center w-full text-lg font-medium leading-6 text-gray-800 whitespace-nowrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93703aada925ad1c00c02a36bac297d164c2c1c21ff7c3047191099a982b2079?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[98px]"
                />
                <div className="flex-1 shrink my-auto basis-0">
                  Low
                  <br />
                  Fees
                </div>
              </div>
              <div className="mt-4 text-xs leading-5 text-zinc-400">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 max-w-[380px] min-w-[332px] rounded-[30px] max-md:px-5 border border-gray-300 ">
              <div className="flex gap-5 justify-center items-center w-full text-lg font-medium leading-6 text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2d73c7a726ecbb72c5949fa8818c9012d7403ca1034fc087fc360148513e55?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[98px]"
                />
                <div className="flex-1 shrink my-auto basis-0">
                  Cooperate With All Major Banks of India
                </div>
              </div>
              <div className="mt-4 text-xs leading-5 text-zinc-400">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 max-w-[380px] min-w-[332px] rounded-[30px] max-md:px-5 border border-gray-300 ">
              <div className="flex gap-5 items-center w-full text-lg font-medium leading-6 text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f38f93e3bb11bcdd52cff24f3958b63387bd3ca0fedb8782c57918c5a0a8941?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[98px]"
                />
                <div className="flex-1 shrink my-auto basis-0">
                  Easy In
                  <br />
                  Use
                </div>
              </div>
              <div className="mt-4 text-xs leading-5 text-zinc-400">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 max-w-[380px] min-w-[332px] rounded-[30px] max-md:px-5 border border-gray-300 ">
              <div className="flex gap-5 justify-center items-center w-full text-lg font-medium leading-6 text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a8adfc5ee9642ba2e333bfc52a530d62029e25c71b483232a6e74ec7892eedd?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[98px]"
                />
                <div className="flex-1 shrink my-auto basis-0">
                  Fully <br />
                  Secured
                </div>
              </div>
              <div className="mt-4 text-xs leading-5 text-zinc-400">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink p-8 basis-0 max-w-[380px] min-w-[332px] rounded-[30px] max-md:px-5 border border-gray-300 ">
              <div className="flex gap-5 justify-center items-center w-full text-lg font-medium leading-6 text-gray-800 whitespace-nowrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4532802806e526edc78077a86ff0e7665f7f7ae19b3bf3d74b59cbcfe778d7b2?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[98px]"
                />
                <div className="flex-1 shrink my-auto basis-0">
                  Informative
                  <br />
                  Statistics
                </div>
              </div>
              <div className="mt-4 text-xs leading-5 text-zinc-400">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.
              </div>
            </div>
          </div>
        </div>

      </div>

     {/* Clients */}


      <div className="flex flex-col items-center px-16 max-md:px-5 ">
        <div className="flex flex-col justify-center items-center max-w-full font-semibold text-center w-[500px]">
          <div className="flex gap-2.5 items-center px-5 py-2.5 text-sm whitespace-nowrap rounded-[94px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73076be332cb7deca9815f7a7b4a6d2ff9cfb76a5246df118b9a12de07d69b9d?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              Clients
            </div>
          </div>
          <div className="mt-5 text-3xl text-gray-800 bg-clip-text">
            Who are Our <span className="font-bold">Customers</span>?
          </div>
          <div className="flex mt-5 rounded-2xl bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] min-h-[3px] w-[85px]" />
        </div>
        <div className="flex flex-col mt-16 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
          <div className="md:flex relative gap-10 justify-center w-full min-h-[420px] max-md:max-w-full">
            <div className="flex absolute top-0 left-0 z-0 shrink-0 self-start h-[278px] min-w-[240px] rounded-[1327px] w-[312px]" />
            <div className="flex relative z-0 flex-col flex-1 shrink justify-center items-start basis-0 min-h-[420px] min-w-[240px] rounded-[30px] max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91998fb61d55d9d75f4760c79e483729b39dedfe76be6181f4b6136a2f1634f0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-cover absolute inset-0 size-full rounded-2xl p-4 md:p-0"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccd259f299e480e25d3174b3b220600e1a0b3584879fe473cf460d33b99fef1?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-contain absolute -right-2 md:-right-8 z-0 max-w-full  w-[220px] md:h-32 aspect-[1.78] bottom-[29px] md:w-[263px] "
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c60fe474918065d43d1378dd556faa02157f91bab0b853a714d5fd7ed9b6407?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-contain absolute top-6 -left-2 md:-top-6 md:-left-10 z-0 max-w-full  shadow-xl aspect-[0.69] h-[223px] w-[197px] rounded-2xl"
              />
            </div>
            <div className="mt-16  flex relative z-0 flex-col flex-1 shrink justify-center my-auto basis-0 max-w-[400px] min-w-[240px]  max-md:mt-10">
              <div className="flex absolute bottom-0 left-3.5 z-0 flex-col max-w-full h-[352px] w-[352px]">
                <div className="flex flex-col justify-center p-8 rounded-full max-md:px-5">
                  <div className="flex flex-col justify-center p-8 rounded-full max-md:px-5">
                    <div className="flex flex-col justify-center p-8 rounded-full stroke-[1.327px] max-md:px-5">
                      <div className="flex shrink-0 rounded-full h-[158px] stroke-[1.327px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-0 text-2xl font-medium leading-7 text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                People who seek to make{" "}
                <span className="font-bold">fast and secure</span> payments in
                individual needs.
              </div>
              <div className="z-0 mt-3.5 text-xs leading-5 text-zinc-600">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </div>
              <div className="flex overflow-hidden z-0 gap-2 justify-center items-center self-start py-5 mt-3.5 text-sm font-semibold rounded-[100px]">
                <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                  Learn More
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb314b828b7d371ac7411c3637481a2aca0ceec0e27f7d1c6a78814f8c861e17?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex md:flex-row relative gap-10 justify-center mt-16 w-full min-h-[420px] max-md:mt-10 max-md:max-w-full">
            <div className="flex absolute top-0 right-0 z-0 shrink-0 self-start h-[278px] min-w-[240px] rounded-[1327px] w-[312px]" />
            <div className="mb-4 md:mb-0 flex relative z-0 flex-col flex-1 shrink justify-center my-auto basis-0 max-w-[400px] min-w-[240px]">
              <div className="flex absolute bottom-0 left-3.5 z-0 flex-col max-w-full h-[352px] w-[352px]">
                <div className="flex flex-col justify-center p-8 rounded-full max-md:px-5">
                  <div className="flex flex-col justify-center p-8 rounded-full max-md:px-5">
                    <div className="flex flex-col justify-center p-8 rounded-full stroke-[1.327px] max-md:px-5">
                      <div className="flex shrink-0 rounded-full h-[158px] stroke-[1.327px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-0 text-2xl font-medium leading-7 text-gray-800 bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                Businesses looking for a reliable partner in{" "}
                <span className="font-bold">
                  managing invoices and making payments
                </span>
              </div>
              <div className="z-0 mt-3.5 text-xs leading-5 text-zinc-600">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </div>
              <div className="flex overflow-hidden z-0 gap-2 justify-center items-center self-start py-5 mt-3.5 text-sm font-semibold rounded-[100px]">
                <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                  Learn More
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d4cf0d80c3b45b0551d61edcdbc42e0646896891c26b35447d6443fc577b15?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
              </div>
            </div>
            <div className="flex relative z-0 flex-col flex-1 shrink justify-center items-start basis-0 min-h-[420px] min-w-[240px] rounded-[30px] max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/183cf19b4330f8b2e7b8eb87eb2a731972700409e6d2bae95de3c5e973d51de0?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-cover absolute inset-0 size-full rounded-2xl p-4 md:p-0"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd1b9eab341b4c63f4f760ec1c318580860509992e00d693df3237110902d61c?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-contain absolute -left-2 md:-left-10 z-0 max-w-full shadow-xl aspect-[1.15] h-[120px] bottom-[30px] md:h-[153px] md:w-[225px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f48f2fcc23016075943e2d5bf1a2729e82c0c8162ec477435b4d26a2b49963f?apiKey=cdd4e44b91ad4de18631f98180cae626&&apiKey=cdd4e44b91ad4de18631f98180cae626"
                className="object-contain absolute -right-2 top-[30px] md:-right-12 z-0 max-w-full h-[120px] shadow-xl aspect-[1.27] md:h-[164px] md:top-[73px] md:w-[271px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-16 max-md:px-5 max-md:max-w-full mt-20">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center max-w-full text-sm font-semibold text-center w-[500px]">
            <div className=" howItwork flex gap-2.5 items-center px-5 py-2.5 text-sm font-semibold text-center whitespace-nowrap rounded-[94px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c1320a7cab5aaa05097104f2f9a00f02a718b0965545a2e978f13682eb86740?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto bg-clip-text gradient-text ">
                Stats
              </div>
            </div>
            <div className="mt-5 text-3xl text-gray-800 bg-clip-text ">
              <span className="font-bold gradient-text">Facts</span> and Stats
            </div>
            <div className="self-stretch mt-5 leading-6 text-zinc-600 max-md:max-w-full">
              Our platform is ready to make managing your payments and invoices
              extremely convenient and simple. Join the 5 million people who already
              trust us to make payments.
            </div>
          </div>
          <div className="grid grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 flex-wrap gap-5 justify-center px-10 mt-16 w-full max-w-[1180px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink justify-center p-8 rounded-3xl basis-0 max-md:px-5">
              <div className="gradient-text self-center text-5xl font-bold leading-tight bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] max-md:text-4xl">
                850K+
              </div>
              <div className="mt-2.5 text-sm font-semibold text-center min-w-[84px] text-zinc-500">
                Downloads
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f743a0374d7cdd03ead3f554727a7a20145fd150da11184b094961cad08227?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 my-auto w-px aspect-[0.01] stroke-[1px] stroke-neutral-300"
            /> */}
            <div className="flex overflow-hidden flex-col flex-1 shrink justify-center p-8 rounded-3xl basis-0 max-md:px-5">
              <div className="gradient-text self-center text-5xl font-bold leading-tight bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] max-md:text-4xl">
                955K+
              </div>
              <div className="mt-2.5 text-sm font-semibold text-center min-w-[84px] text-zinc-500">
                Users
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f743a0374d7cdd03ead3f554727a7a20145fd150da11184b094961cad08227?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 my-auto w-px aspect-[0.01] stroke-[1px] stroke-neutral-300"
            /> */}
            <div className="flex overflow-hidden flex-col flex-1 shrink justify-center p-8 rounded-3xl basis-0 max-md:px-5">
              <div className="gradient-text self-center text-5xl font-bold leading-tight bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] max-md:text-4xl">
                ₹12M+
              </div>
              <div className="mt-2.5 text-sm font-semibold text-center min-w-[84px] text-zinc-500">
                Earned Commissions
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f743a0374d7cdd03ead3f554727a7a20145fd150da11184b094961cad08227?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 my-auto w-px aspect-[0.01] stroke-[1px] stroke-neutral-300"
            /> */}
            <div className=" flex overflow-hidden flex-col flex-1 shrink justify-center p-8 whitespace-nowrap rounded-3xl basis-0 max-md:px-5">
              <div className="gradient-text self-center text-5xl font-bold leading-tight bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] max-md:text-4xl">
                1M+
              </div>
              <div className="mt-2.5 text-sm font-semibold text-center min-w-[84px] text-zinc-500">
                Transactions
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden gap-2 justify-center items-center py-5 pr-8 pl-9 mt-16 text-sm font-semibold shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px] max-md:px-5 max-md:mt-10">
            <div className="gradient-text self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              Learn More{" "}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdc2d349a77db6639d4df6e9ec42d59ad9b319c8aba626afe355d0c20a569888?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>

      </div>


      <div className="px-4 lg:px-16 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center  max-md:pt-24">
          <div className="flex flex-wrap overflow-hidden relative gap-5 md:pl-20 mt-24 w-full bg-[linear-gradient(66deg,#F6DEC6_-13.84%,#E872D4_39.06%,#C190D9_67.76%,#A2DCFE_114.04%)] max-w-[1286px] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex absolute z-0 flex-col self-start pt-24 h-[366px] min-w-[240px] right-[447px] top-[-101px] w-[366px] max-md:pt-24">
              <div className="flex flex-col px-9 pb-9 rounded-full max-md:px-5">
                <div className="flex flex-col px-8 pb-8 rounded-full max-md:px-5">
                  <div className="flex flex-col px-9 pb-9 rounded-full stroke-[1px] max-md:px-5">
                    <div className="flex shrink-0 rounded-full h-[164px] stroke-[1px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex absolute right-0 top-2/4 z-0 shrink-0 self-start rounded-full -translate-y-2/4 aspect-square bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)] h-[272px] min-w-[240px] translate-x-[0%] w-[272px]" />
            <div className="flex z-0 flex-col flex-1 shrink justify-center py-10 my-auto basis-0 md:max-w-[400px] md:min-w-[300px]">
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-center w-full text-white">
                  <div className="text-3xl font-semibold">
                    Join to <span className="font-bold text-white">Paymorz</span>{" "}
                    Today!
                  </div>
                  <div className="mt-5 text-sm leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                  </div>
                </div>
                <div className="flex overflow-hidden gap-2 justify-center items-center py-5 pr-8 pl-9 mt-10 w-full text-sm font-semibold shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px] max-md:px-5">
                  <div onClick={()=>navigate('/accounts/signup')} className="gradient-text self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                    Join Now
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center items-start mt-10 w-full">
                <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center px-6 py-2.5 rounded-2xl basis-0 bg-white bg-opacity-60 min-w-[195px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a92c2eff94d9c790bb9a7bf6b15ca93b34e2a2081b7f5033efaa0d71d88125?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="text-xs tracking-wide text-zinc-400">
                      Download in the
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      App Store
                    </div>
                  </div>
                </div>
                <div className="flex overflow-hidden flex-1 shrink gap-2.5 justify-center items-center px-6 py-2.5 rounded-2xl basis-0 bg-white bg-opacity-60 min-w-[195px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f7d6d3b017ccaaeb876e517c623ead9eb33c336c91b4587f42547c9fc385d7?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="text-xs tracking-wide text-zinc-400">
                      Download in the
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Play Market
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c00351e53bbd34f60910e05a0dc33985b9bdbff829700a8c5b9073d7351579af?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="hidden md:block object-contain z-0 flex-1 shrink w-full aspect-[1.87] basis-0 min-w-[240px] max-md:max-w-full"
            />
            
          </div>
        </div>
      </div>




      {/* Faqs */}

      <div className="responsive mt-20 md:mt-0 justify-center items-center w-11/12 m-auto">
        <div className="flex flex-col justify-center text-center md:text-start text-sm md:w-1/3 max-w-[350px] pl-8 ">
          <div className="howItwork flex mx-auto md:mx-0 gap-2.5 items-center self-start px-5 py-2.5 text-center whitespace-nowrap rounded-[94px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/528f1fd832ae85fd6d856a70b84661e6b1d9003a5616c0ed703d122c8bc3a09e?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <div className="gradient-text self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
              F.A.Q.
            </div>
          </div>
          <div className="mt-5 text-3xl text-gray-800 font-semibold ">
            Frequently <br />
            Asked Questions
          </div>
          <div className="mt-5 leading-6 text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <FAQ  />
      </div>







      {/* Payments */}

      <div className="px-16 max-md:px-5 max-md:max-w-full" id="payment">
        <div className="flex flex-col items-end px-4 lg:px-20 font-semibold ">
          <div className="flex flex-col py-20 w-full max-md:max-w-full">
            <div className="flex flex-col justify-center items-center self-center text-center">
              <div className="howItwork flex gap-2.5 items-center px-5 py-2.5 text-sm whitespace-nowrap rounded-[94px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6de30df2742b04097a3e381858f217f9886443f887535b003cc33c37fc5a574?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="gradient-text self-stretch my-auto bg-clip-text ">
                  Payments
                </div>
              </div>
              <div className="mt-5 text-3xl text-gray-800">
                Payment Options To <br />
                Choose From
              </div>
              <div className="flex mt-5 rounded-2xl bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] min-h-[3px] w-[85px]" />
            </div>
            <div className="flex flex-col  w-full text-xs max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col lg:!flex-row items-center  lg:gap-5 justify-center w-full max-md:max-w-full">
                <div className="flex flex-col  text-xs font-semibold max-w-[380px]">
                  <div className="flex overflow-hidden relative flex-col p-8 mt-10 w-full bg-gray-800 rounded-[30px]">
                    <div className="flex-1 z-10 shrink gap-1.5 w-full text-2xl font-medium leading-tight text-center text-white">
                      Quick Pay
                    </div>
                    <div className="flex z-0 gap-2.5 items-center self-center px-4 py-2.5 mt-5 rounded-[55px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)]">
                        3.00 % GST{" "}
                      </div>
                    </div>
                    <div className="z-0 mt-5 leading-5 text-center text-zinc-400">
                      Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                    </div>
                    <div className="flex z-0 flex-col px-5 pb-5 mt-5 w-full text-white">
                      <div className="flex gap-4 justify-center items-center w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4eaac78fd7240c7e59f3e0818584d6d6618a2c729acbba5acad61a101ed333?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1801ae8031429a1a692c24897dea38f5b7d34817b98c7249e58e836d7b455d22?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/649e5542c4e6ea1f846379a282d1664e0b124f3a73d9897117bf3e12e43228a0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                    </div>
                    <div className="flex overflow-hidden z-0 gap-2 justify-center items-center self-center py-5 pr-8 pl-9 mt-5 text-sm shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                        Learn More
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/620a6e42e1c3268178fe7275fb169c9d784d041dcfa87fb9331e6b37e378c7da?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                      />
                    </div>
                    <div className="flex absolute z-0 rounded-full aspect-square bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)] h-[317px] min-h-[317px] right-[-174px] top-[-180px] w-[317px]" />
                  </div>
                </div>
                <div className="flex flex-col  text-xs font-semibold max-w-[380px]">
                  <div className="flex overflow-hidden relative flex-col p-8 mt-10 w-full bg-gray-800 rounded-[30px]">
                    <div className="flex-1 z-10 shrink gap-1.5 w-full text-2xl font-medium leading-tight text-center text-white">
                      Quick Pay
                    </div>
                    <div className="flex z-0 gap-2.5 items-center self-center px-4 py-2.5 mt-5 rounded-[55px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)]">
                        3.00 % GST{" "}
                      </div>
                    </div>
                    <div className="z-0 mt-5 leading-5 text-center text-zinc-400">
                      Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                    </div>
                    <div className="flex z-0 flex-col px-5 pb-5 mt-5 w-full text-white">
                      <div className="flex gap-4 justify-center items-center w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4eaac78fd7240c7e59f3e0818584d6d6618a2c729acbba5acad61a101ed333?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1801ae8031429a1a692c24897dea38f5b7d34817b98c7249e58e836d7b455d22?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/649e5542c4e6ea1f846379a282d1664e0b124f3a73d9897117bf3e12e43228a0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                    </div>
                    <div className="flex overflow-hidden z-0 gap-2 justify-center items-center self-center py-5 pr-8 pl-9 mt-5 text-sm shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                        Learn More
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/620a6e42e1c3268178fe7275fb169c9d784d041dcfa87fb9331e6b37e378c7da?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                      />
                    </div>
                    <div className="flex absolute z-0 rounded-full aspect-square bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)] h-[317px] min-h-[317px] right-[-174px] top-[-180px] w-[317px]" />
                  </div>
                </div>
                <div className="flex flex-col  text-xs font-semibold max-w-[380px]">
                  <div className="flex overflow-hidden relative flex-col p-8 mt-10 w-full bg-gray-800 rounded-[30px]">
                    <div className="flex-1 z-10 shrink gap-1.5 w-full text-2xl font-medium leading-tight text-center text-white">
                      Quick Pay
                    </div>
                    <div className="flex z-0 gap-2.5 items-center self-center px-4 py-2.5 mt-5 rounded-[55px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)]">
                        3.00 % GST{" "}
                      </div>
                    </div>
                    <div className="z-0 mt-5 leading-5 text-center text-zinc-400">
                      Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                    </div>
                    <div className="flex z-0 flex-col px-5 pb-5 mt-5 w-full text-white">
                      <div className="flex gap-4 justify-center items-center w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4eaac78fd7240c7e59f3e0818584d6d6618a2c729acbba5acad61a101ed333?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1801ae8031429a1a692c24897dea38f5b7d34817b98c7249e58e836d7b455d22?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center items-center mt-2.5 w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/649e5542c4e6ea1f846379a282d1664e0b124f3a73d9897117bf3e12e43228a0?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                          Transaction processing within 24 hours
                        </div>
                      </div>
                    </div>
                    <div className="flex overflow-hidden z-0 gap-2 justify-center items-center self-center py-5 pr-8 pl-9 mt-5 text-sm shadow-xl bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px]">
                      <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]">
                        Learn More
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/620a6e42e1c3268178fe7275fb169c9d784d041dcfa87fb9331e6b37e378c7da?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                      />
                    </div>
                    <div className="flex absolute z-0 rounded-full aspect-square bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)] h-[317px] min-h-[317px] right-[-174px] top-[-180px] w-[317px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* News Letter Component */}

      <div className="howItwork px-16 flex items-center justify-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col  px-10 py-20 text-sm max-w-[800px] max-md:px-5">
          <div className="howItwork flex gap-2.5 items-center self-center px-5 py-2.5 font-semibold text-center rounded-[94px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee79729da18411e1376706f2faf88463b079989cb1adc3f9b939b40dc843f83?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <div className="self-stretch my-auto bg-clip-text gradient-text">
              Instant Notification
            </div>
          </div>
          <div className="mt-5 text-3xl font-semibold text-center text-gray-800 max-md:max-w-full">
            Subscribe To Our Newsletter To Always Be In The oop With Our New Awesome
            Feautures
          </div>
          <div className="mt-5 leading-6 text-center text-zinc-600 max-md:max-w-full">
            Jorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </div>
          <div className="md:hidden flex-wrap gap-5 justify-between items-center py-4 pr-1.5 pl-12 mt-5 w-full bg-gray-100 bg-opacity-60 rounded-[100px] max-md:pl-5 max-md:max-w-full max-md:flex-col max-md:gap-3">
          <input
            type="email"
            placeholder="Enter Your Mail ..."
            className="self-stretch my-auto italic font-light text-zinc-500 bg-transparent outline-none max-md:w-full"
          />
          </div>
          <div className="hidden md:flex flex-wrap gap-5 justify-between items-center py-1.5 pr-1.5 pl-12 mt-5 w-full bg-gray-100 bg-opacity-60 rounded-[100px] max-md:pl-5 max-md:max-w-full max-md:flex-col max-md:gap-3">
          <input
            type="email"
            placeholder="Enter Your Mail ..."
            className="self-stretch my-auto italic font-light text-zinc-500 bg-transparent outline-none max-md:w-full"
          />
  <div className="flex gap-2 justify-center items-center py-5 pr-8 pl-9 font-semibold shadow bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] rounded-[100px] max-md:w-full max-md:justify-between max-md:py-3 max-md:px-5">
    <div className="gradient-text bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)] max-md:text-center">
      Subscribe
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/204679e176ac877d258af2d8242f8e492380d0a8698c40cb569e104cf34d99e1?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
      className="object-contain shrink-0 aspect-square w-[18px] max-md:w-[14px]"
    />
  </div>
          </div>


        </div>
      </div>


      {/* Footer */}

      <div className="flex overflow-hidden flex-col bg-gray-200">
        <div className="flex flex-col px-16 pt-16 pb-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-20 md:gap-36 items-start w-full max-md:max-w-full">
            <div className="flex flex-col md:max-w-[400px] md:min-w-[320px]">
              <div className="flex flex-col w-full text-xs leading-5 text-zinc-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8137787923fd2c690e4672431c1be00a0c9a862056e7df359b7715b9bc0d4013?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                  className="object-contain max-w-full aspect-[2.68] w-[217px]"
                />
                <div className="mt-5">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.{" "}
                </div>
              </div>
              <div className="flex justify-between items-center mt-8 w-full min-h-[92px]">
                <div className="flex relative flex-col flex-1 shrink items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
                  <div className="flex absolute right-3.5 z-0 self-start max-w-full bottom-[-53px] h-[171px] min-h-[171px] rounded-[1000px] w-[372px]" />
                  <div className="z-0 text-xs font-semibold text-zinc-600">
                    Download the App
                  </div>
                  <div className="flex z-0 gap-2.5 items-start mt-5 w-full ">
                    <div className="flex overflow-hidden flex-1 shrink gap-2.5 items-center px-6 py-2.5 bg-white rounded-2xl basis-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df90f265c280fc52261a8893589901085068180bc0321e94105480f0290063e8?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                        className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                      />
                      <div className="flex flex-col self-stretch my-auto">
                        <div className="text-xs tracking-wide text-zinc-400">
                          Download in the
                        </div>
                        <div className="text-sm font-semibold text-gray-800">
                          App Store
                        </div>
                      </div>
                    </div>
                    <div className="flex overflow-hidden flex-1 shrink gap-2.5 items-center px-6 py-2.5 bg-white rounded-2xl basis-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/044dadb1e9af460d61683cc03bc01582418c3c53fecb37bf20fdfffcacddc06e?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                        className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[27px]"
                      />
                      <div className="flex flex-col self-stretch my-auto">
                        <div className="text-xs tracking-wide text-zinc-400">
                          Download in the
                        </div>
                        <div className="text-sm font-semibold text-gray-800">
                          Play Market
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 shrink gap-5 items-start basis-0 min-w-[240px]">
              <div className="flex flex-col flex-1 shrink pt-8 basis-0">
                <div className="text-sm font-semibold text-gray-800">Company</div>
                <div className="flex flex-col mt-5 w-full text-xs leading-relaxed">
                  <div className="bg-clip-text bg-[linear-gradient(77deg,#F6DEC6_-5.32%,#E872D4_48.06%,#C190D9_69.25%,#A2DCFE_94.8%)]">
                    Home
                  </div>
                  <div className="mt-2.5 text-zinc-500">About</div>
                  <div className="mt-2.5 text-zinc-500">Our Team</div>
                  <div className="flex-1 shrink gap-2 self-stretch mt-2.5 whitespace-nowrap text-zinc-500 w-[58px]">
                    Services
                  </div>
                  <div className="mt-2.5 text-zinc-500">Solutions</div>
                  <div className="mt-2.5 text-zinc-500">Testimonials</div>
                  <div className="mt-2.5 text-zinc-500">Contacts</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink pt-8 basis-0">
                <div className="text-sm font-semibold text-gray-800">
                  Services
                </div>
                <div className="flex flex-col justify-center mt-5 w-full text-xs leading-relaxed text-zinc-500">
                  <div>Terms of Use</div>
                  <div className="mt-3.5">Privacy Policy</div>
                  <div className="mt-3.5">Cookie Policy</div>
                  <div className="mt-3.5">SUPPORT</div>
                  <div className="mt-3.5">FAQ</div>
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink pt-8 basis-0">
                <div className="text-sm font-semibold text-gray-800">legal</div>
                <div className="flex flex-col justify-center mt-5 w-full text-xs leading-relaxed text-zinc-500">
                  <div>Terms of Use</div>
                  <div className="mt-3.5">Privacy Policy</div>
                  <div className="mt-3.5">Cookie Policy</div>
                  <div className="mt-3.5">SUPPORT</div>
                  <div className="mt-3.5">FAQ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-center px-16 py-5 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
          <div className="self-stretch my-auto text-xs font-light leading-6 text-white">
            © 2024. <span className="font-bold text-white">Paymorz</span>. All
            Rights Reserved.
          </div>
          <div className="flex  justify-center items-center self-stretch my-auto">
            <div className="flex gap-2.5 justify-center items-center   rounded-[1000px] w-[30px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/234cbe495c55ecd8f09151f6314897200fd7e33fe798eb06572d07660d8079b5?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center   rounded-[1000px] w-[30px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2680f5e0df116c1707b29bff6f2b7149a3644f53d5641501c3d4546396e9459b?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center   rounded-[1000px] w-[30px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d4b7c77837840ff52433400dcdd08f89bc7864282721d34213d57dd1f3bc58?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
            <div className="flex gap-2.5 justify-center items-center   rounded-[1000px] w-[30px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c74bf6328f7417ae562e5eeba5197ab1c78c72379275c9ff0b0cb4ced01f4f1?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
                className="object-contain self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

function Dropdown({setDropdown,scrollToDiv}){
  const navigate = useNavigate()
  return(
    <div className="absolute right-1 top-10 flex flex-col justify-between bg-[linear-gradient(108deg,#FFF_-0.37%,#F4F4F6_98.96%)] w-72 p-10 rounded-2xl h-[40rem]">
      <div className="text-right flex justify-end" onClick={()=>setDropdown(false)}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8 8" stroke="#4E5459" stroke-linecap="round"/>
        <path d="M8 1L1 8" stroke="#4E5459" stroke-linecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col gap-6 items-start pr-16 my-auto text-black min-w-[240px] text-lg">
          <div onClick={()=>scrollToDiv('features')} className="cursor-pointer">Features</div>
          <div onClick={()=>scrollToDiv('howitworks')} className="cursor-pointer">How it Works</div>
          <div onClick={()=>scrollToDiv('payment')} className="cursor-pointer">Payments</div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 justify-center items-center self-stretch py-3 pr-7 pl-5 my-auto bg-white shadow-sm rounded-[100px] max-md:pr-5 w-48 ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcf79772331b6463b14d15b883d2d46099bfdb56f3081b43b28b479e8fddad4?apiKey=02c907f9d629401e9ee2b64d643cae1d&&apiKey=02c907f9d629401e9ee2b64d643cae1d"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(99deg,#D33DBC_1%,#7A6AE4_51.23%)]" onClick={()=>navigate('/accounts/signup')}>
            Sign Up
          </div>
        </div>
        <div className="flex w-48 gap-2 justify-center items-center self-stretch py-3 pr-7 pl-5 my-auto text-gray-400 rounded-[100px] max-md:pr-5 border-2 border-gray-400">
          <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.3352 0C3.97719 0 2.06018 1.91701 2.06018 4.27502C2.06018 6.58803 3.86919 8.46004 6.2272 8.54104C6.2992 8.53204 6.3712 8.53204 6.4252 8.54104C6.4432 8.54104 6.4522 8.54104 6.4702 8.54104C6.4792 8.54104 6.4792 8.54104 6.4882 8.54104C8.79221 8.46004 10.6012 6.58803 10.6102 4.27502C10.6102 1.91701 8.69321 0 6.3352 0Z" fill="#9CA3AF"/>
          <path d="M10.908 10.935C8.397 9.26096 4.30202 9.26096 1.77301 10.935C0.630003 11.7 0 12.735 0 13.842C0 14.949 0.630003 15.975 1.76401 16.731C3.02401 17.577 4.67999 18 6.33599 18C7.992 18 9.64801 17.577 10.908 16.731C12.042 15.966 12.672 14.94 12.672 13.824C12.663 12.717 12.042 11.691 10.908 10.935Z" fill="#9CA3AF"/>
          </svg>
          <div className="self-stretch my-auto" onClick={()=>navigate('/accounts/login')}>Log In</div>
        </div>
      </div>
    </div>
  )
}