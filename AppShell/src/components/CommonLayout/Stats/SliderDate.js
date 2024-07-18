import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import moment from 'moment';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SliderDate() {
    const [dates, setDates] = useState([]);
    const generateDateArray = () => {
        const today = new Date();
        const dates = [];
      
        for (let i = 0; i < 7; i++) {
          const nextDate = new Date(today);
          nextDate.setDate(today.getDate() + i - 2);
          const day = nextDate.getDate(); // Get day (DD)
          const dayName = nextDate.toLocaleDateString(undefined, { weekday: 'short' }); // Get day name
          dates.push({ day, dayName });
        }
      
        return dates;
      };

        useEffect(() => {
          setDates(generateDateArray());
        }, []);
       
  return (
    <div>
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
        {
            dates.map((date,i)=>{
                return(
                    <SwiperSlide>
                    <div className={`flex justify-center w-fit rounded-2xl p-[1.5px] ${i===2?'primary-linear-gr-bg ':''}`}>
                        <div className={`flex flex-col gap-1 items-center w-fit  rounded-2xl ${i===2?'bg-black-primary':'bg-white'} p-[0.6rem]`}>
                        <div className='poppins-bold'>{date.day}</div>
                        <div className={`poppins-bold ${i===2?'':'text-gray-600'}`}>{date.dayName}</div>
                        </div>
                    </div>
                    </SwiperSlide> 
                )
            })
        }
       
      </Swiper>
      
    </div>
        <div className="flex justify-center poppins-light text-xs text-gray-600 mt-2">
        {moment(new Date()).format('D MMMM YYYY')}
        </div>
    </div>
  );
}
