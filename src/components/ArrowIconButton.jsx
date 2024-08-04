import React from 'react'
import {
    IconButton
} from "@mui/material"
import RightArrow from "../../public/right-arrow-icon.svg?react"
import LeftArrow from "../../public/left-arrow-icon.svg?react"


const ArrowIconButton = ({children, color, onClick, type}) => {
    return (
        <IconButton 
        onClick={onClick}
        sx={{
            backgroundColor: color,
            width: "60px",
            height: "50px",
            borderRadius: "22px",            
            // pr: "13px",
            "&:hover": {
                backgroundColor: color,
                filter: "brightness(80%)"
            }
        }}>
            {type === "next" && <RightArrow/>}
            {type === "previous" && <LeftArrow/>}
        </IconButton>  

    )
}

export default ArrowIconButton