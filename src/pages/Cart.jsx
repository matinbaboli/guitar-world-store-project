import React, {useState, useContext, useEffect} from "react"
import {
    Typography,
    Box,
    TextField,
    Stack,
    Button
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import CartItem from "../components/CartItem"
import LinkModified from "../components/LinkModified"
 
import { colors } from "../style/colors"
import { useShoppingCartItemsStore, useSubTotalPriceStore } from "../store/usePersistantStateStore"
import Navbar from "../components/Navbar"
import { AnimatePresence } from "framer-motion"
import { MotionBox } from "../components/MotionComponents"


const Cart = () => {
    const subTotalPrice = useSubTotalPriceStore(state => state.subTotalPrice)
    const setSubTotalPrice = useSubTotalPriceStore(state => state.setSubTotalPrice)
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
    const setShoppingCartItems = useShoppingCartItemsStore(state => state.setShoppingCartItems)

    const [cartIsEmpty, setCartIsEmpty] = useState()

    useEffect(() => {
        if(shoppingCartItems.length === 0) {
            setCartIsEmpty(true)
        } else {
            setCartIsEmpty(false)
        }

        let priceSum = 0
        shoppingCartItems.forEach((item) => {
            priceSum += item.price * item.count
        })
        setSubTotalPrice(priceSum)
    }, [shoppingCartItems])

    


    return (
        <>
            <Navbar/>
            <Navbar fixed/>
            <SectionContainer backgroundColor={colors.mainbackground} hero={cartIsEmpty}>
                
                {cartIsEmpty 
                ?
                <Stack alignItems="center" justifyContent="start" gap={4} height="90vh">
                        <Box
                        component="img"
                        src="images/empty-cart.png"
                        width={{xs: "300px", sm: "350px"}}
                        />
                        <Typography fontSize="18px" color={colors.textSecondary}>
                            Your shopping cart is empty for now.
                        </Typography>
                        <LinkModified to="/catalog">
                            <Button variant="contained">
                                Start shopping
                            </Button>
                        </LinkModified>
                    </Stack>
                : 
                <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={5}
                mb="50px"
                >

                    <Typography component="h1" fontSize="36px" marginBlock="50px" color={colors.primary}>
                        My Shopping Cart
                    </Typography>
                    {
                        shoppingCartItems.map(item => {
                            const {id} = item
                            return (
                                <CartItem props={item} key={id}/>
                            ) 
                        })
                    }
                    <Box 
                    display="flex" 
                    flexDirection={{xs: "column", md: "row"}}
                    justifyContent="center" 
                    alignItems="center" 
                    width={{xs: "90%", sm:"550px", md: "800px", lg: "1000px"}} 
                    gap="40px" 
                    mb="100px"
                    >
                        <TextField
                        label="Your Message"
                        multiline
                        minRows={7}
                        sx={{
                            width: "100%",
                        }}
                        />  
                        <Box 
                        display="flex" 
                        flexDirection="column" 
                        gap="20px"
                        width={{xs: "100%", md: "50%"}}
                        boxSizing="border-box"
                        border={`1px solid ${colors.primary}`} 
                        borderRadius="4px" 
                        padding="18px 33px"
                        >
                            <Stack direction="row" gap={15} color={colors.primary}>
                                <Typography variant="h5">Total:</Typography>
                                <Typography variant="h5">${subTotalPrice}</Typography>
                            </Stack>
                            <Stack gap={2} mt="15px">
                                <LinkModified to="/cart/checkout">
                                    <Button variant="contained" size="small" sx={{width: "100%"}}>Checkout</Button>
                                </LinkModified>
                                <Button variant="outlined" color="info" size="small" onClick={() => {
                                    setShoppingCartItems([])
                                    localStorage.clear()
                                    //the clear method removes all the data from localStorage. for now this works, writing this in case is causes a problem and i have forgotten what it does. 
                                }}>
                                    clear cart
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box> 

                }       
            </SectionContainer>
        </>
    )
}

export default Cart