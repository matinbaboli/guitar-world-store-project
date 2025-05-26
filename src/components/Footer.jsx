import React from "react"
import {Box, Container, List, ListItem, ListItemButton, ListItemText, TextField, Button, Stack, Typography} from "@mui/material" 
import LinkModified from "./LinkModified.jsx"
import { colors } from "../style/colors.js"
import LogoLight from "../../public/Logo-light.svg"
import FacebookIcon from "../../public/facebook-icon.svg?react"
import XIcon from "../../public/x-icon.svg?react"
import InstagramIcon from "../../public/instagram-icon.svg?react"
import TelegramIcon from "../../public/telegram-icon.svg?react"



const Footer = () => {    
    return (
    <Box>
        <Box color="white" sx={{
            position: "relative",
            background: colors.primary,
            isolation: "isolate",
            pb: "30px",
            display: "grid",
            gridTemplateColumns: {xs: "100%", md: "20% 30%"},
            justifyContent: "space-around",
            alignContent: "center"
            // paddingInline: "50px",
        }}>
            <Box sx={{
                position: "absolute",
                top: -70,
                // zIndex: -10,
                width: "100%",
                height: "70px",
                background: colors.primary,
                borderTopRightRadius: "9999px",
                borderTopLeftRadius: "9999px",
            }}/>
                    <Box  sx={{
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        zIndex: "-5",
                        background: `linear-gradient(to top, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0) )`,
                        opacity: 0.7,
                    }}
                    ></Box>
                    <Box display="flex" flexDirection="column" gap={{xs: "40px", md: "20px"}} alignItems={{xs: "center", md: "start"}}>
                        <Box component="img" src={"./footer-logo.svg"} width="180px"/>
                        <List>
                            {[{name: 'Home', path: "/home"}, {name: 'Catalog', path: "/catalog"},  {name: 'About Us', path: "/about-us"}, {name: 'Wishlist', path: "/wishlist"}].map((text) => (
                                <ListItem key={text.name} disablePadding >
                                    <ListItemButton sx={{
                                        display: "flex",
                                        justifyContent: {xs: "center", md: "start"},
                                    }}>
                                        <LinkModified to={text.path}>
                                            <ListItemText primary={text.name} align="center"/>
                                        </LinkModified>               
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box display="flex" flexDirection="column" gap="63px" mt={{xs: "50px", md: "0px"}}>
                        <Box 
                        display="flex" 
                        flexDirection={{xs: "column", md: "row"}} 
                        justifyContent="start" 
                        alignItems={{xs: "center", md: "start"}} 
                        gap={{xs: "30px", md:"80px"}}
                        >
                            <Typography variant="h5">
                                Follow our socials
                            </Typography>
                            <Box display="flex" gap="30px">
                                <LinkModified>
                                    <FacebookIcon/>
                                </LinkModified>
                                <LinkModified>
                                    <InstagramIcon style={{
                                        fill: "white"
                                    }}/>
                                </LinkModified>
                                <LinkModified>
                                    <XIcon/>
                                </LinkModified>
                                <LinkModified>
                                    <TelegramIcon style={{
                                        fill: "white"
                                    }}/>
                                </LinkModified>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems={{xs: "center", md: "start"}} paddingInline={{xs: "30px", md: "0px"}} textAlign={{xs: "center", md: "start"}}>
                            <Typography variant="h5" fontSize={{xs: "23px", md: "27px"}}>
                                Subscribe to our news letter
                            </Typography>
                            <Typography variant="h6" maxWidth="500px" mt={{xs: "10px", md: "0px"}} fontSize={{xs: "15px", md: "16px"}}>
                                Get the latest updates, special offers, and expert guitar insights delivered to your inbox.
                            </Typography>
                            <Stack direction={{xs:"column", md:"row"}} gap="20px" mt="20px" width="100%">
                                <TextField id="outlined-basic" label="Your Email" variant="filled" size="small"
                                sx={{
                                    background: "white",
                                    borderRadius: "5px",
                                    width: {xs: "100%",md:"300px"},
                                }}/>
                                <Button variant="contained" color="info">
                                    subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
        </Box>
        <Box sx={{
            backgroundColor: colors.textPrimary,
            paddingBlock: "15px",
            textAlign: "center"
        }}>
            <Typography variant="body1" color={colors.mainbackground}>
                © 2025 Guitar World. All rights reserved.
            </Typography>
        </Box>
    </Box>
    )
}

export default Footer