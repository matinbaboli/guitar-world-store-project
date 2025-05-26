import React, {useState, useRef} from "react"
import {  
    Box, 
    Typography, 
    Button, 
    Stack,
    lighten,
    duration,
 } from "@mui/material"
import { colors } from "../../style/colors"
import SectionContainer from "../../components/SectionContainer"
import LinkModified from "../../components/LinkModified"
import { useMediaQueryStore } from "../../store/useMediaQueryStore"
import { motion } from "motion/react"
import {
    MotionTypography,
    MotionBox,
    MotionStack
} from "../../components/MotionComponents"

let heroSectionSlides = [
    {
        img: "images/hero-img-1.jpg",
    },
    {
        img: "images/hero-img-2.jpg",
    },
    {
        img: "images/hero-img-3.jpg",
    }
]

const heroContentContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {        
        staggerChildren: 0.2, // Delay between each child
        delayChildren: 0.5
    },
  },
};

const heroContentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: {duration: 0.4} },
};


const HeroSection = () => {
    const [heroSliderIndex, setHeroSliderIndex] = useState(0)
    const {img} = heroSectionSlides[heroSliderIndex]
    const isMobile = useMediaQueryStore(state => state.isMobile)
    const triggered = useRef(false);

    
    function nextSlide() {
        if(heroSliderIndex === heroSectionSlides.length - 1) {
            setHeroSliderIndex(0)
            return;
        }
        setHeroSliderIndex(heroSliderIndex => heroSliderIndex + 1 )
    }

    return (
        <SectionContainer>            
        <Box  
        id="hero-background-gradient"
        sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "-5",
            background: `linear-gradient(to right, ${colors.secondary} 30%, ${lighten(colors.accent, 0.55)} , ${colors.secondary} 100%)`,
            opacity: 0.3,
        }}
        ></Box>
         <Stack
            direction={{xs: "column", md: "row-reverse"}}
            justifyContent="center"
            alignItems="center"
            pt={{xs: "100px", md: "0px"}}
            gap={{xs: "30px", md: "100px"}}
        >
                <motion.div
                initial={{
                    opacity: 0,
                    x: 50
                }} 
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    delay: 0.3,
                    ease: "easeInOut",                    
                    duration: 0.6,
                }}
                >
                    <Box position="relative" display="flex" justifyContent="center" alignItems="center">                
                        <Box
                            id="hero-image-frame"
                            component="img"
                            sx={{
                                width: {xs: "296px", md: "413px"}, 
                                height: {xs: "442px", md: "575px"}, 
                                overflow: "visible",
                                position: "absolute",
                                top: {xs: "-13px", md: "-20px"},
                            }}
                            alt="hero-image"
                            src={"images/hero-frame.png"}
                            borderRadius="9999px"
                            ></Box>
                        <motion.div
                        id="hero-main-image"
                        transition={{
                            repeat: Infinity,
                            ease: "easeInOut",
                            duration: 1.5,
                            delay: 4,
                            repeatDelay: 4
                        }}
                        animate={{
                            scale: [1, 0.95, 1],
                            opacity: [1, 0, 1]
                        }}
                        onUpdate={(latest) => {
                            if (latest.opacity <= 0.01 && !triggered.current) {
                                triggered.current = true;
                                nextSlide();
                            }
                            
                            if (latest.opacity >= 0.99) {
                                triggered.current = false;
                            }
                        }}
                        >
                            <Box
                            borderRadius="9999px"
                            boxShadow={`0px 1px 1px 1px ${colors.secondary}, 0px 4px 15px ${colors.secondary}`}
                            sx={{
                                width: {xs: "266px", md: "376px"}, 
                                height: {xs: "412px", md: "530px"},
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            ></Box>
                        </motion.div>
                    </Box>
                </motion.div>
                <MotionBox
                variants={heroContentContainerVariants}
                initial="hidden"
                animate="visible"
                display="flex"
                flexDirection="column"
                alignItems={{xs: "center", sm: "start"}}
                justifyContent="center"
                >
                    <MotionTypography variants={heroContentVariants} variant="h1" color={colors.textPrimary} sx={{
                        fontSize: {xs: "35px", sm: "45px", md: "90px"}
                    }}>
                        Find Your Perfect {" "}
                        {!isMobile && 
                            <span style={{
                                display: "inline-block",
                                color: lighten(colors.secondary, 0.45), 
                                textShadow: `
                                -1px -1px 0px ${colors.textPrimary},  
                                1px -1px 0 ${colors.textPrimary},
                                -1px  1px 0 ${colors.textPrimary},
                                1px  1px 0 ${colors.textPrimary}
                                `,
                            }}>
                                Sound
                            </span>
                        }
                    </MotionTypography>
                    {isMobile && 
                        <MotionTypography variants={heroContentVariants} variant="h1" color={colors.textPrimary} sx={{
                            fontSize: "35px",
                            letterSpacing: "3px",
                            color: lighten(colors.secondary, 0.45), 
                            textShadow: `
                            -1px -1px 0px ${colors.textPrimary},  
                            1px -1px 0 ${colors.textPrimary},
                            -1px  1px 0 ${colors.textPrimary},
                            1px  1px 0 ${colors.textPrimary}
                            `,
                            marginLeft: {xs: "10px", md: "30px"}

                        }}>
                            Sound
                        </MotionTypography>
                    }
                    <MotionTypography variants={heroContentVariants} variant="h5" color={colors.textPrimary} fontSize={isMobile && "18px"} textAlign={isMobile && "center"} sx={{
                        marginTop: "30px",
                        marginBottom: {xs: "20px", md:"60px"},
                        width: {xs: "280px", sm: "100%"}
                    }}>
                        Premium guitars, crafted for every player. Shop, play, and create.
                    </MotionTypography>
                    <MotionStack
                    variants={heroContentVariants} 
                    direction={{xs: "column-reverse", sm: "row"}}
                    justifyContent="start"
                    alignItems={{xs: "stretch", sm: "start"}}
                    gap={{xs: "20px", md: "30px"}}
                    mt="20px"
                    mb="70px"
                    >
                        <LinkModified to="#">
                            <Button size={isMobile ? "medium" : "large"} variant="outlined" 
                                sx={{
                                    fontSize: "20px",
                                    width: "100%"
                                }}
                            >
                                join us
                            </Button>                  
                        </LinkModified>
                        <LinkModified to="/catalog">
                            <Button size={isMobile ? "medium" : "large"} variant="contained" 
                                sx={{
                                    fontSize: "20px",
                                    width: "100%"
                                }}
                            >
                                shop now
                            </Button>                  
                        </LinkModified>
                    </MotionStack>
                </MotionBox>            
            </Stack>
    </SectionContainer>

    )
}

export default HeroSection