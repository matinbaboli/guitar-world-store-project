import React, {useState, useEffect, useContext}  from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Homepage from "./pages/homepage/homepage"
import Catalog from "./pages/Catalog"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Checkout from "./pages/Checkout"
import AboutUs from "./pages/AboutUs"
import Wishlist from "./pages/Wishlist"
import { useWindowWidthStore } from "./store/useWindowWidthStore"
import { useScrollPositionY } from "./store/useScrollPositionYStore"

const App = () => {
    const setWindowWidth = useWindowWidthStore(state => state.setWindowWidth)
    const setWindowScrollPositionY = useScrollPositionY(state => state.setWindowScrollPositionY)

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
        window.addEventListener("scroll", () => setWindowScrollPositionY(window.scrollY))

        return () => {
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
            window.removeEventListener("scroll", () => setWindowScrollPositionY(window.scrollY))
        }
    })

    return (
        <BrowserRouter basename="/guitar-world-store-project/">
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="cart/checkout" element={<Checkout />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

// check for accessibility of the mui components and see if you need to change or add anything

export default App;