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


    
    return (
    <BrowserRouter basename="/guitar-world-store-project/">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="Home?" element={<Homepage/>}/>
                <Route path=":page?/Catalog" element={<Catalog/>}/>
                <Route path="Cart" element={<Cart/>}/>
                <Route path=":page?/About Us" element={<AboutUs/>}/>
                <Route path="Wishlist" element={<Wishlist/>}/>
                <Route path=":page?/:page?/ProductDetails/:id" element={<ProductDetails/>}/>
                <Route path="Cart/Checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

// check for accessibility of the mui components and see if you need to change or add anything

export default App;