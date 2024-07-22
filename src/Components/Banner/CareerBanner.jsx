import React from 'react'
import "./Banner.css"
import CareerImage from "../../Assests/carreerImage.png"

const CareerBanner = () => {
  return (
    <div className='career-banner text-left lg:py-[150px] py-[100px] font-nunito text-[20px] font-[600] px-6 flex w-[100%] justify-between lg:flex-row flex-col lg:gap-[0px] gap-[150px]'>
      <div className='lg:w-[50%] w-[100%]'>
     <h2 className='lg:text-[40px] text-[25px] font-[700] lg:w-[50%] w-[100%] leading-[45px]'> Where talent meets excellence:-</h2>
     <p className='mt-[20px] lg:w-[61.5%] w-[100%] text-[#747474] text-[16px] font-[600]'>Psi Square we expect to work alongside smart and passionate individuals who want to build a better tomorrow. We go over and beyond for our clients and deliver projects using the latest technologies, innovations and practices. We invest heavily in Research & Development and consistently push each other to learn and grow together</p>
     </div>
     <div className='lg:w-[50%] w-[100%] career-image-right'>
      <img src={CareerImage} alt=""  className='lg:h-[500px] h-[300px]'/>
     </div>
    </div>
  )
}

export default CareerBanner
