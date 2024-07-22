import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio/Portfolio';
import PortfolioDetails from './Pages/PortfolioDetails/PortfolioDetails';
import ScrollToTop from './Pages/ScrollToTop';
import AboutUs from './Pages/AboutUs/AboutUs';
import Career from './Pages/Career/Career';
import Services from './Pages/Services/Services';
import WebDev from './Pages/ServicesDetails/WebDev';
import UiUxDesign from './Pages/ServicesDetails/UiUxDesign';
import MobileDev from './Pages/ServicesDetails/MobileDev';
import AIML from './Pages/ServicesDetails/AIML';
import BlockChain from './Pages/ServicesDetails/BlockChain';
import DevOps from './Pages/ServicesDetails/DevOps';


const App = () => {
  return (
    <div>
    <ScrollToTop>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/portfolio-details" element={<PortfolioDetails/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/web-developement" element={<WebDev/>}/>
          <Route path="/ui-ux" element={<UiUxDesign/>}/>
          <Route path="/mobile-dev" element={<MobileDev/>}/>
          <Route path="/ai-machine-learning" element={<AIML/>}/>
          <Route path="/block-chain" element={<BlockChain/>}/>
          <Route path="/devops" element={<DevOps/>}/>
        </Routes>
      <Footer/>  
      </ScrollToTop>
    </div>
  )
}

export default App
