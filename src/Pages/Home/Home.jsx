import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import DestinationGuide from '../../Components/Destination/DestinationGuide'
import MissionVision from '../../Components/Mission&Vission/MissionVision'
import Cards1 from "../../Components/Cards/Cards1"
import Cards2 from "../../Components/Cards/Cards2"
import Cards4 from "../../Components/Cards/Cards4"

import WithlocalsSection from '../../Components/Features/Features'
import SriLankanFoodSection from '../../Components/Cards/Cards3'
import ReviewCard from '../../Components/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import ManagementTeam from '../../Components/ManagementTeam/ManagementTeam'
import CarouselLogo from '../../Components/LogoCarosal/CarouselLogo'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       <DestinationGuide/>
        <Cards1/>
        <Cards2/>
        <Cards4/>
        <SriLankanFoodSection/>
        <MissionVision/>
        <WithlocalsSection/>
        <CarouselLogo/>
        <ReviewCard/>
        <ManagementTeam/>
        <Footer/>
    </div>
    
  )
}

export default Home