import React from "react"
import { Box, Typography } from "@mui/material"
import StartQuote from "../../public/start-quote-icon.svg?react"
import EndQuote from "../../public/end-quote-icon.svg?react"
import { colors } from "../style/colors"

const CustomerReviewCard = ({customer, color}) => {


    return <Box sx={{
        position:"relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: {md:"20px"},
        // minHeight: "150px",
    }}>
        <Box sx={{
            position: "relative",
            zIndex: 2,
            border: `2px solid ${color}`,
            borderRadius: "9999px",
            p: "7px 9px",
            transform: "translateY(35px)"
        }}>
            <Box
            sx={{
                backgroundImage: `url(${customer.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "9999px",
                width: {xs: "160px", md: "180px"},
                height: {xs: "160px", md: "180px"},
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)"
            }}
            />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" sx={{
            border: `1px solid ${color}`,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            overflow: "hidden",
            width: {xs:"99%", md: "300px", lg: "352px"},
            backgroundColor: colors.mainbackground
        }}>
            <Box sx={{
                position: "relative",
                zIndex: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                backgroundColor: color,
                width: "100%",
                height: "85px",
                textAlign: "center",
                pb: "15px",
                overflow: "hidden"
            }}>
                <Box
                    component="img"
                    src="images/faded-triangle-1.png"
                    position="absolute"
                    top={0}
                    left={-60}
                />
                <Box
                    component="img"
                    src="images/faded-triangle-2.png"
                    position="absolute"
                    top={-22}
                    right={-50}
                />
                <Typography variant="h5" color={colors.mainbackground}>
                    {customer.name}
                </Typography>
                <Typography variant="body1" color={colors.mainbackground}>
                    {customer.date}
                </Typography>
            </Box>
            <Box sx={{
                width: "172px",
                height: "2px",
                backgroundColor: color,
                mt: "16px"
            }}/>
            <Typography variant="body1" sx={{opacity: "90%", mt: "24px", mb: "40px", marginInline: "27px", lineHeight: "30px", height: "200px"}}>
                {customer.review}
            </Typography>
        </Box>
    </Box>
}

export default CustomerReviewCard

