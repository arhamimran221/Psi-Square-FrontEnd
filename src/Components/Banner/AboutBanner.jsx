import React from "react";

const AboutBanner = () => {
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
          style={{ position: "absolute", top: "10px", width:"100%",maxWidth:"1280px",margin:'auto' }}
        >
            <div className="m-auto text-[#fff] font-nunito font-[800] leading-[60px] lg:mt-[120px] mt-[50px] text-center">
            About Us <br />
            <div className="text-[#F26F25] text-[14px] mt-[10px] font-[400] font-nunito lg:w-[50%] w-[90%] text-center m-auto leading-[20px]">Psi Square specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
