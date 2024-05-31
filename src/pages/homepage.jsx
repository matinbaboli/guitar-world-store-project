import React, {useState, useEffect} from "react"
import { 
    Container, 
    Box, 
    Typography, 
    Button, 
    IconButton, 
    Stack,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    MobileStepper,
    Grid,
    colors,
 } from "@mui/material"
import Navbar from "../components/Navbar"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight} from "../theme"
import SectionContainer from "../components/SectionContainer"
import CardCustomized from "../components/Card"
import Value from "../components/Value"
import CardSlider from "../components/CardSlider"
import CustomerReview from "../components/CustomerReview"

import RightArrow from "../../public/right-arrow-icon.svg?react"
import LeftArrow from "../../public/left-arrow-icon.svg?react"
import Diamond from "../../public/diamond-icon.svg?react"

const generalBackgroundColor = "#FAF6F4"
// add useContext and subtract the nav height dynamically




const Homepage = ({windowWidth}) => {
    return <>
    <Navbar windowWidth={windowWidth}/>
    <SectionContainer hero windowWidth={windowWidth}>            
        <Box  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    zIndex: "-5",
                    background: "url(../../public/images/dd.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: 0.5,
                }}
            ></Box>
            <Box  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    zIndex: "-5",
                    background: `linear-gradient(to top, ${primaryColor} -50% ,rgba(0, 0, 0, 0.8) 90%)`,
                    opacity: 0.7,
                }}
            ></Box>
            <Stack
                direction={{xs: "column", md: "row-reverse"}}
                justifyContent="center"
                alignItems="center"
                pt={{xs: "30px", md: "0px"}}
                spacing={4}
            >
                <Box
                    component="img"
                    sx={{width: {xs: "370px", md: "530px"},}}
                    alt="hero-image"
                    src={"public/images/Acoustic-guitar-representation.png"}
                    borderRadius="20px"
                    boxShadow={`0px 1px 1px 1px ${secondaryColorLight}, 0px 4px 15px ${secondaryColorLight}`}
                ></Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h1" color="white">Guitar World's</Typography>
                    <Typography variant="h3" color="white">Acoustic Guitars</Typography>
                    <Stack 
                    direction="row"
                    justifyContent="center"
                    spacing={3}
                    marginBlock="20px"
                    >
                        <IconButton sx={{
                            backgroundColor: primaryColor,
                            width: "50px",
                            height: "50px",
                            pr: "12px",
                        }}>
                            <LeftArrow/>
                        </IconButton>  
                        <Button size="medium" variant="contained" color="secondary">
                            shop now
                        </Button>                  
                        <IconButton sx={{
                            backgroundColor: primaryColor,
                            width: "50px",
                            height: "50px",
                            pl: "12px",
                        }}>
                            <RightArrow/>
                        </IconButton>  
                    </Stack>
                </Box>            
            </Stack>
    </SectionContainer>
    <SectionContainer backgroundColor={generalBackgroundColor}>
        <Box  
            component="img"
            alt="polygon"
            src="../../public/images/Polygon3.png"
            sx={{
                position: "absolute",
                zIndex: "-1",
                top: {xs:"-300px", md:"-200px", lg: "-50px"},
                right: {xs:"-300px", md:"-100px"},
            }}
        ></Box>
        <Box  
            component="img"
            alt="colorful-picks"
            src="../../public/colorfulpicks.svg"
            sx={{
                position: "absolute",
                zIndex: "-1",
                top: {xs:"80px", md:"0px"},
                left: "-30px",
                width: {xs: "120px", md: "165px"}
            }}
        ></Box>
        <Typography align="center" color="white" marginBlock="50px" variant="h2">Special Offers</Typography>
        <Box display="flex"
        justifyContent="center">
            <CardSlider windowWidth={windowWidth}/>
        </Box>


        <Box
            width="100%" 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            marginTop="10px"
            pb="10px"
        >
            <Button variant="outlined" size="large" color="secondary">
                all offers
            </Button>
        </Box>
    </SectionContainer>

    <SectionContainer backgroundColor={generalBackgroundColor}>
        <Box 
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        sx={{
            background: `linear-gradient(to right, ${primaryColorLight} -10%, rgba(0, 0, 0, 0) 3% 97%, ${primaryColorLight} 120%)`
        }}
        >

        </Box>
        <Stack direction="row"
        alignItems="center"
        gap="30px">
            <Diamond fill={primaryColor} style={{width: "80px",  }}/>
            <Typography variant="h2">
                Our Values
            </Typography>
        </Stack>
        <Grid
        container
        direction="row"
        rowSpacing={3}
        columnSpacing={8}
        justifyContent="center"
        alignContent="center"
        marginBlock="20px">
            <Grid item>
                <Value />
            </Grid>
            <Grid item>
                <Value filled/>
            </Grid>
            {windowWidth > 900 ?
            <Grid item>
                <Value filled/>
            </Grid>            
            :
            <Grid item>
                <Value />
            </Grid>
            }
            {windowWidth > 900 ?
            <Grid item>
                <Value />
            </Grid>            
            :
            <Grid item>
                <Value filled/>
            </Grid>
            }
            <Grid item>
                <Value />
            </Grid>
            <Grid item>
                <Value filled/>
            </Grid>
        </Grid>
    </SectionContainer>


    <SectionContainer backgroundColor={primaryColor}>
            <Box  sx={{
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                zIndex: "-5",
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0) )`,
                opacity: 0.7,
                }}
            ></Box>

        <Typography align="center" color="white" marginBlock="50px" variant="h2">For Begginers</Typography>


        <Box display="flex"
        justifyContent="center">
            <CardSlider windowWidth={windowWidth} darkBackground/>

        </Box>

        <Box
            width="100%" 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            marginTop="20px"
            pb="10px"
        >

            <Button variant="contained" size="large" color="secondary">
                all suggestions
            </Button>
            <Box  
            component="img"
            alt="polygon"
            src="../../public/images/Polygon 2.png"
            width="70%"
            ></Box>
        </Box>
    </SectionContainer>

    <SectionContainer backgroundColor={generalBackgroundColor}>
        <Box 
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            sx={{
                background: `linear-gradient(to right, ${primaryColorLight} -10%, rgba(0, 0, 0, 0) 3% 97%, ${primaryColorLight} 120%)`
            }}
            ></Box>
            <Typography variant="h2">
                Customer Reviews
            </Typography>

            <CustomerReview/>

    </SectionContainer>
</>
}

export default Homepage




// add a faded black guitar to the background of the for begginers section 