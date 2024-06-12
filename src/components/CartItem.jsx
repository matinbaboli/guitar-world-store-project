import React from "react"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import InteractiveCounter from "./InteractiveCounter"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import DeleteIcon from "../../public/delete-icon.svg?react"
import LinkModified from "./LinkModified.jsx"


const CartItem = () => {
    return (
        <Box 
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            width={{xs: "90%", sm:"550px", md: "750px"}}
        >
            <Stack direction="row" gap={{xs: 3, md: 8}}> 
                <Box 
                    display="flex"
                    flexDirection="column"
                    sx={{
                        border: `2px solid ${secondaryColor}`,
                        borderRadius: "10px",
                        overflow: "hidden"
                    }}
                >
                    <Box 
                        component="img"
                        alt="hero-image"
                        src={"public/images/guitar-pic.jpg"}
                        sx={{width: {xs: "130px", sm: "150px", md:"180px"},}}
                    ></Box>
                    <InteractiveCounter/>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={{xs: 2.5, md: 5}}
                    // pt="10px"

                >
                    <Box pl="8px">
                        <Typography variant="h5" >
                            Guitar
                        </Typography>
                        <Typography variant="body1" marginBlock={{xs:"5px", md: "15px"}}>
                            Type: Acoustic
                        </Typography>
                        <Typography variant="body1" >
                            $9.99
                        </Typography>
                    </Box>
                    <LinkModified to="ProductDetails">
                        <Button sx={{
                            color: secondaryColorLight
                        }}>view product</Button>
                    </LinkModified>
                </Box>
            </Stack>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Box>
    )
}

export default CartItem