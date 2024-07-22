import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import Webdev from "../../Assests/Webdev-illus.png";
import ServicesSlider from "../Services/SerivesSlider";
import diamond from "../../Assests/Demo-img.png"
import dApp from "../../Assests/Appdev-icon.png";
import mobileApp from "../../Assests/mobileApp-icon.png";
import ui_ux from "../../Assests/ui:ux-icon.png";
import Banyo from "../../Assests/banyoUk.png"
import Buizz from "../../Assests/EventBuizz.png"
import secp from "../../Assests/scep.png"

const WebDev = () => {
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
            Website Developement <br />
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
              <RightOutlined /> &nbsp;Web Developemt
            </p>
          </div>
        </div>
      </div>
      <div className="psi_container px-6">
        <h2 className="lg:text-[42px] text-[24px] font-[700] lg:leading-[3.2rem] leading-[2.2rem] lg:w-[60%] w-[100%] m-auto text-center font-nunito mt-[80px]">
          Build An <span className="text-[#007BFF]">Innovative </span>Web App To{" "}
          <span className="text-[#007BFF]">Grow Your Business</span>
        </h2>
        <p className="lg:w-[54.5%] w-[100%] my-[20px] text-[#636363] font-nunito m-auto text-center">
          We build responsive, functional, scalable web apps that meet your
          business goals and user needs. We specialize in innovative, customized
          web apps that align with your strategy.
        </p>
        <div className="flex justify-center mb-[50px]">
          <button className="border-[1px] border-[#007BFF] rounded-md px-4 py-2 text-[15px] text-[#007BFF] hover:bg-[#007BFF] hover:text-[#fff] font-[700] ease-in-out duration-300">
            Meet Our Experts
          </button>
        </div>
      </div>
      <div className="psi_container flex px-6 items-center gap-[40px] lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[100%] font-nunito text-[#636363] text-justify">
          Psi Square goes beyond the ordinary to provide you with highly
          customized web development services that perfectly align with your
          unique business needs and target audience. Our dedicated team of
          seasoned web developers leverages cutting-edge technologies to craft
          high-performance web applications that stand out in today's
          competitive landscape. <br/> <br/> Our approach to web development is built on a
          solid foundation of collaboration and innovation. We understand that
          your website is often the first touchpoint your customers have with
          your brand, and we take that responsibility seriously. With this in
          mind, we follow a comprehensive development process that prioritizes
          your satisfaction and sets the stage for your online success.<br/>  <br/> We
          meticulously plan and execute each project, ensuring that it not only
          meets your current requirements but also lays the groundwork for
          future scalability. Whether you're looking to create a sleek and
          modern corporate website, an e-commerce platform that drives sales, or
          a feature-rich web application, our team is well-equipped to bring
          your vision to life. <br/>  <br/> So, partner with Psi Square, and let us
          guide you through the dynamic world of web development.
        </div>
        <div className="lg:w-[50%] w-[100%]  mb-[50px]">
          <img src={Webdev} alt="" />
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
            <img src={ui_ux} alt="" className="w-[70px]" />
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

export default WebDev;
