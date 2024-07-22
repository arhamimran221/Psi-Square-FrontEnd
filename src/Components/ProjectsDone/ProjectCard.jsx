import React from "react";

import "./ProjectDone.css";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const ProjectCard = (props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/portfolio-details", {
      state: {
        data: props,
      },
    });
  };

  console.log(props);

  return (
    <div>
      <div
        className={
          props.direction === "row"
            ? "flex px-6 gap-[70px] my-[50px] w-[100%] items-end mt-[100px] lg:flex-row flex-col"
            : "flex px-6 gap-[70px] my-[50px] w-[100%] items-end mt-[100px] lg:flex-row-reverse flex-col justify-between"
        }
      >
        <div className="lg:w-[40%] w-[100%]">
          <h1 className="lg:text-[100px] text-[50px] text-[#d5d5d5] font-nunito font-[800] leading-[71px]">
            {props.count}
          </h1>
          <h1
            className={`text-[25px] ${props.heading === "YourDiamondGuys" ? "lg:text-[45px]" : "lg:text-[60px]"} text-[#535353] font-nunito font-[800] cursor-pointer`}
            onClick={handleNavigation}
          >
            {props.heading}
          </h1>
          <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
            {props.descrip}
          </p>
          <div className="flex gap-[10px] items-center mt-[15px]">
            {props?.reactIcon && (
              <img src={props?.reactIcon} alt="" className="cursor-pointer" />
            )}
            {props?.AngularIcon && (
              <img src={props?.AngularIcon} alt="" className="cursor-pointer" />
            )}
            {props?.nodeIcon && (
              <img src={props?.nodeIcon} alt="" className="cursor-pointer" />
            )}
            {props?.mongoDBIcon && (
              <img src={props?.mongoDBIcon} alt="" className="cursor-pointer" />
            )}
            {props?.awsIcon && (
              <img src={props?.awsIcon} alt="" className="cursor-pointer" />
            )}
            {props?.jqueryIcon && (
              <img src={props?.jqueryIcon} alt="" className="cursor-pointer" />
            )}
            {props?.MagentoIcon && (
              <img src={props?.MagentoIcon} alt="" className="cursor-pointer" />
            )}
            {props?.phpIcon && (
              <img src={props?.phpIcon} alt="" className="cursor-pointer" />
            )}
            {props?.mySqlIcon && (
              <img src={props?.mySqlIcon} alt="" className="cursor-pointer" />
            )}
            {props?.javascript && (
              <img src={props?.javascript} alt="" className="cursor-pointer" />
            )}
            {props?.pythonIcon && (
              <img src={props?.pythonIcon} alt="" className="cursor-pointer" />
            )}
            {props?.postgreSQLIcon && (
              <img src={props?.postgreSQLIcon} alt="" className="cursor-pointer" />
            )}
          </div>
        </div>
        <div className="lg:w-[52%] w-[100%]">
          <div className="portfolio-img">
            <img
              src={props.projectImage}
              alt=""
              onClick={handleNavigation}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
