import React from "react"
import {
    Box,
    Stack,
    Typography
} from "@mui/material"
import BinocularsIcon from "../../public/binoculars-icon.svg?react"
import TargetIcon from "../../public/target-icon.svg?react"
import {primaryColor, primaryColorLight, primaryColorVeryLight,  secondaryColor, secondaryColorLight, generalBackgroundColor} from "../theme"

const CoreQuality = ({vision, mission, small}) => {
    return (
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{xs: small ? "60%":"100%",md:"120%"}}
        mr={{md: (vision && "200px") || (mission && "-200px")}}
        mb={{md: "100px"}}
        >   
            {vision && <BinocularsIcon style={{transform: "translateY(1px)"}}/>}
            {mission && <TargetIcon style={{transform: "translateY(1px)"}}/>}
            <Stack 
            alignItems="center" 
            color="white"
            padding="15px"
            width="100%" 
            sx={{
                background: `linear-gradient( to bottom, ${(vision && secondaryColor) || (mission && primaryColor)} -5%,#A38FF0 ${(vision && 150) || (mission && 280)}%)`
            }}
            >
                <Typography variant="h6">{(vision && "VISION") || (mission && "MISSION")}</Typography>
                <Typography variant="body1" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iure.
                </Typography>
            </Stack>
        </Box>

    )
}

export default CoreQuality