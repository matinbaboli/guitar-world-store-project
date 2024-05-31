import React, { Children } from "react"
import { Container, Box } from "@mui/material"
import {smallNavHeight, bigNavHeight} from "./Navbar"


const SectionContainer = ({windowWidth, children, backgroundColor, hero}) => {
    return <>
    <Box        
        display="flex"
        alignItems="center"
        sx={{
            position: "relative",
            isolation: "isolate",
            minHeight: hero? `calc(100vh - ${windowWidth > 900 ? bigNavHeight: smallNavHeight})` : "100vh",
            backgroundColor:  backgroundColor,
            overflow: "hidden",

        }}
    >
        <Container>
            {children}
        </Container>
    </Box>
    </>
}

export default SectionContainer