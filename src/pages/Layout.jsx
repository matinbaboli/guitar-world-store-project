import React from "react"
import { Outlet, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Layout = ({windowWidth}) => {
    return (
        <>
            <Navbar windowWidth={windowWidth}/>
            <Outlet/>
            <Footer windowWidth={windowWidth}/>
        </>
        
    )
}

export default Layout