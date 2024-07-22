import React, { useState } from "react";
import CareerBanner from "../../Components/Banner/CareerBanner";
import { ArrowRightOutlined, LikeFilled, SwapRightOutlined } from "@ant-design/icons";
import LocationImageLight from "../../Assests/location-icon-light.svg";
import LocationImageDark from "../../Assests/location-icon-dark.svg";
import CareerData from "./CareerData";

const Career = () => {
  const [open, setOpen] = useState(
    CareerData.reduce((acc, _, ind) => ({ ...acc, [ind]: false }), {})
  );
  
  const handleClick = (index) => {
    console.log("index", index)
    setOpen(prevState => {
      const newState = Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: false }), // Close all divs
        {}
      );
      newState[index] = !prevState[index]; // Toggle the clicked div
      return newState;
    });
  };


  return (
    <div className="psi_container">
      <CareerBanner />
      <div className="px-4 ">
        {
          CareerData.map((Item, ind) => {
            return(
              <>
              <div
                  className=" border-[1px] border-[#dadada] rounded-lg mb-[40px] overflow-hidden"
                  onClick={() => handleClick(ind)}
                  key={ind}
                >
                  <div
                    className={
                      open[ind]
                        ? " bg-[#4FAEFF] py-6 px-6 text-[#fff] flex items-center justify-between cursor-pointer"
                        : "flex py-6 px-6 items-center justify-between cursor-pointer"
                    }
                  >
                    <div className="">
                      <h2 className="font-nunito font-[700] lg:text-[34px] text-[24px] mb-[.5rem]">
                        {Item?.title}
                      </h2>
                      <div className="flex gap-[20px]">
                        <p className="flex gap-[10px] items-center lg:text-[24px] text-[14px] font-[600] font-nunito">
                          <img
                            src={open[ind] ? LocationImageLight : LocationImageDark}
                            alt="location"
                          />
                          {Item?.location}
                        </p>
                        <p className="flex gap-[10px] items-center lg:text-[24px] text-[14px] font-[600] font-nunito">
                          <LikeFilled /> {Item?.experience}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      {open[ind] ? (
                        <ArrowRightOutlined className="rotate-90 text-[#fff] lg:text-[40px] text-[30px]" />
                      ) : (
                        <ArrowRightOutlined className="text-[#4FAEFF] lg:text-[40px] text-[30px]" />
                      )}
                    </div>
                  </div>
                  {open[ind] && 
                    Item?.descriptions?.map((desc, index) => {
                      return(
                        <div className="my-[50px] lg:mx-[100px] mx-[20px]" key={index}>
                          <h2 className="font-nunito font-[700] lg:text-[34px] text-[24px] text-[#453232]">
                            Job Description
                          </h2>
                          <p className="lg:text-[20px] text-[16px] text-[#747474] font-nunito mt-[10px]">
                          {desc?.JobDes}
                          </p>
                          <h2 className="font-nunito font-[700] lg:text-[34px] text-[24px] text-[#453232] mt-[20px]">
                            Requirements
                          </h2>
                          <ol type="1" className="list-decimal">
                            {desc?.Requirement?.map((reqItem, i) => (
                              <li key={i} className="lg:text-[20px] text-[16px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                                {reqItem?.listItem}
                              </li>
                    ))}
                          </ol>
                          <div className="flex justify-center">
                            <button className="bg-[#4FAEFF] px-4 py-2 cursor-pointer mt-[40px] rounded-lg cursor-pointer font-nunito text-[#fff] text-[18px]">
                              Apply Now!
                            </button>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </>
            )
          })
        }
        
        {/* <div
          className=" border-[1px] border-[#dadada] rounded-lg mb-[40px] overflow-hidden"
          onClick={() => handleClick(2)}
        >
          <div
            className={
              open2
                ? " bg-[#4FAEFF] py-6 px-6 text-[#fff] flex items-center justify-between cursor-pointer"
                : "flex py-6 px-6 items-center justify-between cursor-pointer"
            }
          >
            <div className="">
              <h2 className="font-nunito font-[700] text-[34px] mb-[.5rem]">
                Senior React Developer
              </h2>
              <div className="flex gap-[20px]">
                <p className="flex gap-[10px] items-center text-[24px] font-[600] font-nunito">
                  <img
                    src={open2 ? LocationImageLight : LocationImageDark}
                    alt="location"
                  />{" "}
                  Lahore, Pakistan
                </p>
                <p className="flex gap-[10px] items-center text-[24px] font-[600] font-nunito">
                  <LikeFilled /> 1 - 2 Years
                </p>
              </div>
            </div>
            <div className="">
              {open2 ? (
                <SwapRightOutlined className="rotate-90 text-[#fff] text-[40px]" />
              ) : (
                <SwapRightOutlined className="text-[#4FAEFF] text-[40px]" />
              )}
            </div>
          </div>
          {open2 && (
            <div className="my-[50px] mx-[100px]">
              <h2 className="font-nunito font-[700] text-[34px] text-[#453232]">
                Job Description
              </h2>
              <p className="text-[20px] text-[#747474] font-nunito mt-[10px]">
                Psi Square is searching for candidates for the position of
                Business Development Executive. This position requires a
                candidate with expertise in bringing new clients for the company
                and maintaining customer relations with business clients. The
                ideal candidate will have experience in all stages of the sales
                cycle. They should be confident in building new client
                relationships and maintaining existing ones. They should have
                evidence of strong skills and possess good negotiation skills.
              </p>
              <h2 className="font-nunito font-[700] text-[34px] text-[#453232] mt-[20px]">
                Requirements
              </h2>
              <ol type="1" className="list-decimal">
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Lead generation.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Email Campaigns.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  LinkedIn outreach from Company profiles.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Shadow managers on call, take MoMs, record meetings, and
                  upload in respective drive folders.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Identify potential lead-generation platforms and tools for
                  effective work.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Identify and research potential clients through assigned
                  platforms.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Update and utilize used CRMs on a daily basis.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Drive the end-to-end sales process along with business
                  operations collaboration.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Meet given KPIs within the time limit assigned.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Knowledge of all the freelancing platforms Upwork/Fiverr
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Find the right jobs and write proposals for them.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Set up meetings with the clients and coordinate with the sales
                  team in order to close the sale
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Working closely with other team members in the sales team in
                  order to make sure that the monthly revenue target of the
                  company is achieved.
                </li>
              </ol>
              <div className="flex justify-center">
                <button className="bg-[#4FAEFF] px-4 py-2 cursor-pointer mt-[40px] rounded-lg cursor-pointer font-nunito text-[#fff] text-[18px]">
                  Apply Now!
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className=" border-[1px] border-[#dadada] rounded-lg mb-[40px] overflow-hidden"
          onClick={() => handleClick(3)}
        >
          <div
            className={
              open3
                ? " bg-[#4FAEFF] py-6 px-6 text-[#fff] flex items-center justify-between cursor-pointer"
                : "flex py-6 px-6 items-center justify-between cursor-pointer"
            }
          >
            <div className="">
              <h2 className="font-nunito font-[700] text-[34px] mb-[.5rem]">
                Senior React Developer
              </h2>
              <div className="flex gap-[20px]">
                <p className="flex gap-[10px] items-center text-[24px] font-[600] font-nunito">
                  <img
                    src={open3 ? LocationImageLight : LocationImageDark}
                    alt="location"
                  />{" "}
                  Lahore, Pakistan
                </p>
                <p className="flex gap-[10px] items-center text-[24px] font-[600] font-nunito">
                  <LikeFilled /> 1 - 2 Years
                </p>
              </div>
            </div>
            <div className="">
              {open3 ? (
                <SwapRightOutlined className="rotate-90 text-[#fff] text-[40px]" />
              ) : (
                <SwapRightOutlined className="text-[#4FAEFF] text-[40px]" />
              )}
            </div>
          </div>
          {open3 && (
            <div className="my-[50px] mx-[100px]">
              <h2 className="font-nunito font-[700] text-[34px] text-[#453232]">
                Job Description
              </h2>
              <p className="text-[20px] text-[#747474] font-nunito mt-[10px]">
                Psi Square is searching for candidates for the position of
                Business Development Executive. This position requires a
                candidate with expertise in bringing new clients for the company
                and maintaining customer relations with business clients. The
                ideal candidate will have experience in all stages of the sales
                cycle. They should be confident in building new client
                relationships and maintaining existing ones. They should have
                evidence of strong skills and possess good negotiation skills.
              </p>
              <h2 className="font-nunito font-[700] text-[34px] text-[#453232] mt-[20px]">
                Requirements
              </h2>
              <ol type="1" className="list-decimal">
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Lead generation.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Email Campaigns.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  LinkedIn outreach from Company profiles.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Shadow managers on call, take MoMs, record meetings, and
                  upload in respective drive folders.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Identify potential lead-generation platforms and tools for
                  effective work.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Identify and research potential clients through assigned
                  platforms.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Update and utilize used CRMs on a daily basis.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Drive the end-to-end sales process along with business
                  operations collaboration.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Meet given KPIs within the time limit assigned.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Knowledge of all the freelancing platforms Upwork/Fiverr
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Find the right jobs and write proposals for them.
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Set up meetings with the clients and coordinate with the sales
                  team in order to close the sale
                </li>
                <li className="text-[20px] text-[#747474] font-nunito mt-[10px] ml-[20px]">
                  Working closely with other team members in the sales team in
                  order to make sure that the monthly revenue target of the
                  company is achieved.
                </li>
              </ol>
              <div className="flex justify-center">
                <button className="bg-[#4FAEFF] px-4 py-2 cursor-pointer mt-[40px] rounded-lg cursor-pointer font-nunito text-[#fff] text-[18px]">
                  Apply Now!
                </button>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Career;
