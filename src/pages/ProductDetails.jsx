import React, { useState, useContext, useEffect, useRef } from "react"
import {
    Box,
    MobileStepper,
    Button,
    Typography,
    Stack,
    Rating,
    Divider,
} from "@mui/material"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import InteractiveCounter from "../components/InteractiveCounter"
import Comment from "../components/Comment"
import {smallNavHeight, bigNavHeight} from "../components/Navbar"
import {context} from "../contextApi"
import data from "../data.json"

let initialTargetItem = {
    name: "Guitar",
    price: 100,
    type: "Electric",
    brand: "Fender",
    image: "../public/images/guitars/1.jpg",
    description: "The Fender American Professional II Stratocaster offers a mix of classic design and modern enhancements. Known for its bright, clear tones and exceptional playability, this guitar features a deep 'C' neck profile, V-Mod II pickups for more articulation, and a sculpted neck heel for easier access to higher frets. It's a versatile instrument suitable for various genres, from rock to blues.",
    rating: 4.2
}


const ProductDetails = ({windowWidth, }) => {
    const [ratingValue, setRatingValue] = useState(2)
    const [targetItemFromData, setTargetItemFromData] = useState(initialTargetItem)
    const {storedProductId} = useContext(context)
    const {name, price, image, description, rating} = targetItemFromData
        

    useEffect(() => {
        let myItem = data.filter((item) => item.id === (storedProductId || Number(localStorage.getItem("productId"))))
        setTargetItemFromData(myItem[0])
    },[])
    

    return (
        <Box 
            display="flex" 
            flexDirection={{xs:"column", md: "row"}} 
            alignItems={{xs: "center", md: "start"}}
            gap={{xs: 0, md: 10}}
            boxSizing="border-box"

            sx={{
                background: generalBackgroundColor,
                pb: "20px",
                paddingInline: {md: "50px",lg: "200px"}
            }}
        >
            <Box 
                display="flex"
                flexDirection="column"
                width="100%"
                sx={{
                    position: {md: "sticky"},
                    top: "50px",
                    height: "100%",
                    paddingBlock: {md: "20px"},

                    // height: `calc(100vh - ${windowWidth > 900 ? bigNavHeight: smallNavHeight})`,
                }}
            >
                <Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: {xs:"400px", md: "60vh"},
                            mb: "20px",
                            backgroundColor: "white",
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            borderRadius: {md:"10px"},
                            boxShadow: "0px 5px 20px 1px rgba(0, 0, 0, 0.2)",
                            overflow: "hidden"
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: `linear-gradient(to right, ${secondaryColorLight} -20%, rgba(0, 0, 0, 0) 10% 90%, ${secondaryColorLight} 120%)`
                            }}
                        />
                    </Box>
                    <MobileStepper
                    variant="dots"
                    steps={6}
                    position="static"
                    activeStep={1}
                    sx={{ 
                        width: {xs: "100%", md: "70%"},
                        boxSizing: "border-box",
                        background: "none",
                        marginInline: "auto",
                        ["& .MuiMobileStepper-dotActive"]: {background: secondaryColor}
                    }}
                    nextButton={
                        <Button 
                        size="small" 
                        color="secondary"
                        // onClick={handleNext} 
                        // disabled={activeStep === 5}
                        >
                        Next
                        </Button>
                    }
                    backButton={
                        <Button 
                        size="small" 
                        color="secondary"
                        // onClick={handleBack} 
                        // disabled={activeStep === 0}
                        >
                        Back
                        </Button>
                    }
                    />
                </Box>
                { windowWidth > 900 &&
                <Stack direction="row" justifyContent="center" gap={2} mt="20px">
                    <InteractiveCounter roundCorners label="Quantity:"/>
                    <Button variant="contained">
                        add to cart
                    </Button>
                </Stack>
                }

            </Box>
            <Box   
                display="flex"
                flexDirection="column"
                alignItems={{xs: "center",md:"start"}}
                justifyContent="center"
                mt="50px"
                width="100%"    
                paddingInline="30px"
                boxSizing="border-box"

            >
                <Stack direction={{xs: "row", md: "column"}} justifyContent="space-between" alignItems={{xs:"center", md: "start"}} 
                gap={{md: 3}}
                width="100%"
                >
                    <Typography variant="h2" component="h1">
                        {name}
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: primaryColor, letterSpacing: "3px"}}>
                        ${price}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={{xs: "space-between", md: "start"}} gap={{md: 2}} alignItems="center" width="100%" mt="20px" mb="40px">
                    <Rating
                        name="rating"
                        readOnly
                        value={rating}
                        precision={0.1}
                        // onChange={(event, newValue) => {
                        //     setRatingValue(newValue);
                        // }}
                    />
                    <Typography variant="h6" sx={{
                        color: "rgba(0, 0, 0, 0.6)"
                    }}>
                        {`(${rating})  `}
                        from 10 reviews
                    </Typography>
                </Stack>

                {windowWidth > 900 && 
                    <Divider variant="fullWidth" sx={{
                        background: "rgba(0, 0, 0, 0.2)",
                        width: "100%",
                        height: "1px",
                        mb: "40px"
                    }}/>
                } 
                <Box>
                    <Typography variant="h4" component="h2" mb="30px">
                        Description
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </Box>   

                { windowWidth < 900 &&
                <Stack alignItems="center" gap={2} mt="50px">
                    <InteractiveCounter roundCorners label="Amount:"/>
                    <Button variant="contained">
                        add to cart
                    </Button>
                </Stack>
                }

                <Box 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{xs: "center",md:"start"}}
                    // width="100%"
                    mt="80px"
                >
                    <Typography variant="h4" component="h2" mb="50px">
                        Comments
                    </Typography>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductDetails 