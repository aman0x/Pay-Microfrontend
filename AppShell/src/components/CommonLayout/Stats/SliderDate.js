import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SliderDate() {
  const [dates, setDates] = useState([]);
  const generateDateArray = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i - 2);
      const day = nextDate.getDate(); // Get day (DD)
      const dayName = nextDate.toLocaleDateString(undefined, {
        weekday: "short",
      }); // Get day name
      dates.push({ day, dayName });
    }

    return dates;
  };

  useEffect(() => {
    setDates(generateDateArray());
  }, []);

  return (
    <>
      <div className="w-full flex items-center">
        <Swiper
          slidesPerView={4}
          cssMode={true}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={false}
          defaultValue={3}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {dates.map((date, i) => {
            return (
              <SwiperSlide key={`Swiper Date - ${i}`}>
                <div
                  className={`flex justify-center w-fit rounded-2xl p-[1px] ${
                    i === 2 ? "primary-linear-gr-bg " : ""
                  }`}
                >
                  <div
                    className={`flex flex-col gap-1 items-center rounded-2xl ${
                      i === 2
                        ? "bg-black-primary w-[50px] h-[65px]"
                        : "bg-white  w-[50px] h-[60px] "
                    } p-[0.6rem]`}
                  >
                    <div className="poppins-bold">{date.day}</div>
                    <div
                      className={`poppins-regular text-xs  ${
                        i === 2 ? "" : "text-gray-600"
                      }`}
                    >
                      {date.dayName}
                    </div>
                    {i == 2 ? (
                      <div className="mt-1">
                        <svg
                          width="22"
                          height="3"
                          viewBox="0 0 22 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.285889"
                            width="21"
                            height="3"
                            rx="1.5"
                            fill="white"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center poppins-regular text-[10px] text-gray-600 mt-4">
        {moment(new Date()).format("D MMMM YYYY")}
      </div>
    </>
  );
}
