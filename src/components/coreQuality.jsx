import React from "react"
import {
    Box,
    Stack,
    Typography
} from "@mui/material"
import BinocularsIcon from "../../public/binoculars-icon.svg?react"
import TargetIcon from "../../public/target-icon.svg?react"
import { colors } from "../style/colors"

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
                background: `linear-gradient( to bottom, ${(vision && colors.primary) || (mission && colors.accent)} , ${(vision && "rgba(85, 101, 119, 0.6)") || (mission && "rgba(166, 124, 82, 0.6)")})`
            }}
            >
                <Typography variant="h5" letterSpacing="2px" mb="5px">{(vision && "VISION") || (mission && "MISSION")}</Typography>
                <Typography variant="body1" width={{md: "500px", lg: "680px"}} maxWidth="770px" textAlign="center" >
                    To be the go-to destination for guitar enthusiasts, fostering a world where every musician has the perfect instrument to express their artistry.
                </Typography>
            </Stack>
        </Box>

    )
}

export default CoreQuality