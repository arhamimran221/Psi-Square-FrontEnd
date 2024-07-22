import React from "react";
import footerImage from "../../Assests/psi-logo-u.png";
import locationIcon from "../../Assests/location-icon-light.svg";
import {
  PhoneFilled,
  ClockCircleOutlined,
  MailOutlined,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); 

  return (
    <footer className="bg-[#535353] ">
      <div className="footer-container  psi_container px-6 pt-[70px] mt-[40px]">
      <div className="footer-wrap flex lg:flex-row flex-col w-[100%] justify-between gap-[20px]">
        <div className="lg:w-[40%] w-[100%]">
          <div className="font-nunito text-[#fff] text-[40px] font-[700] flex items-center">
            PSI SQ
            <div className="w-[25px]">
              <img src={footerImage} alt="" />
            </div>
            ARE
          </div>
          <div className="flex w-[100%] gap-[10px] mt-[10px]">
            <div className="w-[10%]">
              <img src={locationIcon} alt="" />
            </div>
            <p className="text-[#fff] text-[15px] font-[400] font-nunito w-[90%]">
              14 D DHA EME Lahore, Pakistan
            </p>
          </div>
          <div className="flex w-[100%] items-center mt-[9px] gap-[10px]">
            <div className="w-[10%]">
              <PhoneFilled className="text-[1em] text-[#fff]" />
            </div>
            <p className="text-[#fff] text-[15px] font-[400] font-nunito w-[90%]">
              +92 324 4600546
            </p>
          </div>
          <div className="flex gap-[10px] items-center mt-[9px] w-[100%]">
            <div className="w-[10%]">
              <MailOutlined className="text-[1em] text-[#fff]" />
            </div>
            <a
              href="mailto:info@psi-square.net"
              className="text-[#fff] text-[15px] font-[400] font-nunito w-[90%]"
            >
              info@psi-square.net
            </a>
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%] flex lg:flex-row flex-col gap-[30px] lg:gap-[0px]">
        <div className="lg:w-[28%] w-[100%]">
          <h1 className="font-nunito text-[#fff] text-[30px] font-[700] flex items-center">Page Links</h1>
          <li className="text-[#fff] text-[15px] font-[600] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300" onClick={()=>navigate('/portfolio')}>Portfolio</li>
          <li className="text-[#fff] text-[15px] font-[600] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300" onClick={()=>navigate('/about-us')}>About Us</li>
          <li className="text-[#fff] text-[15px] font-[600] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300" onClick={()=>navigate('/career')}>Career</li>
          <li className="text-[#fff] text-[15px] font-[600] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300" onClick={()=>navigate('/services')}>Services</li>
        </div>
        <div className="lg:w-[28%] w-[100%]">
          <h1 className="font-nunito text-[#fff] text-[30px] font-[700] flex items-center">Platforms</h1>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">iOS</li>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">Android</li>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">Windows</li>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">Hybrid Platform</li>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">Azure</li>
          <li className="text-[#fff] text-[15px] font-[400] font-nunito list-none mt-[10px] hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">Amazon</li>
        </div>
        <div className="lg:w-[43%] w-[100%]">
          <h1 className="font-nunito text-[#fff] text-[30px] font-[700] flex items-center">Open Hours</h1>
          <div className="flex justify-between mt-[20px]">
            <div className="flex gap-[10px] text-[#fff] text-[15px] font-[400] font-nunito list-none w-fit cursor-pointer items-center">
              <ClockCircleOutlined  className="text-[1em] text-[#fff]"/>
              Monday to Friday
            </div>
            <div className="text-[#fff] text-[15px] font-[400] font-nunito list-none  hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">24 hours</div>
          </div>
          <div className="flex justify-between mt-[10px]">
            <div className="flex gap-[10px] text-[#fff] text-[15px] font-[400] font-nunito list-none w-fit cursor-pointer items-center">
              <ClockCircleOutlined  className="text-[1em] text-[#fff]"/>
              Saturday
            </div>
            <div className="text-[#fff] text-[15px] font-[400] font-nunito list-none  hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">11:00 AM - 08:00 PM</div>
          </div>
          <div className="flex justify-between mt-[10px]">
            <div className="flex gap-[10px] text-[#fff] text-[15px] font-[400] font-nunito list-none w-fit cursor-pointer items-center">
              <ClockCircleOutlined  className="text-[1em] text-[#fff]"/>
             Sunday
            </div>
            <div className="text-[#fff] text-[15px] font-[400] font-nunito list-none  hover:text-[#F26F25] w-fit cursor-pointer ease-in-out duration-300">11:00 AM - 08:00 PM</div>
          </div>
        </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="border-[1px] border-[#7E7E7E]"></div>
        <div className="flex justify-between py-[20px] items-center lg:flex-row flex-col lg:gap-[0px] gap-[10px]">
          <p className="font-nunito text-[#fff] text-[17px] font-[700] flex items-center">Copyright © 2024 PSI SQUARE. All rights reserved</p>
          <div className="flex items-center gap-[20px]">
          <InstagramOutlined className="text-[20px] text-[#007BFF] bg-[#fff] rounded-full p-2 hover:bg-[#535353] cursor-pointer hover:ease-in hover:border-[1px] hover:border-[#fff] ease-in-out duration-300"/>
          <LinkedinFilled className="text-[20px] text-[#007BFF] bg-[#fff] rounded-full p-2 hover:bg-[#535353] cursor-pointer hover:ease-in hover:border-[1px] hover:border-[#fff] ease-in-out duration-300"/> 
          <TwitterOutlined className="text-[20px] text-[#007BFF] bg-[#fff] rounded-full p-2 hover:bg-[#535353] cursor-pointer hover:ease-in hover:border-[1px] hover:border-[#fff] ease-in-out duration-300"/>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
