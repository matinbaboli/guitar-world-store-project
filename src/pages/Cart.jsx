import React, {useState, useContext, useEffect} from "react"
import {
    Typography,
    Box,
    TextField,
    Stack,
    Button
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import CartItem from "../components/CartItem"
import LinkModified from "../components/LinkModified"
import {context} from "../contextApi"


const Cart = () => {
    const {shoppingCartItems, setShoppingCartItems, subTotalPrice, setSubTotalPrice} = useContext(context)
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
        <SectionContainer backgroundColor={generalBackgroundColor} hero={cartIsEmpty}>
            {cartIsEmpty 
            ?
                <Stack alignItems="center" justifyContent="start" gap={4}>
                    <Box
                    component="img"
                    src="images/empty-cart.png"
                    width="350px"
                    />
                    <Typography variant="h6">
                        There are no items added to the Cart yet
                    </Typography>
                    <LinkModified to="Catalog">
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

                <Typography variant="h2" component="h1" align="center" marginBlock="50px">
                    Shopping Cart
                </Typography>
                {
                    shoppingCartItems.map(item => {
                        const {id} = item
                        return <CartItem key={id} props={item}/>
                    })
                }
                <TextField
                label="Order Note"
                multiline
                minRows={3}
                sx={{
                    width: {xs:"90%", sm: "550px", md: "750px"}
                }}
                />  
                <Stack direction="row" gap={15}>
                    <Typography variant="h6">Total:</Typography>
                    <Typography variant="h6">${subTotalPrice}</Typography>
                </Stack>
                <Stack direction={{xs: "column", md: "row-reverse"}} gap={2} mt="15px">
                    <LinkModified to="Checkout">
                        <Button variant="contained" sx={{width: "100%"}}>Checkout</Button>
                    </LinkModified>
                        <Button onClick={() => {
                            setShoppingCartItems([])
                            localStorage.clear()
                            //the clear method removes all the data from localStorage. for now this works, writing this in case is causes a problem and i have forgotten what it does. 
                        }} variant="outlined">clear cart</Button>
                </Stack>
            </Box> 

            }
        </SectionContainer>
    )
}

export default Cart