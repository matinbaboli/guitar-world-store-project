import React from "react"
import { Box, Typography } from "@mui/material"
import { primaryColor } from "../theme"

const CustomerReview = () => {
    return <Box sx={{
        width: "300px",
        border: `1px solid ${primaryColor}`,
        borderRadius: "5px",
        padding: "10px",
        
    }}>
        <Typography variant="h5">
            customer 1
        </Typography>
        <Typography variant="body1" sx={{opacity: "90%"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus ipsum ratione consectetur molestias rerum vero numquam veniam unde consequatur!
        </Typography>
    </Box>
}

export default CustomerReview

