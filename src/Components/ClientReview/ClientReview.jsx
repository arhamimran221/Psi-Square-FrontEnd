import React, { useEffect, useState } from "react";
import DiamondGuys from "../../Assests/Demo-img.png";
import { UserOutlined } from "@ant-design/icons";
import imageReview from "../../Assests/review.svg";
import AnimatedValue from "./AnimateReview";
import nexusHome from "../../Assests/nexusHome.png";
import Buizz from "../../Assests/EventBuizz.png";
import Acrunity from "../../Assests/arcunity.png";

const ClientReview = () => {
  const [isSticky, setSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const stickyPoint = 3070;
      if (currentScrollY > stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="psi_container">
      <h3 className="font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700] my-[90px]">
        What our<span className="text-[#086AD8]">&nbsp;Client says?</span>{" "}
      </h3>
      <div>
        <div className="flex px-6 gap-[20px] w-[100%] lg:flex-row-reverse flex-col mt-[50px]">
          <div
            className="lg:w-[50%] w-[100%]"
            style={{
              boxShadow:
                "0px 8px 20px rgba(3, 7, 18, 0.03), 0px 32px 81px rgba(3, 7, 18, 0.06)",
            }}
          >
            <img src={nexusHome} alt="" className="rounded-lg" />
          </div>
          <div className="lg:w-[50%] w-[100%] flex flex-col">
            <UserOutlined className="text-[35px] bg-[#DEEDFF] rounded-full p-4 w-fit" />
            <div className="font-nunito text-[30px] font-[600] mt-[10px]">
              Adam Cartwright USA
              <p className="text-[13px] font-[300] nunito text-[#b0b0b6] mt-[-4px]">
                CEO Nexus
              </p>
            </div>
            <div className="font-nunito text-[14px] font-[400] mt-[10px]">
              Always a professional experience
              <br />
              Psi Square team is an expert and it shows in every step of the
              process within the execution of a project. Looking forward to
              working with them again!
            </div>
            <div className="mt-[40px] flex gap-[10px]">
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
            </div>
          </div>
        </div>
        <div className="flex px-6 gap-[20px] w-[100%] lg:flex-row flex mt-[50px] flex-col bg-[#fff] py-[30px]">
          <div
            className="lg:w-[50%] w-[100%]"
            style={{
              boxShadow:
                "0px 8px 20px rgba(3, 7, 18, 0.03), 0px 32px 81px rgba(3, 7, 18, 0.06)",
            }}
          >
            <img src={Buizz} alt="" className="rounded-lg" />
          </div>
          <div className="lg:w-[50%] w-[100%] flex flex-col items-end">
            <UserOutlined className="text-[35px] bg-[#DEEDFF] rounded-full p-4 w-fit" />
            <div className="font-nunito text-[30px] font-[600] mt-[10px] text-right">
              Eric
              <p className="text-[13px] font-[300] nunito text-[#b0b0b6] mt-[-4px] text-right">
                CEO Event Buizz
              </p>
            </div>
            <div className="font-nunito text-[14px] font-[400] text-right mt-[10px]">
              Psi Sqaure provided me with what I asked for and much more!
              <br />
              We had to revisit my idea multiple times and they did it with
              enthusiasm and very fast and with easy. Very easy to work with and
              he really did his best to make me happy.I would do more. Thanks
            </div>
            <div className="mt-[40px] flex gap-[10px]">
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
            </div>
          </div>
        </div>
        <div className="flex px-6 gap-[20px] w-[100%] lg:flex-row-reverse mt-[50px] flex-col">
          <div
            className="lg:w-[50%] w-[100%]"
            style={{
              boxShadow:
                "0px 8px 20px rgba(3, 7, 18, 0.03), 0px 32px 81px rgba(3, 7, 18, 0.06)",
            }}
          >
            <img src={Acrunity} alt="" className="rounded-lg" />
          </div>
          <div className="lg:w-[50%] w-[100%] flex flex-col">
            <UserOutlined className="text-[35px] bg-[#DEEDFF] rounded-full p-4 w-fit" />
            <div className="font-nunito text-[30px] font-[600] mt-[10px]">
              Julia Roberston
              <p className="text-[13px] font-[300] nunito text-[#b0b0b6] mt-[-4px]">
                Co founder Acrunity
              </p>
            </div>
            <div className="font-nunito text-[14px] font-[400] mt-[10px]">
              Excellent service in a timely manner. Psi Square made sure that
              what I was looking for met my expectations. Already started
              working on a second project. Looking forward to more.
            </div>
            <div className="mt-[40px] flex gap-[10px]">
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
              <img src={imageReview} alt="" />
            </div>
          </div>
        </div>
      </div>
      {isSticky ? (
        <div className="flex gap-[90px] px-6 justify-center mt-[150px] mb-[50px] lg:flex-row flex-col">
          <div className="flex flex-col gap-[5px] items-center">
            <h1 className="font-nunito text-[55px] font-[800] flex gap-[5px]">
              <AnimatedValue start={0} end={6} duration={700} />+
            </h1>
            <p className="font-nunito font-[500] text-[18px]">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col gap-[5px] items-center">
            <h1 className="font-nunito text-[55px] font-[800] flex gap-[5px]">
              <AnimatedValue start={0} end={50} duration={800} />+
            </h1>
            <p className="font-nunito font-[500] text-[18px]">Happy Clients</p>
          </div>
          <div className="flex flex-col gap-[5px] items-center">
            <h1 className="font-nunito text-[55px] font-[800] flex gap-[5px]">
              <AnimatedValue start={0} end={500} duration={1000} />+
            </h1>
            <p className="font-nunito font-[500] text-[18px]">
              Successfull Projects
            </p>
          </div>
          <div className="flex flex-col gap-[5px] items-center">
            <h1 className="font-nunito text-[55px] font-[800] flex gap-[5px]">
              <AnimatedValue start={0} end={100} duration={900} />%
            </h1>
            <p className="font-nunito font-[500] text-[18px]">
              On time Deliveries
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClientReview;
