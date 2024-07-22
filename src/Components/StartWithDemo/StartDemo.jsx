import React from 'react'
import StartDemoCard from './StartDemoCard'
import DemoImage from "../../Assests/Demo-img.png"
import Banyo from "../../Assests/banyoUk.png"
import Buizz from "../../Assests/EventBuizz.png"
import nexusHome from "../../Assests/nexusHome.png"
import Acrunity from "../../Assests/arcunity.png"
import secp from "../../Assests/scep.png"

const StartDemo = () => {
  return (
    <div className='psi_container '>
       <div className='lg:text-[14px] text-[12px] font-nunito tracking-[3px] text-[#ababab] text-center leading-[1.43] font-[700] mb-[10px] my-[60px]'>Start with Demo</div> 
       <h3 className='font-nunito lg:text-[40px] text-[20px] text-center my-[10px] font-[700]'><span className='text-[#086AD8]'>09+ Unique Homepages</span> for Multiple Purposes</h3>
       <div className='flex lg:flex-row flex-col  w-[90%] gap-[30px] flex-wrap m-auto my-[60px] justify-center'>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="Banyo UK" demoImage={Banyo}/>
        </div>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="Event Buizz" demoImage={Buizz}/>
        </div>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="Nexus Home" demoImage={nexusHome}/>
        </div>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="Acrunity" demoImage={Acrunity}/>
        </div>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="SECP" demoImage={secp}/>
        </div>
        <div className='lg:w-[30%] w-[100%]'>
        <StartDemoCard CompanyName="YourDiamondGuys" demoImage={DemoImage}/>
        </div>
       </div>
    </div>
  )
}

export default StartDemo
