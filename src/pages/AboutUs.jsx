import React from "react"
import {
    Box,
    Typography,
    Stack,
} from "@mui/material"
import CoreQuality from "../components/coreQuality"
import { colors } from "../style/colors"
import Navbar from "../components/Navbar"
import TeamIcon from "../../public/team-icon.svg?react"
import TeamMember from "../components/TeamMember"
import { MotionBox, MotionTypography } from "../components/MotionComponents"


const members = [
    {
        name: "Alex Carter",
        role: "Lead Guitar Specialist",
        img: "images/team-members/1.jpg",
        isPrimary: true 
    },
    {
        name: "Jordan Silva",
        role: "Acoustic Guitar Curator",
        img: "images/team-members/2.jpg",
        isPrimary: false 
    },
    {
        name: "Casey Nguyen",
        role: "Customer Experience Manager",
        img: "images/team-members/3.jpg",
        isPrimary: true 
    },
    {
        name: "Drew Patel",
        role: "Website & Content Manager",
        img: "images/team-members/4.jpg",
        isPrimary: false
    },
]

const AboutUs = () => {
    return (
        <>
        <Navbar/>
        <Navbar fixed/>
        <Box
            display="flex" 
            flexDirection="column" 
            alignItems="center"
            gap={{xs: 5, md: 10}}
            position="relative"
            boxSizing="border-box"
            overflow="hidden"

            sx={{
                background: `linear-gradient(170deg, ${colors.mainbackground}, #E7DFD7)`,
                pb: "20px",
                paddingInline: {md: "50px",lg: "100px", xl: "130px"}
            }}
        >
            <Stack
            alignItems={{xs: "center", md:"start"}}
            justifyContent="center"
            gap="20px"
            mt="50px"
            width="100%"
            >
                <Typography fontSize="50px" component="h1" color={colors.primary}>
                    Who We Are
                </Typography>
                <MotionTypography
                initial={{
                    x: -50,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeInOut"
                }}
                paddingInline={{xs: "20px", md: "0"}}
                lineHeight="30px"
                maxWidth={{md:"630px"}} 
                alignSelf={{md:"start"}} 
                color={colors.textSecondary} 
                fontSize="1.2rem">
                    At Guitar World, we believe every guitarist deserves an instrument that inspires them. Whether you're a beginner or a seasoned musician, our carefully curated collection ensures you find the perfect match for your sound and style.
                </MotionTypography>
            </Stack>

            <Stack position="relative" alignItems="center" width="100%">
                <MotionBox
                    whileHover={{
                        rotate: -10
                    }}
                    transition={{
                        duration: 0.8,
                        type: "spring", 
                        bounce: 0.5
                    }}
                    component="img"
                    src="images/staff.png"
                    alt="staff"
                    minWidth="400px"
                    width="140%"
                    maxWidth="700px"
                    sx={{
                        position: { md: "absolute"},
                        top: -320,
                        right: { md: "-450px", lg: "-270px"},
                        // transform: {md: "translateY(-280px)"}
                    }}
                    />

                    <CoreQuality vision/>
            </Stack>
            <MotionTypography
            initial={{
                x: -50,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeInOut"
            }}
 
            paddingInline={{xs: "20px", md: "0"}} 
            lineHeight="30px" 
            maxWidth="700px" 
            alignSelf={{md:"end"}} 
            color={colors.textSecondary} 
            fontSize="1.2rem">
                With a passion for craftsmanship and music, we bring you high-quality guitars from the finest brands and luthiers. Our mission is to make premium guitars accessible to all, combining expert guidance with a seamless shopping experience. More than just a store, we’re a community—built by musicians, for musicians.
            </MotionTypography>
            <Stack 
                // direction="row"
                alignItems="center" 
                width="100%" 
                position="relative"
            >
                <MotionBox
                    whileHover={{
                        rotate: 10
                    }}
                    transition={{
                        duration: 0.8,
                        type: "spring", 
                        bounce: 0.5
                    }}
                    component="img"
                    src="images/our-store.png"
                    alt="staff"
                    minWidth="400px"
                    width="140%"
                    maxWidth="700px"
                    sx={{
                        position: {md: "absolute"},
                        top: -320,
                        left: { md: "-450px", lg: "-270px"},
                        // transform: {md: "translateY(-280px)"}
                    }}
                />
                <CoreQuality mission/>
            </Stack>
            <Box width="100%">
                <Box display="flex" justifyContent="center" alignItems="center" gap="25px">
                    <Typography align="center" fontSize="35px" color={colors.accent}>
                        Meet Our Team
                    </Typography>
                    <TeamIcon/>
                </Box>
                <Box 
                display="grid" 
                gridTemplateColumns={
                    {
                        xs: "repeat(1, 230px)", 
                        sm: "repeat(2, 230px)", 
                        lg: "repeat(4, 230px)"
                    }
                } 
                rowGap="80px" 
                columnGap="47px"
                justifyContent="center"
                alignContent="center" 
                marginInline="auto" 
                width="100%" 
                // width={{xs: "90%", md: "70%",lg: "100%"}} 
                mb="130px" 
                mt="100px" 
                pb="30px" 
                sx={{
                    background: `linear-gradient(to top, rgba(166, 124, 82, 0), rgba(166, 124, 82, 0.15), rgba(166, 124, 82, 0))`,
                    borderRadius: "16px",
                    boxShadow: "5px 0px 5px -4px rgba(0, 0, 0, 0.2), -5px 0px 5px -4px rgba(0, 0, 0, 0.2)"
                }}>
                    {members.map(member => {
                        return <TeamMember data={member}/> 
                    })}
                {/* <Box direction="row" justifyContent="center" gap={{xs: 2, lg: 5}} marginInline="auto" width={{xs: "90%", sm: "500px" , lg: "600px"}} mb="50px" mt="50px"> */}
                </Box>
            </Box>

        </Box>
        </>
    )
}

export default AboutUs