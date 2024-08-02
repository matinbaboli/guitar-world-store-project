import React from "react"
import { Outlet, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
const Layout = ({windowWidth}) => {
    return (
        <>
            <Navbar windowWidth={windowWidth}/>
            <Navbar windowWidth={windowWidth} fixed/>
            <Outlet/>
            <ScrollToTop/>
            <Footer windowWidth={windowWidth}/>
        </>
        
    )
}

export default Layout