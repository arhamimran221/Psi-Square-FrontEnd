import React from "react";
import ServiceBanner from "../../Components/Banner/ServiceBanner";
import ui_ux from "../../Assests/ui:ux-icon.png";
import webIcon from "../../Assests/webdeve-icon.png";
import dApp from "../../Assests/Appdev-icon.png";
import mobileApp from "../../Assests/mobileApp-icon.png";
import BlockChain from "../../Assests/blockchain-icon.png";
import DevOps from "../../Assests/devops.png";
import "./Services.css"
import ServicesSlider from "./SerivesSlider";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
 
  const handleNavigation = (value) =>{
     if (value === "WebDevelopment"){
      navigate("/web-developement")
     }
     else if (value === "mobileDev"){
      navigate("/mobile-dev")
     }
     else if (value === "ui_ux"){
      navigate("/ui-ux")
     }
     else if (value === "Dapp"){
      navigate("/ai-machine-learning")
     }
     else if (value === "DevOps"){
      navigate("/devops")
     }
     else
     navigate("/block-chain")
  }

  return (
    <div className="">
      <ServiceBanner />
      <div className="px-6 psi_container">
        <h3 className="font-nunito lg:text-[40px] text-[20px] text-left my-[10px] font-[700] m-auto py-[20px]">
          What&nbsp;
          <span className="text-[#086AD8]">We Do!</span>
        </h3>
        <div className="flex items-stretch gap-[30px] w-[100%] flex-wrap justify-between mb-[50px] lg:flex-row flex-col">
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('WebDevelopment')}>
            <img src={webIcon} alt="" className="w-[70px]" />
            <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
              Web Development
            </h3>
            <p className="text-[#696969] text-[14px] font-nunito">
              Web development is the creation of websites and web applications.
              It involves programming languages like HTML, CSS, and JavaScript,
              as well as frameworks and libraries like React, Angular, and
              Vue.js.
            </p>
          </div>
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('ui_ux')}>
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
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('Dapp')}>
            <img src={dApp} alt="" className="w-[70px]" />
            <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
              AI / Machine learning
            </h3>
            <p className="text-[#696969] text-[14px] font-nunito">
            AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously.
            </p>
          </div>
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('mobileDev')}>
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
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('blockChain')}>
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
          <div className="px-4 py-6 hover:text-blue-900 cursor-pointer lg:w-[30%] w-[100%] servise-card" onClick={() =>handleNavigation('DevOps')}>
            <img src={DevOps} alt="" className="w-[70px]" />
            <h3 className="mt-[20px] font-nunito font-[500] leading-[1.67] text-[24px]">
              DevOps
            </h3>
            <p className="text-[#696969] text-[14px] font-nunito">
              DevOps is a software development approach that emphasizes
              collaboration, automation, and continuous delivery. It brings
              together software development and IT operations teams to create a
              faster, more reliable software delivery process.
            </p>
          </div>
        </div>
      </div>
        <div className="bg-[#012842] pt-4 pb-[40px] px-6 mt-[30px]">
          <div>
          <h2 className="font-nunito text-center mt-[40px] mb-[50px] text-[#fff] text-[35px] font-[700] lg:text-[40px] text-[15px]">Our <span className="text-[#68A2D4]">Technology</span></h2>
          <div>
            <ServicesSlider/>
          </div>
          </div>
        </div> 
    </div>
  );
};

export default Services;
