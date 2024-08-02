import React, {useState, useEffect, useContext} from "react"
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
import {primaryColor, primaryColorLight, primaryColorVeryLight,  secondaryColor, secondaryColorLight, generalBackgroundColor} from "../theme"
import SectionContainer from "../components/SectionContainer"
import CardCustomized from "../components/Card"
import Value from "../components/Value"
import CardSlider from "../components/CardSlider"
import CustomerReview from "../components/CustomerReview"
import CoreQualitiesHomePageBigScreen from "../components/CoreQualitiesHomePageBigScreen"
import CoreQuality from "../components/coreQuality"
import LinkModified from "../components/LinkModified"
import {context} from "../contextApi"



import RightArrow from "../../public/right-arrow-icon.svg?react"
import LeftArrow from "../../public/left-arrow-icon.svg?react"
import QuestionIcon from "../../public/question-icon.svg?react"




let heroSectionSlides = [
    {
        backgroundGradientColor: primaryColor,
        title: "Acoustic Guitars",
        img: "images/Acoustic-guitar-representation.png",
        type: "Acoustic"
    },
    {
        backgroundGradientColor: secondaryColor,
        title: "Electric Guitars",
        img: "images/electric-guitarist.jpg",
        type: "Electric"
    }
]

const slideDuration = 2000
const slideDurationHalf = slideDuration / 2


