import React, { useState } from "react"
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



const ProductDetails = ({windowWidth}) => {
    const [ratingValue, setRatingValue] = useState(2)
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
                    top: 0,
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
                            backgroundColor: "gray",
                            backgroundImage: 'url(public/images/guitar-pic.jpg)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            borderRadius: {md:"10px"},
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
                                background: `linear-gradient(to right, ${secondaryColorLight} -10%, rgba(0, 0, 0, 0) 10% 90%, ${secondaryColorLight} 110%)`
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
                    <InteractiveCounter roundCorners label="Amount:"/>
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
                    <Typography variant="h2" component="h1">Guitar</Typography>
                    <Typography variant="h4" component="h2" sx={{ color: primaryColor, letterSpacing: "3px"}}>$9.99</Typography>
                </Stack>
                <Stack direction="row" justifyContent={{xs: "space-between", md: "start"}} gap={{md: 2}} alignItems="center" width="100%" mt="20px" mb="40px">
                    <Rating
                        name="rating"
                        readOnly
                        value={ratingValue}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                    />
                    <Typography variant="h5" sx={{
                        color: "rgba(0, 0, 0, 0.6)"
                    }}>
                        10 reviews
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium assumenda aperiam officiis illo fugiat quod odio iure magnam corrupti.
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