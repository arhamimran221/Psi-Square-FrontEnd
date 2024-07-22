import React, { useState } from "react";
import AboutBanner from "../../Components/Banner/AboutBanner";
import {
  ArrowRightOutlined,
  CloseOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import HowToDo from "../../Assests/HowToDo.webp";
import Patners from "../../Assests/Partners.webp";
import Hand from "../../Assests/NeedHand.webp";
import "./AboutUs.css";
import pointer_icon from "../../Assests/pointer-icon.svg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState([false, false, false]);
  const items = [
    {
      title: "Does Psi Square only provide web3 technology services?",
      description:
        "Psi Square, we go beyond web3, blockchain & metaverse to help businesses transform through technology. We help start-ups and established businesses in building products that make a difference and increase profitability.",
    },
    {
      title:
        "Which industries does Psi Square provide software development & consulting services in?",
      description:
        "Psi Square, we combine innovation and collective knowledge to create the extraordinary solutions for industries including but not limited to",
    },
    {
      title: "What technology services do you provide?",
      description:
        "Psi Square provide following technology services in software development:",
    },
    {
      title: "Does Psi Square only provide web3 technology services?",
      description:
        "Psi Square, we go beyond web3, blockchain & metaverse to help businesses transform through technology. We help start-ups and established businesses in building products that make a difference and increase profitability.",
    },
    {
      title:
        "Which industries does Psi Square provide software development & consulting services in?",
      description:
        "Psi Square, we combine innovation and collective knowledge to create the extraordinary solutions for industries including but not limited to",
    },
    {
      title: "What technology services do you provide?",
      description:
        "Psi Square provide following technology services in software development:",
    },
  ];

  const handleItemClick = (index) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <AboutBanner />
      <div className="psi_container">
        <div className="lg:text-[14px] text-[12px] font-nunito tracking-[3px] text-[#ababab] text-center leading-[1.43] font-[700] mb-[10px] my-[60px]">
          OUR COMPANY
        </div>
        <h3 className="font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] w-[50%] m-auto">
          We run all kinds of IT services that vow your&nbsp;
          <span className="text-[#086AD8]">success</span>
        </h3>
        <div className="flex w-[80%] justify-center items-center gap-[20px] my-[30px] m-auto lg:flex-row flex-col">
          <div className="lg:w-[50%] w-[100%] ">
            <div className="flex lg:items-end items-start lg:gap-[10px] gap[-010px] lg:flex-row flex-col">
              <div className="text-[180px] leading-[0.8] font-[900] text-[#F26F25]">
                <div className="">38</div>
              </div>
              <div className="lg:text-[14px] text-[12px] font-nunito tracking-[3px] text-[#ababab] text-left leading-[1.43] font-[700] mb-[10px] my-[60px] w-[20%]">
                YEARS’ EXPERIENCE IN IT
              </div>
            </div>
            <div className="font-nunito lg:text-[20px] text-[15px] my-[10px] font-[700]  m-auto">
              More About Our Success Stories
            </div>
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <p className="text-[#696969] font-nunito text-[19px]">
              Almost all businesses are facing the challenge of implementing
              digital transformation. Whether you are aiming to use AR to
              streamline part of your operations (value chain) or looking
              develop an IoT ecosystem with Intelligent Agreements. At Psi
              Sqaure, We understand & deliver all the significant-tech stacks
              required to help you implement the best solutions to boost your
              business. Since 2015, Psi Square has been providing impactful,
              enterprise-wide software solutions to help our Boost and Achieve
              their business goals.
            </p>
            <div
              className="flex items-center gap-[9px] text-[#096AD8] w-fit text-[14px] my-[10px] font-nunito cursor-pointer hover:text-[#F26F25] hover:font-[600] ease-in-out duration-300"
              onClick={() => navigate("/services")}
            >
              Discover now
              <ArrowRightOutlined
                className="font-[800]"
                style={{ fontWeight: "800" }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-[90%] px-6 gap-[30px] my-[50px] m-auto lg:flex-row flex-col">
          <div className="lg:w-[35%] w-[100%] flex flex-col items-center gap-[10px] bg-[#fff] rounded-md overflow-hidden card cursor-pointer">
            <div className="py-[50px] image-">
              <img src={HowToDo} alt="" />
            </div>
            <h1 className="font-nunito text-[24px] font-[500] leading-[1.25]">
              What we can do?
            </h1>
            <p className="px-6 text-center text-[#696969] font-nunito text-[14px]">
              We put a strong focus on the needs of your business to figure out
              solutions that best fits your demand and nail it.
            </p>
            <button
              className="w-[100%] text-center mt-[20px] py-[8px] button-discover"
              style={{ borderTop: "1px solid #dadada" }}
            >
              <div
                className="flex items-center gap-[9px] text-[#096AD8] text-[14px] my-[10px] font-nunito cursor-pointer w-[100%] justify-center"
                onClick={() => navigate("/services")}
              >
                Discover now
                <ArrowRightOutlined
                  className="font-[800]"
                  style={{ fontWeight: "800" }}
                />
              </div>
            </button>
          </div>
          <div className="lg:w-[35%] w-[100%] flex flex-col items-center gap-[10px] bg-[#fff] rounded-md overflow-hidden card cursor-pointer">
            <div className="py-[50px]">
              <img src={Patners} alt="" />
            </div>
            <h1 className="font-nunito text-[24px] font-[500] leading-[1.25]">
              Become our partners?
            </h1>
            <p className="px-6 text-center text-[#696969] font-nunito text-[14px]">
              Our preventive and progressive approach will help you take the
              lead while addressing possible threats in managing data.
            </p>
            <button
              className="w-[100%] text-center mt-[20px] py-[8px] button-discover"
              style={{ borderTop: "1px solid #dadada" }}
            >
              <div
                className="flex items-center gap-[9px] text-[#096AD8] text-[14px] my-[10px] font-nunito cursor-pointer w-[100%] justify-center"
                onClick={() => navigate("/services")}
              >
                Discover now
                <ArrowRightOutlined
                  className="font-[800]"
                  style={{ fontWeight: "800" }}
                />
              </div>
            </button>
          </div>
          <div className="lg:w-[35%] w-[100%] flex flex-col items-center gap-[10px] bg-[#fff] rounded-md overflow-hidden card cursor-pointer">
            <div className="py-[50px]">
              <img src={Hand} alt="" />
            </div>
            <h1 className="font-nunito text-[24px] font-[500] leading-[1.25]">
              Need a hand?
            </h1>
            <p className="px-6 text-center text-[#696969] font-nunito text-[14px]">
              Our support team is available 24/7 a day, 7 days a week and can
              get ready for solving any of your situational rising problems.
            </p>
            <button
              className="w-[100%] text-center mt-[20px] py-[8px] button-discover"
              style={{ borderTop: "1px solid #dadada" }}
            >
              <div
                className="flex items-center gap-[9px] text-[#096AD8] text-[14px] my-[10px] font-nunito cursor-pointer w-[100%] justify-center"
                onClick={() => navigate("/services")}
              >
                Discover now
                <ArrowRightOutlined
                  className="font-[800]"
                  style={{ fontWeight: "800" }}
                />
              </div>
            </button>
          </div>
        </div>
        <div className="mt-[100px]">
          <h3 className="font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] w-[50%] m-auto">
            Our Core&nbsp;
            <span className="text-[#086AD8]">Values</span>
          </h3>
          <div className="lg:text-[16px] text-[12px] font-nunito text-[#000] text-center font-[700]  mb-[60px] w-[70%] m-auto">
            Save time and resources by working with us, we deliver results that
            drive growth and success for you and provide frictionless experience
            for your customers.
          </div>
          <div className="core-value-cards w-[80%] m-auto flex justify-between mb-[100px] pt-[50px] lg:flex-row flex-col lg:gap-[0px] gap-[30px]">
            <div
              className="lg:w-[30%] w-[100%] py-4 px-3 bg-[#fff]"
              style={{ boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)" }}
            >
              <div>
                <img src={pointer_icon} alt="pointer-icon" />
              </div>
              <div className="font-nunito mt-[35px] text-[22px] text-[#453232] font-[600]">
                Commitment
              </div>
              <div className="font-nunito mt-[2px] text-[14px] font-[600] text-[#9e9e9e]">
                We commit to YOUR vision
              </div>
              <div className="font-nunito mt-[20px] text-[14px] font-[500] text-[#453232]">
                Our team of experts is committed to execute your ideas and grow
                your business.
              </div>
            </div>
            <div
              className="lg:w-[30%] w-[100%] py-4 px-3 bg-[#fff]"
              style={{ boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)" }}
            >
              <div>
                <img src={pointer_icon} alt="pointer-icon" />
              </div>
              <div className="font-nunito mt-[35px] text-[22px] text-[#453232] font-[600]">
                Consistency
              </div>
              <div className="font-nunito mt-[2px] text-[14px] font-[600] text-[#9e9e9e]">
                WE BELIEVE IN RELENTLESSNESS
              </div>
              <div className="font-nunito mt-[20px] text-[14px] font-[500] text-[#453232]">
                We turn your idea into a reality with consistency and
                dedication.
              </div>
            </div>
            <div
              className="lg:w-[30%] w-[100%] py-4 px-3 bg-[#fff]"
              style={{ boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)" }}
            >
              <div>
                <img src={pointer_icon} alt="pointer-icon" />
              </div>
              <div className="font-nunito mt-[35px] text-[22px] text-[#453232] font-[600]">
                Transparency
              </div>
              <div className="font-nunito mt-[2px] text-[14px] font-[600] text-[#9e9e9e]">
                YOU ARE ALWAYS IN THE LOOP
              </div>
              <div className="font-nunito mt-[20px] text-[14px] font-[500] text-[#453232]">
                We believe you should what’s going on with your project and we
                make sure you do.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px] mb-[100px]">
          <h3 className="font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] w-[50%] m-auto">
            Frequently asked <span className="text-[#086AD8]">questions</span>
          </h3>
          {items.map((item, index) => (
            <div
              className="border-[1px] border-[#453232] rounded-md p-4 w-[80%] m-auto mb-[30px] mt-[40px]"
              onClick={() => handleItemClick(index)}
            >
              <div key={index}>
                <div className="flex justify-between cursor-pointer items-center">
                  <div className="font-nunito lg:text-[18px] text-[16px]">
                    {item.title}
                  </div>
                  <div className="lg:text-[16px] text-[14px]">
                    {open[index] ? <MinusOutlined /> : <PlusOutlined />}
                  </div>
                </div>
                {open[index] && (
                  <div className="font-nunito mt-[30px]">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
