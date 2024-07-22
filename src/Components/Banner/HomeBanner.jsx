import React from "react";
import floatImage1 from "../../Assests/banner-float-img.webp";
import floatImage2 from "../../Assests/earphones-banner.webp";
import floatImage3 from "../../Assests/mouse-banner.webp";
import floatImage4 from "../../Assests/watch-banner.webp";
import floatImage5 from "../../Assests/keyboard-banner.webp";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="psi-banner">
      <div className="z-10 relative overflow-hidden psi_container">
        <div className=" flex lg:flex-row flex-col w-[100%] items-center px-6 lg:py-[150px] py-[100px] lg:gap-[0px] gap-[30px]">
          <div className="lg:w-[50%] w-[100%]">
            <span className="font-nunito text-[#f26f24] font-[700] text-[16px] tracking-[2px]">
              TECHNOLOGY AND SOFTWARE
            </span>
            <h2 className="font-nunito lg:text-[48px] text-[30px] text-[#fff] my-[30px] font-[700] leading-[54px] relative z-[99]">
              INNOVATIVE SOFTWARE DEVELOPMENT WITH LATEST TECHNOLOGIES!
            </h2>
            <button className="bg-[#fff] py-4 px-6 rounded-lg font-nunito hover:text-[#f26f24]" onClick={()=>navigate('/portfolio')}>
              Portfolio
            </button>
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <img src={floatImage1} alt="" className="bounce5" />
          </div>
        </div>
        <img
          src={floatImage2}
          alt=""
          className="absolute top-[20px] left-[410px] bounce1 w-[250px]"
        />
        <img
          src={floatImage3}
          alt=""
          className="absolute top-[60px] left-[1100px] bounce2"
        />
        <img
          src={floatImage4}
          alt=""
          className="absolute top-[580px] left-[660px] bounce3 "
        />
        <div className="absolute top-[400px] left-[1200px] w-[100%]  bounce4">
          <img src={floatImage5} alt="" className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
