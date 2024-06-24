import React from "react"
import {
    Box,
    Typography,
    Stack,
    Button,

} from "@mui/material"
import { primaryColorLight } from "../theme"


const WishlistItem = () => {
    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid rgba(0, 0, 0, 0.4)"
            width={{xs: "70%"}}
            minWidth={{sm: "200px"}}
            paddingBottom="10px"
            borderRadius="5px"
            overflow="hidden"
            sx={{
                userSelect: "none"
            }}
        >
            <Box 
                component="img"
                src="../../public/images/guitar-pic.jpg"
                alt="dynamicName"
                width={{xs: "200px",sm: "200px"}}
                draggable={false}
            />
            <Typography variant="h4" component="h2" mt="10px" mb="20px">
                Guitar
            </Typography>
            <Stack alignItems="center" mb="10px">
                <Typography variant="body1" letterSpacing="2px" color="#666666" mb="5px"> 
                    Type
                </Typography>
                <Typography variant="body2" letterSpacing="2px" color="#9E9E9E"> 
                    Acoustic
                </Typography>
            </Stack>
            <Stack alignItems="center" mb="10px">
                <Typography variant="body1" letterSpacing="2px" color="#666666" mb="5px"> 
                    Saved on
                </Typography>
                <Typography variant="body2" letterSpacing="2px" color="#9E9E9E"> 
                    4/29/21
                </Typography>
            </Stack>
            <Button variant="text" size="large" sx={{
                mt: "20px",
                color: primaryColorLight,

            }}>
                add to cart
            </Button>
        </Box>
    )
}

export default WishlistItem