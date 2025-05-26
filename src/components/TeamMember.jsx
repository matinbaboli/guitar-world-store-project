import { Box, IconButton, lighten, Typography } from "@mui/material"
import { colors } from "../style/colors"
import InstagramIcon from "../../public/instagram-icon.svg?react"
import TelegramIcon from "../../public/telegram-icon.svg?react"
import { MotionBox, MotionIconButton, MotionTypography } from "./MotionComponents"
import { hover, motion } from "framer-motion"

const MotionInstagramIcon = motion(InstagramIcon)


const TeamMember = ({data}) => {
    const {name, role, isPrimary, img} = data
    const colorBasedOnType = isPrimary ? colors.primary : colors.accent

    return (
        <MotionBox whileHover="hover" display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" sx={{
            border: `1px solid ${colorBasedOnType}`,
            borderBottom: `5px solid ${colorBasedOnType}`,
            borderRadius: "16px",
            width: "230px",
            isolation: "isolate"
            // paddingInline: "",
            
        }}>
            <MotionBox
            variants={{
                hover:{
                    height: "100%",
                    width: "100%"
                }
            }}
            
            sx={{
                position: "absolute",
                top: 0,
                zIndex: -1,
                width: "0%",
                height: "0%",
                background: lighten(colorBasedOnType, 0.25) ,
                borderRadius: "12px",
            }}
            />
            <Box
            sx={{
                position: "absolute",
                top: -60,
                isolation: "isolate",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: -2,
                    right: -4,
                    zIndex: -1,
                    background: colorBasedOnType,
                    width: "169px",
                    height: "169px",
                    borderRadius: "9999px",
                }
            }}>
                <MotionBox
                variants={{
                    hover: {
                        scale: 1.05,
                    }
                }}
                transition={{
                    duration: 0.3,
                }}

                component="img"
                src={img}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "164px",
                    height: "164px",
                    borderRadius: "9999px",                    
                }}/>
            </Box>
            <Box textAlign="center" mt="125px">
                <MotionTypography
                variants={{
                    hover: {
                        color: colors.mainbackground
                    }
                }}  
                color={colorBasedOnType} 
                fontSize="28px"
                mb="5px">
                    {name}
                </MotionTypography>
                <MotionTypography
                variants={{
                    hover: {
                        color: colors.mainbackground
                    }
                }}  
                color={colorBasedOnType} 
                fontSize="14px"
                >
                    {role}
                </MotionTypography>
            </Box>

            <Box display="flex" justifyContent="center" gap="20px" mt="30px" mb="50px">
                <MotionIconButton 
                    initial={{
                        color: colorBasedOnType
                    }}
                    variants={{
                        hover: {
                            color: colors.mainbackground
                        }
                    }} 
                    sx={{
                        width: "50px",
                        height: "50px"
                    }}
                >
                    <InstagramIcon/>
                </MotionIconButton>
                <MotionIconButton 
                    initial={{
                        color: colorBasedOnType
                    }}
                    variants={{
                        hover: {
                            color: colors.mainbackground
                        }
                    }} 
                    sx={{
                        width: "50px",
                        height: "50px"
                    }}
                >

                    <TelegramIcon/>
                </MotionIconButton>
            </Box>
        </MotionBox>
    )
}

export default TeamMember