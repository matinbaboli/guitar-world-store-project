import React from "react"
import {
    Box,
    MobileStepper,
    Button
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"

const ProductDetails = () => {
    return (
        <Box sx={{
            background: generalBackgroundColor
        }}>
            <Box 
                display="flex"
                flexDirection="column"
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                        backgroundColor: "gray",
                        backgroundImage: 'url(public/images/guitar-pic.jpg)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center"
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: `linear-gradient(to right, ${secondaryColorLight} -5%, rgba(0, 0, 0, 0) 10% 90%, ${secondaryColorLight} 105%)`
                        }}
                    />

                    
                </Box>
                <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={1}
                sx={{ 
                    width: "100%",
                    boxSizing: "border-box",
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
        </Box>
    )
}

export default ProductDetails 