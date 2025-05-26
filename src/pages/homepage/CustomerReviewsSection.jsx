import { Box, Grid, lighten, Stack, Typography } from "@mui/material"
import SectionContainer from "../../components/SectionContainer"
import CustomerReview from "../../components/CustomerReviewCard"
import {colors} from "../../style/colors"
import ArrowIconButton from "../../components/ArrowIconButton"
import { useState, useEffect } from "react"
import { useMediaQueryStore } from "../../store/useMediaQueryStore"
import { MotionBox, MotionGrid } from "../../components/MotionComponents"

const customers = [
    {
        name: "Matin Baboli",
        date: "April 2025",
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: "images/team-members/1.jpg",
        color: colors.accent
    },
    {
        name: "Simon Minter",
        date: "March 2024",
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: "images/team-members/4.jpg",
        color: colors.primary
    },
    {
        name: "John Doe",
        date: "January 2024",
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: "images/team-members/2.jpg",
        color: colors.accent
    },
]


const CustomerReviewsSection = () => {
    const isTabletAndMobile = useMediaQueryStore(state => state.isTabletAndMobile)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleNextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev + 1) % customers.length)
    }

    const handlePrevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev - 1 + customers.length) % customers.length)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [currentSlide])

    return (
        <SectionContainer backgroundColor={colors.mainbackground}>
        <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            zIndex={-1}
            sx={{
            background: `linear-gradient(45deg, ${colors.secondary} 30%, ${lighten(colors.accent, 0.55)} , ${colors.secondary} 100%)`,
            opacity: 0.2,
            }}
            ></Box>
            <Typography textAlign={{xs: "center", md: "start"}} variant="h2" color={colors.textPrimary} mt="50px" mb="20px" >
                Customer Reviews
            </Typography>
            <Typography textAlign={{xs: "center", md: "start"}} variant="body1" color={colors.textPrimary} ml="20px">
                Here is a list of our previous happy customers.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="start" width="100%" mb={{xs:"140px", md:"0px"}}>
            {
                isTabletAndMobile ? 
                <Box display="flex" justifyContent="center" position="relative" width={{xs:"100%", sm: "450px"}} overflow="hidden">
                        <Box display="flex" justifyContent={{xs: "space-between", sm: "center"}} alignItems="center" gap={{sm: "300px"}} position="absolute" top="100px" left="0px" right="0px" zIndex={5}>
                            <ArrowIconButton color={colors.primary} type="previous" onClick={handlePrevSlide}/>
                            <ArrowIconButton color={colors.primary} type="next" onClick={handleNextSlide}/>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex',
                                transition: 'transform 0.5s ease-in-out',
                                transform: `translateX(-${currentSlide * 100}%)`,
                                width: '100%'
                            }}
                        >
                            {customers.map((customer, index) => (
                                <MotionBox 
                                    initial={{
                                        opacity: 0
                                        // x: index === 0 ? -200 : index === 2 ? 200 : 0
                                    }}
                                    animate={{
                                        // x: "0px"
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        delay: 0.3
                                    }}
                                    key={index}
                                    sx={{
                                        minWidth: '100%',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <CustomerReview customer={customer} color={customer.color}/>
                                </MotionBox>
                            ))}
                        </Box>
                    </Box>
                :
                <Grid container justifyContent="start" spacing={4} mb="180px">
                        {customers.map((customer, index) => {
                            return (
                                <MotionGrid item
                                initial={{
                                    x: index === 0 ? 350 : index === 2 ? -350 : 0,
                                    opacity: index === 1 ? 1 : 0
                                }}
                                whileInView={{
                                    x: "0px",
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.3
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.6                        }}
                                sm={4} 
                                key={index}
                                sx={{
                                    position: "relative",
                                    zIndex: index === 1 ? 1 : -1 
                                }}
                                >
                                    <CustomerReview customer={customer} color={customer.color}/>
                                </MotionGrid>
                            ) 
                        }) }
                    </Grid>
            }
            </Box>
    </SectionContainer>
    )
}

export default CustomerReviewsSection