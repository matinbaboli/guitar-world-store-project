import React from "react"
import {
    Box,
    Typography,
    Stack,

     } from "@mui/material"
import {primaryColor, primaryColorLight, primaryColorVeryLight,  secondaryColor, secondaryColorLight, generalBackgroundColor, secondaryColorVeryLight} from "../theme"
import Value from "../components/Value"


import QuestionIcon from "../../public/question-icon.svg?react"
import BinocularsIcon from "../../public/binoculars-icon.svg?react"
import TargetIcon from "../../public/target-icon.svg?react"



const AboutUs = () => {
    return (
        <Box
            display="flex" 
            flexDirection="column" 
            alignItems="center"
            // justifyContent="center"
            gap={{xs: 5, md: 10}}
            position="relative"
            boxSizing="border-box"
            overflow="hidden"

            sx={{
                background: "#FDE9E4",
                pb: "20px",
                paddingInline: {md: "50px",lg: "200px"}
            }}
        >
            <Stack direction="row"
            alignItems="center"
            justifyContent={{xs: "center", md:"start"}}
            gap="20px"
            mt="50px"
            width="100%"
            >
                <Typography variant="h2" component="h1" color={primaryColor}>
                    Who We Are
                </Typography>
                <QuestionIcon style={{maxWidth: "50px",}}/>
            </Stack>

            <Typography paddingInline={{xs: "20px", md: "0"}} lineHeight="30px" mr={{md: "300px",lg: "160px"}} fontSize="1.2rem">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, ipsa natus maxime expedita molestias perferendis doloribus saepe corrupti sapiente ex accusantium similique, vero fugit eos ducimus numquam neque in illo.

            </Typography>
            <Stack alignItems="center" width="100%">
                <Box
                    component="img"
                    src="../../public/images/staff.png"
                    alt="staff"
                    minWidth="400px"
                    width="140%"
                    maxWidth="600px"
                    sx={{
                        position: { md: "absolute"},
                        right: {md: "-180px", lg: "-150px"},
                        transform: {md: "translateY(-280px)"}
                    }}

                    />

                <Box 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width={{xs: "100%",md:"120%"}}
                    mr={{md: "200px"}}
                    mb={{md: "100px"}}
                    >
                    <BinocularsIcon style={{transform: "translateY(1px)"}}/>
                    <Stack 
                        alignItems="center" 
                        color="white"
                        padding="15px"
                        width="100%" 
                        sx={{
                            background: `linear-gradient( to bottom, ${secondaryColor} ,#A38FF0 150%)`
                        }}
                        >
                        <Typography variant="h6">VISION</Typography>
                        <Typography variant="body1" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iure.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Typography paddingInline={{xs: "20px", md: "0"}} lineHeight="30px" ml={{md: "300px",lg: "250px"}} fontSize="1.2rem">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, ipsa natus maxime expedita molestias perferendis doloribus saepe corrupti sapiente ex accusantium similique, vero fugit eos ducimus numquam neque in illo.
            </Typography>
            <Stack 
                // direction="row"
                alignItems="center" 
                width="100%" 
            >
                <Box
                    component="img"
                    src="../../public/images/our-store.png"
                    alt="staff"
                    minWidth="400px"
                    width="140%"
                    maxWidth="600px"
                    sx={{
                        position: {md: "absolute"},
                        left: {md: "-180px", lg: "-150px"},
                        transform: {md: "translateY(-280px)"}
                    }}
                />

                <Box 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width={{xs: "100%",md:"120%"}}
                    ml={{md: "200px"}}
                    >
                    <TargetIcon style={{transform: "translateY(1px)"}}/>
                    <Stack 
                        alignItems="center" 
                        color="white"
                        padding="15px"
                         width="100%"
                        sx={{
                            background: `linear-gradient( to bottom, ${primaryColor} -5% , #A38FF0 280%)`
                        }}
                        >
                        <Typography variant="h6">MISSION</Typography>
                        <Typography variant="body1" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iure.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Box>
                <Typography align="center" variant="h2" color={primaryColor}>
                        Our Values
                </Typography>
                <Stack direction="row" justifyContent="center" gap={{xs: 2, lg: 5}} marginInline="auto" flexWrap="wrap" width={{xs: "90%", sm: "500px" , lg: "600px"}} mb="50px" mt="50px">
                    <Value filled/>
                    <Value/>
                    <Value filled/>
                    <Value/>
                    <Value filled/>
                    <Value/>
                </Stack>
            </Box>

        </Box>
    )
}

export default AboutUs