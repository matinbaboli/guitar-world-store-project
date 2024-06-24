import React from "react"
import Diamond from "../../public/diamond-icon.svg?react"
import { 
    Box, 
    Typography, 
 } from "@mui/material"
 import {primaryColor, primaryColorLight, primaryColorVeryLight, secondaryColor, secondaryColorLight, secondaryColorVeryLight} from "../theme"

const Value = ({filled}) => {
    return <Box 
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="120px"
    padding="10px"
    sx={{
        border: `1px solid ${primaryColorVeryLight}`,
        borderRadius: "5px",
        background: filled && primaryColorLight,
    }}>
        <Diamond fill={filled ? "white": primaryColorVeryLight} style={{width: "70px",}}/>
        <Typography variant="h5" color={filled ? "white": primaryColorVeryLight}>
            Value
        </Typography>
    </Box>
    
}

export default Value