import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SliderDate() {
  return (
    <div className='w-full flex items-center'>
      <Swiper
        slidesPerView={5}
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={false}
        defaultValue={3}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>25 </div>
                    <div className='poppins-light text-gray-600'>Sun</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>25 </div>
                    <div className='poppins-light text-gray-600'>Mon</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center primary-linear-gr-bg p-[1.5px]  w-fit rounded-2xl '>
                <div className='flex flex-col gap-1 items-center bg-black-primary p-[0.6rem]  w-fit  rounded-2xl '>
                    <div className='poppins-bold'>27 </div>
                    <div className='poppins-bold'>Tue</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>28 </div>
                    <div className='poppins-light text-gray-600'>Wed</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>29 </div>
                    <div className='poppins-light text-gray-600'>Thu</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>30 </div>
                    <div className='poppins-light text-gray-600'>Fri</div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center w-fit rounded-2xl'>
                <div className='flex flex-col gap-1 items-center bg-white p-[0.5rem] rounded-2xl w-fit'>
                    <div className='poppins-bold'>31 </div>
                    <div className='poppins-light text-gray-600'>Sat</div>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
