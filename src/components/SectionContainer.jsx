import React, { Children } from "react"
import { Container, Box } from "@mui/material"
import {smallNavHeight, bigNavHeight} from "./Navbar"
import {generalBackgroundColor} from "../theme"
import {context} from "../contextApi.jsx"


const SectionContainer = ({children, backgroundColor, hero}) => {
    const {windowWidth} = React.useContext(context)

    return <Box>
    <Box        
        display="flex"
        alignItems="center"
        sx={{
            position: "relative",
            isolation: "isolate",
            minHeight: hero? `calc(100vh - ${windowWidth > 900 ? bigNavHeight + "px": smallNavHeight + "px"})` : "100vh",
            backgroundColor:  backgroundColor,
            overflow: "hidden",

        }}
    >
        <Container>
            {children}
        </Container>
    </Box>
    </Box>
}

export default SectionContainer