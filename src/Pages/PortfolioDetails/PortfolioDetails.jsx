import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import projectDetail from "../../Assests/project-details.png";
import CryptoJS, { enc } from 'crypto-js';
import axios from 'axios';


const PortfolioDetails = () => {
  const location = useLocation();
  const dataState = location?.state?.data;
  // const [decrypt,setDecrypt] = useState([]);
  // const [encrypt ,setEncrypt] = useState([]);
 

  // useEffect(() => {
  //   axios.get('http://192.168.100.13:8003/get_all_record/')
  //     .then((res) => {
  //       if (res.data) {
  //         setEncrypt(res.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }, []);
  


  // useEffect(() => {  
  //   if (encrypt) {
  //     console.log(encrypt)
  //     const iv = encrypt.iv;
  //     const key = "ibBaulUetoziUekGmUkpRQ==";
  //     const encryptedData = encrypt.encrypted_data; 
  //     const ciphertextBytes = CryptoJS.enc.Base64.parse(encryptedData);
  //     const keyBytes = CryptoJS.enc.Base64.parse(key);
  //     const ivBytes = CryptoJS.enc.Base64.parse(iv);
  //     const decryptedData = CryptoJS.AES.decrypt({ ciphertext: ciphertextBytes }, keyBytes, { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });    
  //     const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);    
  //     const data = JSON.parse(decryptedText);
  //     setDecrypt(data);
  //   }
  // }, [encrypt]);
  
  // console.log("Decrypted data:", decrypt);
  


  return (
    <div className="psi_container">
      {dataState?
      <>
      <div className="pt-[150px] pb-[100px] flex w-[100%] px-6 gap-[50px] border-b-[1px] border-b-[#EAEAEA] lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[100%]">
          <h1 className="lg:text-[100px] text-[50px] text-[#d5d5d5] font-nunito font-[800] leading-[71px]">
            {dataState.count}
          </h1>
          <h1 className="lg:text-[60px] text-[25px] text-[#535353] font-nunito font-[800] ">
            {dataState.heading}
          </h1>
          <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
            {dataState.descrip}
          </p>
        </div>
        <div className="lg:w-[50%] w-[100%]">
        <h1 className="lg:text-[60px] text-[25px] text-[#535353] font-nunito font-[800] ">
            What we did
          </h1>
          <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
            {dataState.whatwedid}
          </p>
        </div>
      </div>
        {dataState?.prosProject?.map((item, index) => (
  <div key={index} className={`flex w-[100%] items-end mt-[100px] px-6 gap-[60px] mb-[50px] ${
    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
  } flex-col`}
>
    <div className="lg:w-[35%] w-[100%]">
      <h1 className="lg:text-[35px] text-[25px] text-[#535353] font-nunito font-[800]">
        {item?.featureTitle}
      </h1>
      <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
        {item?.featureDescription}
      </p>
    </div>
    <div className="w-[1px] lg:block hidden border-[3px] border-[#747474] h-[200px]"></div>
    <div className="lg:w-[60%] w-[100%] border-[4px] border-[#2F89FC] rounded-[25px] p-8">
      <img src={item?.featureImage} alt="Project Detail" className='rounded-[15px]' style={{boxShadow:'0px 0px 80px rgba(0, 0, 0, 0.07)'}}/>
    </div>
  </div>
        ))}
        </> : 
              <div className="pt-[150px] pb-[100px] flex w-[100%] px-6 gap-[50px] border-b-[1px] border-b-[#EAEAEA] lg:flex-row flex-col">
              <div className="lg:w-[50%] w-[100%]">
                <h1 className="lg:text-[100px] text-[50px] text-[#d5d5d5] font-nunito font-[800] leading-[71px]">
                  01
                </h1>
                <h1 className="lg:text-[60px] text-[25px] text-[#535353] font-nunito font-[800] ">
                Banyo UK
                </h1>
                <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
                UK largest Home improvement ecommerce store.
                </p>
              </div>
              <div className="lg:w-[50%] w-[100%]">
              <h1 className="lg:text-[60px] text-[25px] text-[#535353] font-nunito font-[800] ">
                  What we did
                </h1>
                <p className="font-[400] text-[#747474] font-nunito lg:text-[20px] text-[16px] mt-[10px]">
                We developed a fully custom Ecommerce store featuring unique and user-friendly designs. Custom checkout pages streamline the purchasing process, reducing cart abandonment. Secure payment method integration includes PayPal, Stripe, and credit card processing. An intelligent recommendation system personalizes product suggestions, boosting sales. A custom chatbot provides real-time customer support, enhancing user satisfaction and reducing support workload.
                </p>
              </div>
            </div>
        }
    </div>
  );
};

export default PortfolioDetails;
