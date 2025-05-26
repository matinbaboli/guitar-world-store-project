import React, { useState, useEffect } from "react"
import {
    Box,
} from "@mui/material"
import Navbar from "../../components/Navbar"
import data from "../../data.json"
import { colors } from "../../style/colors"
import { useProductDetailsStore, useShoppingCartItemsStore } from "../../store/usePersistantStateStore"
import ProductShowcase from "./ProductShowcase"
import ProductData from "./ProductData"


let initialTargetItem = {
    name: "Guitar",
    price: 100,
    type: "Electric",
    brand: "Fender",
    image: "images/guitars/1.jpg",
    description: "The Fender American Professional II Stratocaster offers a mix of classic design and modern enhancements. Known for its bright, clear tones and exceptional playability, this guitar features a deep 'C' neck profile, V-Mod II pickups for more articulation, and a sculpted neck heel for easier access to higher frets. It's a versatile instrument suitable for various genres, from rock to blues.",
    rating: 4.2
}


const ProductDetails = () => {
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
    const [targetItemFromData, setTargetItemFromData] = useState(initialTargetItem)
    const [counter, setCounter] = useState(1)
    const storedProductId = useProductDetailsStore(state => state.storedProductId)
    
    useEffect(() => {
        let myItem = data.filter((item) => item.id === storedProductId)
        setTargetItemFromData(myItem[0])

        shoppingCartItems.forEach(item => {
            if(item.id === storedProductId) {
                setCounter(item.count)
            } 
        }) 
    }, [data])
    

    return (
        <>
            <Navbar/>
            <Navbar fixed/>
            <Box 
                display="flex" 
                flexDirection={{xs:"column", md: "row"}} 
                alignItems={{xs: "center", md: "start"}}
                gap={{xs: 0, md: "20px", lg: "40px"}}
                boxSizing="border-box"
                // mb="80px"

                sx={{
                    background: colors.mainbackground,
                    pb: "20px",
                    paddingInline: {md: "10px",lg: "80px", xl: "100px"}
                }}
            >
                <ProductShowcase targetItemFromData={targetItemFromData} counter={counter} setCounter={setCounter}/>
                <ProductData targetItemFromData={targetItemFromData}/>
            </Box>
        </>
    )
}



export default ProductDetails 