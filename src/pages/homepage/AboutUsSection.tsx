import React from "react"
import { 
    Box, 
    Typography, 
    Button, 
    Stack,
    lighten,
} from "@mui/material"
import SectionContainer from "../../components/SectionContainer"
import LinkModified from "../../components/LinkModified"
import { colors } from "../../style/colors"
import { useMediaQueryStore } from "../../store/useMediaQueryStore"
import { motion } from "motion/react"
import { MotionBox } from "../../components/MotionComponents"

const AboutUsSection = () => {
    const isTabletAndMobile = useMediaQueryStore(state => state.isTabletAndMobile)
    
    return (
    <SectionContainer backgroundColor="none">
        <Box  
        id="hero-background-gradient"
        sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "-1",
            background: `linear-gradient(to bottom, ${colors.secondary} 30%, ${lighten(colors.accent, 0.55)} , ${colors.secondary} 100%)`,
            opacity: 0.2,
        }}
        />    
        <Stack justifyContent="start">        
            <Typography variant="h2" color={colors.textPrimary} textAlign={isTabletAndMobile ? "center" : "start"} sx={{mt: "50px"}}>
                Who We Are
            </Typography>
            <Typography variant="body1" color={colors.textPrimary} fontSize="1.1rem" letterSpacing="1px" lineHeight="35px" mt="50px" ml={{xs: 0, md:"200px"}}>
                At Guitar World, we believe every guitarist deserves an instrument that inspires them. Whether you're a beginner or a seasoned musician, our carefully curated collection ensures you find the perfect match for your sound and style.            
            </Typography>

            <MotionBox 
            position="relative"
            display="flex"
            justifyContent="end"
            alignItems="center"
            gap={{sm: 10, md: 20}}
            mt={{ xs: "150px", md:"70px"}}
            mb="100px"
            pr={{xs: 0, sm: 10}}
            paddingBlock="20px"
            sx={{
                background: "white",
                isolation: "isolate",
                height: "40px"
            }}>
                {
                    !isTabletAndMobile 
                    && 
                    <Typography variant="h5" color={colors.textPrimary} letterSpacing={1}>
                        WANT TO KNOW MORE?
                    </Typography>
                }
                
                <LinkModified to={"/about-us"}>
                    <Button variant="contained" color="info">
                        learn more
                    </Button>
                </LinkModified>
                <MotionBox
                    initial={{
                        right: 0,
                        opacity: 0
                    }}
                    animate={{
                        right: -1000,                        
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.01,
                    }}

                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    zIndex={-2}
                    sx={{
                        background: "white",
                        borderBlock: `2px solid ${colors.accent}`
                    }}
                ></MotionBox>
                <MotionBox 
                whileHover={{
                    rotate: 10
                }}
                transition={{
                    duration: 0.8,
                    type: "spring", 
                    bounce: 0.5
                }}
                position="absolute"
                top={-220}
                left={{xs: -350, sm: -320}}
                >
                    <Box                    
                        component="img"
                        src="images/aboutus-section-picture.png"
                        width="530px"
                        >
                    </Box>
                </MotionBox>
            </MotionBox>
            <Box ml="20%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb="73px">
                <Typography variant="h3" color={colors.primary} textTransform="uppercase" fontStyle="italic" marginBlock="15px" letterSpacing={-2}>
                    Handpicked. Expertly crafted. Made to inspire
                </Typography>    
                {isTabletAndMobile &&
                    <Box component="img" src="line-separation.svg" sx={{transform: "rotate(180deg)"}}/>
                }
                {
                    !isTabletAndMobile &&
                    <>
                        <Box component="img" src="line-separation.svg"/>
                        <Box position="relative" width="fit-content" sx={{border: "1.5px solid rgba(0, 0, 0, 0.9)", borderRadius: "9999px"}}>
                            <Box p="11px 16px" height="120px">
                                <Box
                                    component="img"
                                    src="images/row-of-guitars.png"
                                    height="120px"
                                    />
                            </Box>
                            <Box
                            component="img"
                            src="guitar-pics.svg"
                            position="absolute"
                            top={-5}
                            right={-35}
                            height="155px"
                            />
                        </Box>
                    </>
                }

            </Box>
        </Stack>
    </SectionContainer>

    )
}

export default AboutUsSection