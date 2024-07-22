import React from 'react'
import image1 from "../../Assests/defi-img.png"
import image2 from "../../Assests/Education-img.png"
import image3 from "../../Assests/Health-care.png"
import image4 from "../../Assests/hospitality.png"
import image5 from "../../Assests/e-commerce.png"
import image6 from "../../Assests/real-estate.png"
import WorkCard from './WorkCard'

const WorkSection = () => {
  const workData = [
    {
        image:image1,
        heading: "Defi"
    },
    {
        image:image2,
        heading: "Education"
    },
    {
        image:image3,
        heading: "Healthcare"
    },
    {
        image:image4,
        heading: "Hospitality"
    },
    {
        image:image5,
        heading: "E-Commerce"
    },
    {
        image:image6,
        heading: "Real Estate"
    },
  ]

  return (
    <div className='psi_container'>
      <h3 className='font-[nunito] lg:text-[40px] text-[20px] text-center my-[10px] font-[700]'><span className='text-[#086AD8]'>Industries</span> we work with</h3>
      <div className='lg:text-[14px] text-[12px] font-nunito tracking-[3px] text-[#ababab] text-center leading-[1.43] font-[700] '>Our experties in various industries</div> 
       <div className="w-[80%] gap-[50px] flex lg:flex-row flex-col justify-center flex-wrap m-auto my-[70px]">
        {workData.map((item)=>(
         <div className='lg:w-[30%] w-[100%]'>
           <WorkCard image={item.image} heading={item.heading}/>
         </div>
        ))}
       </div>
    </div>
  )
}

export default WorkSection
