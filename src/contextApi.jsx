import React, { createContext, useEffect, useState } from "react"
import usePersistantState from "./usePersistantState"
export const context = createContext()

let cartData = [
    {
        id: 17,
        name: "Squier Classic Vibe '50s Telecaster",
        price: 429.99,
        type: "Electric",
        brand: "Squier",
        image: "../../public/images/guitars/17.jpg",
        count: 4,
    },
    {
        id: 11,
        name: "Squier Classic Vibe '50s Telecaster",
        price: 429.99,
        type: "Electric",
        brand: "Squier",
        image: "../../public/images/guitars/17.jpg",
        count: 8,
    },
] 


const AppContext = ({children}) => {
    const [storedProductId, setStoredProductId] = usePersistantState(0, "storedProductId")
    const [shoppingCartItems, setShoppingCartItems] = usePersistantState([], "shoppingCartItems")
    const [wishlistItems, setWishlistItems] = usePersistantState([], "wishlistItems")
    const [productTypeFilter, setProductTypeFilter] = usePersistantState("All", "productTypeFilter")
    const [extraFilter, setExtraFilter] = usePersistantState("None", "extraFilter")
    const [subTotalPrice, setSubTotalPrice] = usePersistantState(0, "subTotalPrice")
    const [windowScrollPositionY, setWindowScrollPositionY] = useState(window.scrollY)
    const [wishlistIconActivateAnimation, setWishlistIconActivateAnimation] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)



    useEffect(() => {
    })
    
    
    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
        window.addEventListener("scroll", () => setWindowScrollPositionY(window.scrollY))
        return () => {
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
            window.removeEventListener("scroll", () => setWindowScrollPositionY(window.scrollY))
        }
    })

    return (
        <context.Provider value={{
            storedProductId, 
            setStoredProductId, 
            shoppingCartItems, 
            setShoppingCartItems, 
            windowScrollPositionY,
            productTypeFilter,
            setProductTypeFilter,
            extraFilter,
            setExtraFilter,
            subTotalPrice,
            setSubTotalPrice,
            wishlistItems,
            setWishlistItems,
            wishlistIconActivateAnimation,
            setWishlistIconActivateAnimation,
            windowWidth,
            setWindowWidth
            }}>
            {children}
        </context.Provider>
    )
}

export default AppContext