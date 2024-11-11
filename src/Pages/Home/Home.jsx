import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import DestinationGuide from '../../Components/Destination/DestinationGuide'
import MissionVision from '../../Components/Mission&Vission/MissionVision'
import Cards1 from "../../Components/Cards/Cards1"
import Cards2 from "../../Components/Cards/Cards2"
import Cards4 from '../../Components/Cards/Cards4'
import WithlocalsSection from '../../Components/Features/Features'
import SriLankanFoodSection from '../../Components/Cards/Cards3'
import ReviewCard from '../../Components/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import ManagementTeam from '../../Components/ManagementTeam/ManagementTeam'
import Contact from '../../Components/ContactUs/Contact'
import LandingPage from '../../Components/Hero/Hero1'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import SriLanka from '../../Components/Cards/Cards5'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       <DestinationGuide/>
        <Cards1/>
        <SriLanka/>
        <SriLankanFoodSection/>
        <Cards2/>
        <Cards4/>
        <ReviewCard/>
        <Footer/>
        {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="+94771181803" 
        accountName="Travel With Sri Lanka"
        allowClickAway
        notification
        notificationSound
        avatar="/assets/img/logo/LOGO.png" 
      />
    </div>
    
  )
}

export default Home