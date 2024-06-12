import React from "react"
import { 
    Box,
    Divider,
    Stack,
    Typography,

 } from "@mui/material"
 import {primaryColor, primaryColorLight, secondaryColor, secondaryColorVeryLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import SectionContainer from "../components/SectionContainer"
import CheckoutItem from "../components/CheckoutItem"


const Checkout = () => {
    return (
        <SectionContainer backgroundColor={generalBackgroundColor}>
            <Box 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="30px"
                borderRadius="8px"
                sx={{
                    background: secondaryColorVeryLight
                }}
            >
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
                <Divider variant="fullWidth" width="100%" sx={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "5px",
                    marginBlock: "30px"
                }}/>
                <Box width="80%">
                    <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="h6" letterSpacing="1px">
                            Subtotal 
                        </Typography>
                        <Typography variant="body1" color="GrayText">
                            $100 
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6" letterSpacing="1px">
                            Estimated Shipping 
                        </Typography>
                        <Typography variant="body1" color="GrayText">
                            $100 
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" mt="10px">
                        <Typography variant="h5" color="secondary" letterSpacing="1px">
                            TOTAL 
                        </Typography>
                        <Typography variant="h5" color="secondary" letterSpacing="1px">
                            $100 
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </SectionContainer>
    )
}

export default Checkout