import React from "react"
import Diamond from "../../public/diamond-icon.svg?react"
import { 
    Box, 
    Typography, 
 } from "@mui/material"
 import {primaryColor, secondaryColor, secondaryColorLight} from "../theme"

const Value = ({filled}) => {
    return <Box 
    display="flex"
    flexDirection={filled ? "row-reverse": "row"}
    justifyContent="space-around"
    alignItems="center"
    width={{xs: "300px",sm: "500px", md: "400px",lg: "520px"}}
    height="140px"
    sx={{
        border: `1px solid ${secondaryColor}`,
        borderRadius: "5px",
        background: filled && primaryColor,
    }}>
        <Typography variant="h5" color={filled ? "white": secondaryColor}>
            Value
        </Typography>
        <Diamond fill={filled ? "white": secondaryColor} style={{width: "80px",}}/>
    </Box>
    
}

export default Value