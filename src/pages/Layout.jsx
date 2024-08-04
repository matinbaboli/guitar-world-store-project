import React from "react"
import { Outlet, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import {context} from "../contextApi"


const Layout = () => {

    return (
        <>
            <Navbar/>
            <Navbar fixed/>
            <Outlet/>
            <ScrollToTop/>
            <Footer/>
        </>
        
    )
}

export default Layout