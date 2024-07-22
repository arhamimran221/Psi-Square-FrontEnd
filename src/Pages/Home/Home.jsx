import React from 'react'
import Banner from '../../Components/Banner/HomeBanner'
import Slider from '../../Components/TechSlider/TechSlider'
import StartDemo from '../../Components/StartWithDemo/StartDemo'
import WorkSection from '../../Components/WorkSection/WorkSection'
import ContactUs from '../../Components/ContactUs/ContactUs'
import ClientReview from '../../Components/ClientReview/ClientReview'

const Home = () => {
  return (
    <div className='home-wrap'>
      <Banner/>
      <Slider/>
      <StartDemo/>
      <WorkSection/>
      <ClientReview/>
      <ContactUs/>
    </div>
  )
}

export default Home
