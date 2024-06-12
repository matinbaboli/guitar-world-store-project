import React from "react"
import { Box, Typography } from "@mui/material"
import { primaryColorLight, secondaryColor, secondaryColorLight } from "../theme"
import StartQuote from "../../public/start-quote-icon.svg?react"
import EndQuote from "../../public/end-quote-icon.svg?react"

const CustomerReview = () => {
    return <Box sx={{
        position:"relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "150px",
        border: `2px solid ${primaryColorLight}`,
        borderRadius: "5px",
    }}>
        <Box sx={{
            position:"absolute",
            bottom: "-15px",
            left: "-15px"
        }}>
            <StartQuote />
        </Box>
        <Box sx={{
            position:"absolute",
            top: "-10px",
            right: "-15px"
        }}>
            <EndQuote/>
        </Box>
        <Box>
            <Typography variant="h5" color={secondaryColor}>
                Customer 1
            </Typography>
            <Typography variant="body1" sx={{opacity: "90%", mt: "10px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus ipsum ratione consectetur molestias rerum vero numquam veniam unde consequatur!
            </Typography>
        </Box>
    </Box>
}

export default CustomerReview

