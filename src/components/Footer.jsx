import React from "react"
import {Box, Container, List, ListItem, ListItemButton, ListItemText, TextField, Button, Stack, Typography} from "@mui/material" 
import { secondaryColor, primaryColorLight } from "../theme"
import LinkModified from "./LinkModified.jsx"

const Footer = ({windowWidth}) => {
    return <Box color="white" sx={{
        position: "relative",
        background: secondaryColor,
        isolation: "isolate",
        paddingBlock: "30px",
        // paddingInline: "50px",
        }}>
            <Container>
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
                <Box 
                display="flex"
                flexDirection={{xs: "column-reverse ", sm: "row"}}
                justifyContent="space-between">
                    <List>
                        {['Home', 'Catalog', 'About Us', 'Wishlist'].map((text) => (
                            <ListItem key={text} disablePadding >
                                <ListItemButton>
                                    <LinkModified to={text}>
                                        <ListItemText primary={text} align="center"/>
                                    </LinkModified>               
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {windowWidth < 600 && 
                            <Typography align="center" variant="subtitle1" mt="40px">
                                Made With React, all rights belong to Matin Baboli
                            </Typography>
                        }

                    </List>
                    <Box>
                        <Typography align="center" variant="h6">
                            Subscribe to our news letter
                        </Typography>
                        <Stack direction={{xs:"column", sm:"row"}} gap="10px" mt="20px" justifyContent="center" alignItems={{xs: "start" , sm: "stretch"}} >
                            <TextField id="outlined-basic" label="Your Email" variant="filled" size="small"
                            sx={{
                                background: "white",
                                borderRadius: "5px",
                                width: {xs: "100%",sm:"300px"},
                            }}/>
                            <Button variant="contained" sx={{
                                background: primaryColorLight,
                            }}>
                                subscribe
                            </Button>
                        </Stack>
                        {windowWidth > 600 && 
                            <Typography align="center" variant="subtitle1" mt="60px">
                                Made With React, all rights belong to Matin Baboli
                            </Typography>
                        }

                    </Box>
                </Box>
            </Container>

    </Box>
}

export default Footer