import React from 'react'
import "./StartDemo.css"
import { useNavigate } from 'react-router-dom'
const StartDemoCard = (props) => {
 
  const navigate = useNavigate();

  return (
    <div className='demo-card rounded-lg bg-[#fff] hover:bg-[#yourColor] relative'>
      <div className="px-4 py-2 flex gap-[8px]">
        <div className="dots bg-[#dadada] w-[8px] h-[8px] rounded-full"></div>
        <div className="dots bg-[#dadada] w-[8px] h-[8px] rounded-full"></div>
        <div className="dots bg-[#dadada] w-[8px] h-[8px] rounded-full"></div>
      </div>
      <div className='relative'>
        <img src={props.demoImage} alt="" srcset="" />
        <button className="button absolute inset-0 w-full h-full opacity-0 hover:opacity-100 flex items-center justify-center ">
            <p className='bg-[#ffff] px-4 rounded-lg py-2 opacity-[1] hover:text-[#ffff] hover:bg-transparent hover:border-[1px] hover:border-[#fff] ease-in-out duration-300 border-[1px] border-[#ffff]' style={{opacity: 1}} onClick={()=>navigate('/portfolio')}>Browse</p>
        </button>
      </div>
      <div className='py-3 px-2'>
        <h2 className='font-nunito text-[16px] font-[700] leading-[1.87]'>{props.CompanyName}</h2>
      </div>
    </div>
  )
}

export default StartDemoCard
