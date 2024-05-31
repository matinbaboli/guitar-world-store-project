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
     Link,
     Button, } from "@mui/material"
import {darkBackgroundColor} from "../theme.jsx"


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
                <Link href="ggg" sx={{height: 50}}>
                    <Box
                    component="img"
                    sx={{ height: {xs: 55, md: 70}, width: {xs: 120, md: 140} }}
                    alt="Logo"
                    src={Logo}
                    />            
                </Link>
                {windowWidth > 900 ?
                    <Box>
                        {['Home', 'Products', 'About Us', 'Wishlist'].map(item => {
                            return <Button sx={{color: "white",
                                ":hover": {
                                    backGroundColor: "none",
                                    borderBottom: "1px solid white"
                                },
                                backGroundColor: "none"
                            }}>
                                {item}
                            </Button>
        
                        })}

                        <IconButton sx={{ml: 8}} aria-label="menu" size="large">
                            <CartIcon />
                        </IconButton>
                        <IconButton aria-label="menu" size="large">
                            <ProfileIcon />
                        </IconButton>
                    </Box>               
                    :
                    <Box>
                        <IconButton sx={{mr: 2}} aria-label="menu" size="large">
                            <CartIcon />
                        </IconButton>
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
                {['Profile'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
                <Divider variant="middle" sx={{bgcolor: "white"}}/>
                <List>
                {['Home', 'Products', 'About Us', 'Wishlist'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>               
                        <ListItemText primary={text} />
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