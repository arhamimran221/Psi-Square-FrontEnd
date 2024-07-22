import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Html from "../../Assests/Html.png"
import Vue from "../../Assests/VueJs.png"
import Angular from "../../Assests/Angular.png"
import node from "../../Assests/Node.png"
import native from "../../Assests/Native.png"
import python from "../../Assests/python.png"

const ServicesSlider = () => {
  return (
    <div className="psi_container ">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        centered
      >
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
            <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={Html} alt="" className="lg:w-[200px] w-[300px]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
            <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={Vue} alt="" className="lg:w-[200px] w-[300px]" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
          <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={Angular} alt="" className="lg:w-[200px] w-[300px]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
          <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={node} alt="" className="lg:w-[200px] w-[300px]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
          <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={native} alt="" className="lg:w-[200px] w-[300px]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-center w-[100%] ">
          <div className=" hover:text-blue-900 cursor-pointer ">
              <img src={python} alt="" className="lg:w-[200px] w-[300px]" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ServicesSlider;
