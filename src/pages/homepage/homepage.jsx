import React from "react"
import HeroSection from "./HeroSection"
import OnSaleSection from "./OnSaleSection"
import AboutUsSection from "./AboutUsSection"
import ForBegginersSection from "./ForBegginersSection"
import CustomerReviewsSection from "./CustomerReviewsSection"
import Navbar from "../../components/Navbar"

const Homepage = () => {
    return <>
    <Navbar hero/>
    <Navbar fixed/>
    <HeroSection/>
    <OnSaleSection/>
    <AboutUsSection/>
    <ForBegginersSection/>
    <CustomerReviewsSection/>
</>
}

export default Homepage




