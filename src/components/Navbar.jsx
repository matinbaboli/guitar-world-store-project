import React, {useState, useEffect} from "react"
import {
     Box, 
     Container, 
     Drawer, 
     Grid, 
     IconButton,
     List, 
     Divider,
     ListItem,
     ListItemButton,
     ListItemText,
     Button, } from "@mui/material"
import {darkBackgroundColor} from "../theme.jsx"
import LinkModified from "./LinkModified.jsx"


// ICONS
import  Logo from "../../public/Logo.svg"
import  MenuIcon from "../../public/menu-icon.svg?react"
import  CartIcon from "../../public/cart-icon.svg?react"
import  CloseIcon from "../../public/close-icon.svg?react"
import  ProfileIcon from "../../public/profile-icon.svg?react"


export const smallNavHeight = "70px"
export const bigNavHeight = "100px"


const Navbar = ({windowWidth}) => {
const [open, setOpen] = useState(false)

const toggleMenu = (newOpen) => {
    setOpen(newOpen)
}




    return <>
    <Box sx={{
        width: "100%",
        height: {xs: smallNavHeight, md: bigNavHeight},
        bgcolor: darkBackgroundColor,

    }}>
        <Container sx={{
            height: "100%",
        }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignContent="center"
                sx={{
                    height: "100%"
                }}
            >
                <LinkModified to="Home" sx={{height: 50}}>
                    <Box
                    component="img"
                    sx={{ height: {xs: 55, md: 70}, width: {xs: 120, md: 140} }}
                    alt="Logo"
                    src={Logo}
                    />            
                </LinkModified>
                {windowWidth > 900 ?
                    <Box>
                        {['Home', 'Catalog', 'About Us', 'Wishlist'].map(item => {
                            return <Button sx={{color: "white",
                                ":hover": {
                                    backGroundColor: "none",
                                    borderBottom: "1px solid white"
                                },
                                backGroundColor: "none"
                            }}>
                                <LinkModified to={item}>
                                    {item}
                                </LinkModified>
                            </Button>
        
                        })}
                        <LinkModified to="Cart">
                            <IconButton sx={{ml: 8}} aria-label="menu" size="large">
                                <CartIcon />
                            </IconButton>
                        </LinkModified>
                        <IconButton aria-label="menu" size="large">
                            <ProfileIcon />
                        </IconButton>
                    </Box>               
                    :
                    <Box>
                        <LinkModified to="Cart">
                            <IconButton sx={{mr: 2}} aria-label="menu" size="large">
                                <CartIcon />
                            </IconButton>                        
                        </LinkModified>
                        <IconButton aria-label="menu" size="large" onClick={() => toggleMenu(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                }
            </Grid>
        </Container>
        
        <Drawer onClose={() => toggleMenu(false)} open={open} anchor="right" >
            <Box 
                sx={{ 
                    width: 250, 
                    height: "100%", 
                    color: "white",
                    bgcolor: darkBackgroundColor 
                }}
            >
                <IconButton aria-label="menu" size="large" onClick={() => toggleMenu(false)} sx={{mt: 3, ml: 0.5}}>
                    <CloseIcon />
                </IconButton>
                <List>
                    <ListItem key="Profile" disablePadding>
                        <ListItemButton>
                            <LinkModified to="Profile">
                                <ListItemText primary="Profile" />
                            </LinkModified>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider variant="middle" sx={{bgcolor: "white"}}/>
                <List>
                {['Home', 'Catalog', 'About Us', 'Wishlist'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <LinkModified to={text}>
                            <ListItemText primary={text} />
                        </LinkModified>               
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
            </Box>
        </Drawer>
    </Box>
    </>
}

export default Navbar