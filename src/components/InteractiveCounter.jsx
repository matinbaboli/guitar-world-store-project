import React, {useState} from "react"
import { Box, IconButton, Typography } from "@mui/material"
import PlusIcon from "../../public/plus-icon.svg?react"
import MinusIcon from "../../public/minus-icon.svg?react"
import {secondaryColor} from "../theme"

const InteractiveCounter = ({label, roundCorners}) => {
    const [counter, setCounter] = useState(0)
    return (
        <Box 
            display="flex"
            justifyContent="center"
            gap={2}
            sx={{
                background: secondaryColor,
                color: "white",
                paddingBlock: "5px",
                borderRadius: roundCorners && "5px"
            }}
        >
            {
            label && 
            <Typography 
                variant="h5"
                letterSpacing="2px"
                pl="10px"
                mr="20px"
            >
                {label}
            </Typography>
            }

            <IconButton onClick={() => setCounter(counter - 1)}>
                <MinusIcon style={{width: "15px"}}/>
            </IconButton>
            <Typography variant="h4">{counter}</Typography>
            <IconButton onClick={() => setCounter(counter + 1)}>
                <PlusIcon style={{width: "15px"}}/>
            </IconButton>
        </Box>
    )
}

export default InteractiveCounter