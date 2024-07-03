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
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={false}
        defaultValue={2}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-1 items-center bg-black-primary p-[0.5rem] rounded-lg w-fit'>
                    <div className='poppins-bold'>27 </div>
                    <div className='poppins-bold'>Wed</div>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col gap-1 items-center'>
                <div className='poppins-bold'>27 </div>
                <div className='poppins-bold'>Wed</div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
