import React from "react"
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

const Cart = () => {
    return (
        <SectionContainer backgroundColor={generalBackgroundColor}>
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
                <CartItem/>
                <CartItem/>
                <CartItem/>
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
                <Typography variant="h6">$100</Typography>
            </Stack>
            <Stack direction={{xs: "column", md: "row-reverse"}} gap={2} mt="15px">
                <Button variant="contained">Checkout</Button>
                <Button variant="outlined">clear cart</Button>
            </Stack>
            </Box> 
        </SectionContainer>
    )
}

export default Cart