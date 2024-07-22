import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import webIcon from "../../Assests/webdeve-icon.png";
import dApp from "../../Assests/Appdev-icon.png";
import mobileApp from "../../Assests/mobileApp-icon.png";
import ui_ux from "../../Assests/ui:ux-icon.png";
import BlockChain from "../../Assests/blockchain-icon.png";
import DevOps from "../../Assests/devops.png";

const Slider = () => {
  return (
    <div className="psi_container ">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // rewind={true}
        loop={true}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="pt-[50px] bg-[#fff]"
        slidesPerView={3}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        
      >
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
            <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={webIcon} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                Web Development
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                Web development is the creation of websites and web
                applications. It involves programming languages like HTML, CSS,
                and JavaScript, as well as frameworks and libraries like React,
                Angular, and Vue.js.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
            <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={ui_ux} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                UI&UX Design
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                UI/UX is the combination of user interface (UI) and user
                experience (UX) design. It involves creating visually appealing
                and user-friendly software interfaces that provide a seamless
                and intuitive experience for users.
              </p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
          <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={dApp} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                DApp
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                Dapp development refers to the creation of decentralized
                applications that run on a blockchain network. Dapps offer
                benefits such as increased security, transparency, and
                immutability.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
          <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={mobileApp} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                Mobile App Development
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                Mobile app development is the process of creating software
                applications that run on mobile devices such as smartphones and
                tablets.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
          <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={BlockChain} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                BlockChain
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                Blockchain is a decentralized digital ledger that records
                transactions and stores data across a network of computers. Each
                block in the chain contains a cryptographic hash of the previous
                block
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex px-6 justify-between w-[100%] pt-[40px]">
          <div className="p-4 hover:text-blue-900 cursor-pointer ">
              <img src={DevOps} alt="" className="w-[70px]" />
              <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
                DevOps
              </h3>
              <p className="text-[#696969] text-[14px] font-nunito">
                DevOps is a software development approach that emphasizes
                collaboration, automation, and continuous delivery. It brings
                together software development and IT operations teams to create
                a faster, more reliable software delivery process.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
