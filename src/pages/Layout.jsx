import React from "react"
import { Outlet, Link } from "react-router-dom"
import Footer from "../components/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import { BreakpointProvider } from "../BreakpointsProvider"

const Layout = () => {

    return (
        <>
            <BreakpointProvider/>
            <Outlet/>
            <ScrollToTop/>
            <Footer/>
        </>
        
    )
}

export default Layout