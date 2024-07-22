import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceBanner = () => {
   const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }} className="psi_container">
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
          className="lg:h-[350px]"
        >
          <video
            src="/vedio.mov"
            style={{ width: "100%" }}
            autoPlay
            muted
            loop
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))",
            }}
          ></div>
        </div>

        <div
          className="lg:text-[50px] text-[30px] "
          style={{ position: "absolute", top: "5px", width:"100%",maxWidth:"1280px",margin:'auto' }}
        >
            <div className="m-auto text-[#fff] font-nunito font-[800] leading-[60px] lg:mt-[110px] mt-[50px] text-center lg:text-[50px] text-[25px]">
            Services <br />
            <p className="text-[14px] lg:mt-[-14px] mt-[-30px] font-[700] "> <span className="text-[#fff] cursor-pointer font-[400] hover:text-[#F26F25] ease-in-out duration-300" onClick={() =>navigate('/')}>Home </span>&gt; Services</p>
            <div className="text-[#ffff] lg:text-[14px] text-[10px] font-[400] font-nunito lg:w-[63%] w-[90%] text-center m-auto lg:leading-[20px] leading-[14px]">Psi Square is a custom software design and development company offering a comprehensive range of innovative and AI powered solutions. Our expert team is well versed in Website development, Mobile application development, UI UX design, Quality assurance, MVP builder and Dedicated team services.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
