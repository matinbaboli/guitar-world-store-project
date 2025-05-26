import React from "react"
import { 
    Box, 
    Typography, 
    Button, 
 } from "@mui/material"
import SectionContainer from "../../components/SectionContainer"
import CardSlider from "../../components/CardSlider"
import LinkModified from "../../components/LinkModified"
import { colors } from "../../style/colors"


const OnSaleSection = () => {
    return (
    <Box 
    sx={{
        boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.3), 0px 5px 10px rgba(0, 0, 0, 0.3)",
        position: "relative",
        zIndex: 1,
    }}>    
        <SectionContainer backgroundColor={colors.mainbackground}>
            <Box
                width="100%" 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginBlock="50px"
            >
                <Typography color={colors.textPrimary} variant="h2" sx={{alignSelf: {xs: "center", md:"start"}}}>Special Offers</Typography>
                <CardSlider dataType="sale"/>
                <Button onClick={() => setExtraFilter("SpecialOffers")} variant="contained" size="large" sx={{marginTop: "30px"}}>
                    <LinkModified to="/catalog">
                        Explore More Deals
                    </LinkModified>
                </Button>
            </Box>
        </SectionContainer>
    </Box>
    )
}

export default OnSaleSection