const Homepage = ({windowWidth}) => {
    const [heroSliderIndex, setHeroSliderIndex] = useState(0)
    const {backgroundGradientColor, title, img, type} = heroSectionSlides[heroSliderIndex]
    const {setProductTypeFilter, setExtraFilter} = useContext(context)

    function handleIncrement(e) {

        const {currentTarget} = e

        currentTarget.setAttribute("disabled", "")
        setTimeout(() => {    
            currentTarget.removeAttribute("disabled")
        }, slideDuration) 
        nextSlide()
    }

    function nextSlide() {
        setTimeout(() => {
            if(heroSliderIndex === heroSectionSlides.length - 1) {
                setHeroSliderIndex(0)
                return;
            }
            setHeroSliderIndex(heroSliderIndex => heroSliderIndex + 1 )

        }, slideDurationHalf)
        animate()

    }


    function handleDecrement(e) {

        const {currentTarget} = e

        currentTarget.setAttribute("disabled", "")
        setTimeout(() => {    
            currentTarget.removeAttribute("disabled")
        }, slideDuration) 
        prevSlide()
    }

        function prevSlide() {
            setTimeout(() => {
                if (heroSliderIndex === 0) {
                    setHeroSliderIndex(heroSectionSlides.length - 1)
                    return;
                }
                setHeroSliderIndex(heroSliderIndex => heroSliderIndex - 1 )
            }, slideDurationHalf)
            animate()
        }

    function animate() {
        const heroBackgroundImage = document.querySelector("#hero-background-image")
        const heroBackgroundGradient = document.getElementById("hero-background-gradient")
        const heroMainImage = document.getElementById("hero-main-image")
        const heroTitle = document.getElementById("hero-title")

        const sliderItems = [heroBackgroundImage, heroBackgroundGradient, heroMainImage, heroTitle]

        const arrayFromNodeList = Array.from(sliderItems)

        arrayFromNodeList.forEach((item) => {
            if(item === heroBackgroundImage ||item ===  heroBackgroundGradient) {
                item.classList.add("fade-in-out-bg-image")
            }
            item.classList.add("fade-in-out")
        })
        setTimeout(() => {
            arrayFromNodeList.forEach((item) => {
                if(item === heroBackgroundImage ||item ===  heroBackgroundGradient) {
                    item.classList.remove("fade-in-out-bg-image")
                }
                item.classList.remove("fade-in-out")
            })
        }, slideDuration)

    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
            return () => clearInterval(interval)
    })

    
    
    return <>
    <SectionContainer hero windowWidth={windowWidth}>            
        <style>
            {`
                .fade-in-out {
                    animation: opacityChange ${slideDuration}ms ease-in-out;
                }
                .fade-in-out-bg-image {
                    animation: opacityChangeForBackgroundImage ${slideDuration}ms ease-in-out;
                }
                @keyframes opacityChange {
                    0% { 
                        opacity: 100%;
                    }
                    50% {
                        opacity: 0%;
                    }
                    100% { 
                        opacity: 100%;
                    }            
                }
                @keyframes opacityChangeForBackgroundImage {
                    0% { 
                        opacity: 50%;
                    }
                    50% {
                        opacity: 0%;
                    }
                    100% { 
                        opacity: 50%;
                    }            
                }
            `}
        </style>
        <Box
            id="hero-background-image"
            sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    zIndex: "-5",
                    opacity: 0.5,
                }}
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></Box>
        <Box  
        id="hero-background-gradient"
        sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "-5",
            background: `linear-gradient(to top, ${backgroundGradientColor} -50% ,rgba(0, 0, 0, 0.8) 90%)`,
            opacity: 0.6,
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
                    id="hero-main-image"
                    component="img"
                    sx={{width: {xs: "370px", md: "530px"},}}
                    alt="hero-image"
                    src={img}
                    borderRadius="20px"
                    boxShadow={`0px 1px 1px 1px ${secondaryColorLight}, 0px 4px 15px ${secondaryColorLight}`}
                    ></Box>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h1" color="white">Guitar World's</Typography>
                    <Typography id="hero-title" variant="h3" color="white">{title}</Typography>
                    <Stack 
                    direction="row"
                    justifyContent="center"
                    // alignItems="stretch"
                    spacing={3}
                    marginBlock="20px"
                    >
                        <IconButton 
                        onClick={handleDecrement}
                        sx={{
                            backgroundColor: primaryColor,
                            width: "60px",
                            height: "50px",
                            borderRadius: "22px",            
                            pr: "13px",
                        }}>
                            <LeftArrow/>
                        </IconButton>  
                        <LinkModified to="Catalog">
                            <Button onClick={() => setProductTypeFilter(type)} size="medium" variant="contained" color="secondary" 
                                sx={{
                                    height: "100%"
                                }}
                            >
                                shop now
                            </Button>                  
                        </LinkModified>
                        <IconButton
                        onClick={handleIncrement}
                        sx={{
                            backgroundColor: primaryColor,
                            width: "60px",
                            height: "50px",
                            borderRadius: "22px",
                            pl: "13px",
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
            src="images/Polygon3.png"
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
            src="colorfulpicks.svg"
            sx={{
                position: "absolute",
                zIndex: "-1",
                top: {xs:"80px", md:"0px"},
                left: "-30px",
                width: {xs: "120px", md: "165px"}
            }}
        ></Box>
        <Box
            width="100%" 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={5}
            marginBlock="50px"
        >
            <Typography align="center" color="white" marginBlock="10px" variant="h2">Special Offers</Typography>
            <CardSlider windowWidth={windowWidth} dataType="sale"/>
            <LinkModified to="Catalog">
                <Button onClick={() => setExtraFilter("SpecialOffers")} variant="outlined" size="large" color="secondary">
                    all offers
                </Button>
            </LinkModified>
        </Box>
    </SectionContainer>

    {/* <SectionContainer backgroundColor={generalBackgroundColor}>
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
        width="80%"
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
    </SectionContainer> */}


    <SectionContainer backgroundColor="#FDE9E4">
        <Stack direction="row"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        mt="50px">
            <Typography variant="h2">
                Who We Are
            </Typography>
            <QuestionIcon style={{maxWidth: "50px",}}/>
        </Stack>
        <Typography variant="body1" fontSize="1.1rem" letterSpacing="1px" lineHeight="35px" mt="50px" ml={{xs: 0, md:"100px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos corrupti, velit eligendi aspernatur temporibus aut, vel reprehenderit sint similique repellat natus molestiae commodi, sequi quaerat autem? Reprehenderit, vitae enim!
        </Typography>

        <Box 
            display="flex"
            justifyContent="end"
            position="relative"
            gap={{sm: 10,md:30}}
            mt={{ xs: "150px", md:"70px"}}
            mb="130px"
            pr={{xs: 10, sm: 0}}
            sx={{
                background: "white",
                isolation: "isolate",
                paddingBlock: "10px"
            }}
        >
            {
                windowWidth > 700 
                && 
                <Typography variant="h5" letterSpacing={3}>
                    WANT TO KNOW MORE?
                </Typography>
            }
            
            <LinkModified to={"About Us"}>
                <Button variant="contained">
                    learn more
                </Button>
            </LinkModified>
            <Box
                position="absolute"
                top={0}
                bottom={0}
                left={-1000}
                right={-1000}
                zIndex={-2}
                sx={{
                    background: "white",
                    borderBlock: `2px solid ${primaryColorVeryLight}`

                }}
            ></Box>
            <Box
                component="img"
                src="images/Rectangle45.png"
                position="absolute"
                top={-165}
                left={-250}
                width="380px"
            >
            </Box>
        </Box>
        {windowWidth > 900 
        ? 
            <CoreQualitiesHomePageBigScreen/>
        :
            <Stack alignItems="center" gap={3} mb={6}>
                <CoreQuality vision small/>
                <CoreQuality mission small/>
            </Stack>
        }
        <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={-5}
            sx={{
                background: `linear-gradient(to bottom, ${generalBackgroundColor} 50%, rgba(0, 0, 0, 0))`
            }}
        >

        </Box>
    </SectionContainer>
    <SectionContainer backgroundColor={primaryColor} rounded>
        <Box 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginBlock="100px"
            gap={5}
        >
            <Typography  color="white" mb="10px"  variant="h2">For Begginers</Typography>
            <CardSlider windowWidth={windowWidth} darkBackground dataType="begginerFriendly"/>
            <LinkModified to="Catalog">
                <Button onClick={() => setExtraFilter("ForBegginers")} variant="contained" size="large" color="secondary">
                    all suggestions
                </Button>
            </LinkModified>
        </Box>
            <Box  
                    component="img"
                    alt="polygon"
                    src="background-polygon.svg"
                    width="100%"
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "0px",

                    }}
            ></Box>
            <Box  
                    component="img"
                    alt="polygon"
                    src="background-polygon.svg"
                    width="100%"
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: "0px",
                        transform: "rotate(180deg)",
                    }}
            ></Box>
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
            <Typography align="center" variant="h2" marginBlock="50px">
                Customer Reviews
            </Typography>
            <Grid container justifyContent="start" spacing={4} mb="50px">
                <Grid item sm={6}>
                    <CustomerReview/>
                </Grid>
                <Grid item sm={6}>
                    <CustomerReview/>
                </Grid>
                <Grid item sm={6} md={4}>
                    <CustomerReview/>
                </Grid>
                <Grid item sm={6} md={4}>
                    <CustomerReview/>
                </Grid>
                <Grid item sm={6} md={4}>
                    <CustomerReview/>
                </Grid>
            </Grid>
    </SectionContainer>
</>
}

export default Homepage




