import React, {useState , useContext} from "react"
import {
    Stack,
    Typography,
    Box
} from "@mui/material"
import BinocularsIcon from "../../public/binoculars-icon.svg?react"
import TargetIcon from "../../public/target-icon.svg?react"
import {context} from "../contextApi"
import { primaryColor, primaryColorLight, secondaryColor, secondaryColorLight } from "../theme"

const CoreQualities = ({title}) => {
    const [coreQualityHovered, setCoreQualityHovered] = useState()
    const [show, setShow] = useState(false)

    return (
        <Box 
                display="flex"
                justifyContent="center"
                gap={6}
                marginInline="100px"
                mb="100px"
            >
            <Stack 
                alignItems="center" 
                gap={1} 
                onMouseOver={() => {
                    setShow(true)
                    setCoreQualityHovered("VISION")
                }}
                onMouseLeave={() => setShow(false)}
                sx={{cursor: "pointer"}}
                >
                <BinocularsIcon/>
                {title === "MISSION" && <TargetIcon/>}
                <Typography variant="h6">VISION</Typography>
            </Stack>

            <Stack 
                position="relative"
                justifyContent="center"
                marginBlock="20px"
                paddingInline="20px"
                borderRadius="5px"
                overflow="hidden"

                sx={{
                    background: coreQualityHovered === "VISION" ? secondaryColorLight : primaryColorLight,
                    color: "white",
                    boxSizing: "border-box",
                    transform: show ? "scaleX(1)": "scaleX(0)",
                    transformOrigin: coreQualityHovered === "VISION" ? "left": "right",
                    transition: "transform 0.3s ease-in-out"
                }}
            >
                <Box
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    sx={{
                        background: `linear-gradient(to top, rgba(0, 0, 0 , 0.2), rgba(0, 0, 0 , 0))`
                    }}
                />
                <Typography variant="body1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi, maiores labore, architecto, fuga quisquam facere 
                </Typography>
            </Stack>
            <Stack 
                alignItems="center" 
                gap={1} 
                onMouseOver={() => {
                    setShow(true)
                    setCoreQualityHovered("MISSION")
                }}
                onMouseLeave={() => setShow(false)}
                sx={{cursor: "pointer"}}
                >
                <TargetIcon/>
                <Typography variant="h6">MISSION</Typography>
            </Stack>

        </Box>
    

    )
}

export default CoreQualities