import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='flex flex-col gap-[20px] justify-center items-center'>
      <img src={props.image} className='w-[100px]'/>
      <div className='font-nunito text-[16px] font-[600]'>{props.heading}</div>
    </div>
  )
}

export default WorkCard
