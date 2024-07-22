import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import UIUX from "../../Assests/UIUX_DESIGN.svg";
import ServicesSlider from "../Services/SerivesSlider";
import diamond from "../../Assests/Demo-img.png"
import dApp from "../../Assests/Appdev-icon.png";
import mobileApp from "../../Assests/mobileApp-icon.png";
import ui_ux_logo from "../../Assests/ui:ux-icon.png";
import Banyo from "../../Assests/banyoUk.png"
import Buizz from "../../Assests/EventBuizz.png"
import secp from "../../Assests/scep.png"

const UiUxDesign = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="psi_container"
      >
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
          style={{
            position: "absolute",
            top: "5px",
            width: "100%",
            maxWidth: "1280px",
            margin: "auto",
          }}
        >
          <div className="m-auto text-[#fff] font-nunito font-[800] leading-[60px] lg:mt-[130px] mt-[75px] text-center lg:text-[45px] text-[25px]">
            UI UX Design <br />
            <p className="text-[14px] lg:mt-[0px] mt-[-30px] font-[700] ">
              {" "}
              <span
                className="text-[#fff] mr-[5px] cursor-pointer font-[400] hover:text-[#F26F25] ease-in-out duration-300"
                onClick={() => navigate("/")}
              >
                Home{" "}
              </span>
              <RightOutlined />
              <span
                className="text-[#fff] mx-[5px] cursor-pointer font-[400] hover:text-[#F26F25] ease-in-out duration-300"
                onClick={() => navigate("/services")}
              >
                {" "}
                Sevices{" "}
              </span>
              <RightOutlined /> &nbsp;UI UX Design
            </p>
          </div>
        </div>
      </div>
      <div className="psi_container px-6">
        <h2 className="lg:text-[42px] text-[24px] font-[700] lg:leading-[3.2rem] leading-[2.2rem] lg:w-[80%] w-[100%] m-auto text-center font-nunito mt-[80px]">
        Redefine <span className="text-[#007BFF]">Experiences </span>With <span className="text-[#007BFF]">Data</span> Driven And{" "}
          <span className="text-[#007BFF]">User-Centered</span> UI UX
        </h2>
        <p className="lg:w-[70.5%] w-[100%] my-[20px] text-[#636363] font-nunito m-auto text-center">
        In search of building an extraordinary digital product? We specialize in developing user-centered and data-driven products that serve the best user experience and satisfaction.
        </p>
        <div className="flex justify-center mb-[50px]">
          <button className="border-[1px] border-[#007BFF] rounded-md px-4 py-2 text-[15px] text-[#007BFF] hover:bg-[#007BFF] hover:text-[#fff] font-[700] ease-in-out duration-300">
            Meet Our Experts!
          </button>
        </div>
      </div>
      <div className="psi_container flex px-6 items-center gap-[40px] lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[100%] font-nunito text-[#636363] text-justify">
        Psi Square is dedicated to crafting unforgettable and meaningful experiences tailored specifically for your target audience. Our approach is deeply rooted in understanding your unique business objectives and gaining insights into user preferences, enabling us to design user-centered interfaces that seamlessly align with your brand identity. <br/> <br/>Our commitment to excellence is reflected in our strategic design process and our collaborative approach. We work closely with your team to transform your vision into tangible, intuitive user interfaces that effortlessly guide users toward their goals. With every project, we set out not just to meet expectations but to exceed them.<br/>  <br/> What sets Psi Square apart is our keen focus on usability. We understand that a beautiful design is only a part of the equation. Through rigorous usability testing, we optimize every touchpoint in your interface to ensure that users enjoy interacting with your product and efficiently achieve their objectives.<br/>  <br/> Embark on a transformative journey with Psi Square, where we merge artistry with functionality to design a masterpiece that will elevate your business to new heights.
        </div>
        <div className="lg:w-[50%] w-[100%]  mb-[50px]">
          <img src={UIUX} alt="" />
        </div>
      </div>
      <div className="bg-[#012842] pt-4 pb-[40px] px-6 mt-[30px] ">
        <div>
          <h2 className="font-nunito text-center mt-[40px] mb-[50px] text-[#fff] lg:text-[35px] text-[24px] font-[700] lg:text-[40px] text-[15px]">Our Technolgies for <span className="text-[#68A2D4]">web developement</span></h2>
          <div>
            <ServicesSlider/>
          </div>
          </div>
      </div> 
      <div className="psi_container px-6">
       <h3 className='font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] mt-[50px]'><span className='text-[#086AD8]'>Related</span> Projects</h3>
       <div className="flex w-[100%] justify-between gap-[15px] my-[40px] lg:flex-row flex-col">
        <div className="lg:w-[33%] w-[100%]">
          <img src={Banyo} alt="" />
          <div className="text-[20px] my-[10px] font-nunito font-[700]">Banyo UK</div>
        <div className="text-[14px] my-[5px] font-nunito">UK largest Home improvement ecommerce store.</div>
        </div>
        <div className="lg:w-[33%] w-[100%]">
          <img src={Buizz} alt="" />
          <div className="text-[20px] my-[10px] font-nunito font-[700]">Event Buizz</div>
        <div className="text-[14px] my-[5px] font-nunito">This is an event management and planning platform for all the occasions</div>
        </div>
        <div className="lg:w-[33%] w-[100%]">
          <img src={secp} alt="" />
          <div className="text-[20px] my-[10px] font-nunito font-[700]">SECP</div>
        <div className="text-[14px] my-[5px] font-nunito">The Securities and Exchange Commission of Pakistan (SECP), mandated to regulate and develop the corporate sector and the non-bank financial markets.</div>
        </div>
       </div>
       <div>
       <div className="flex justify-center mb-[50px]">
          <button className="border-[1px] border-[#007BFF] rounded-md px-4 py-2 text-[15px] text-[#007BFF] hover:bg-[#007BFF] hover:text-[#fff] font-[700] ease-in-out duration-300" onClick={()=> navigate("/portfolio")}>
            Read more <ArrowRightOutlined />
          </button>
        </div>
       </div>
      </div>
      <div className="psi_container px-6">
       <h3 className='font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] mt-[50px]'>Other <span className='text-[#086AD8]'>Services</span></h3>
       <div className="flex w-[100%] justify-between gap-[15px] my-[40px] lg:flex-row flex-col">
       <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[33%] w-[100%] servise-card" >
            <img src={ui_ux_logo} alt="" className="w-[70px]" />
            <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
              UI&UX Design
            </h3>
            <p className="text-[#696969] text-[14px] font-nunito">
              UI/UX is the combination of user interface (UI) and user
              experience (UX) design. It involves creating visually appealing
              and user-friendly software interfaces that provide a seamless and
              intuitive experience for users.
            </p>
          </div>
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[33%] w-[100%] servise-card" >
            <img src={dApp} alt="" className="w-[70px]" />
            <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
              AI / Machine learning
            </h3>
            <p className="text-[#696969] text-[14px] font-nunito">
            AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously.
            </p>
          </div>
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[33%] w-[100%] servise-card">
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
       <div>
       </div>
      </div>
      </div>
  );
};

export default UiUxDesign;
