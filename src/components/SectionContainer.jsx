import React, { Children } from "react"
import { Container, Box } from "@mui/material"
import {smallNavHeight, bigNavHeight} from "./Navbar"


const SectionContainer = ({children, backgroundColor}) => {

    return <Box>
    <Box        
        display="flex"
        alignItems="center"
        sx={{
            position: "relative",
            isolation: "isolate",
            minHeight: "100vh",
            backgroundColor:  backgroundColor,
            overflow: "hidden"
        }}
    >
        <Container>
            {children}
        </Container>
    </Box>
    </Box>
}

export default SectionContainer