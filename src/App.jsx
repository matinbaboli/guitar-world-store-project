import React, {useState, useEffect, useContext}  from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Homepage from "./pages/homepage"
import Catalog from "./pages/Catalog"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import AboutUs from "./pages/AboutUs"
import Wishlist from "./pages/Wishlist"

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
        return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    })


    
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout windowWidth={windowWidth}/>}>
                <Route path="Home?" element={<Homepage windowWidth={windowWidth}/>}/>
                <Route path="Catalog" element={<Catalog windowWidth={windowWidth}/>}/>
                <Route path="Cart" element={<Cart windowWidth={windowWidth}/>}/>
                <Route path=":page?/About Us" element={<AboutUs windowWidth={windowWidth}/>}/>
                <Route path="Wishlist" element={<Wishlist windowWidth={windowWidth}/>}/>
                <Route path=":page?/ProductDetails/:id" element={<ProductDetails windowWidth={windowWidth} />}/>
                <Route path="Cart/Checkout" element={<Checkout windowWidth={windowWidth}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

// check for accessibility of the mui components and see if you need to change or add anything

export default App;