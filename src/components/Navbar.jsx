import React, {useState, useEffect, useRef, useContext} from "react"
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
     Button,
     Typography,
     Stack,
     Badge
    } from "@mui/material"
import {darkBackgroundColor} from "../theme.jsx"
import LinkModified from "./LinkModified.jsx"
import {context} from "../contextApi.jsx"
import TooltipModified from "./TooltipModified.jsx"


// ICONS
import  Logo from "../../public/Logo.svg"
import  MenuIcon from "../../public/menu-icon.svg?react"
import  CartIcon from "../../public/cart-icon.svg?react"
import  CloseIcon from "../../public/close-icon.svg?react"
import  ProfileIcon from "../../public/profile-icon.svg?react"
import  Heart from "../../public/heart.svg?react"


export const smallNavHeight = 70
export const bigNavHeight = 100

const BadgeForCartIcon = ({children, smallScreen}) => {
    const {shoppingCartItems} = useContext(context)
    let shoppingCartItemsCount = 0
    shoppingCartItems.forEach(item => {
        shoppingCartItemsCount += item.count
    })
    return <Badge badgeContent={shoppingCartItemsCount} color="secondary"
    sx={{
        ["& .MuiBadge-badge"]: {
            transform: `translate(${smallScreen ? -15: 0}px, 5px)`,
            opacity: shoppingCartItems.length === 0 && "0%",
            transition: "opacity 200ms ease-in-out",
            fontSize: "0.9rem"
        }
    }} >
        {children}
    </Badge>

}


const Navbar = ({windowWidth, fixed, navHeight}) => {
const [open, setOpen] = useState(false)
const ref = useRef()
const wishlistLink = useRef()
const {windowScrollPositionY, wishlistIconActivateAnimation} = useContext(context)

const currentNavHeight = windowWidth > 900 ? bigNavHeight : smallNavHeight


const toggleMenu = (newOpen) => {
    setOpen(newOpen)
}



useEffect(() => {
    if(fixed && (currentNavHeight < windowScrollPositionY)) {
        ref.current.classList.add("move-in-top")
    } else {
        ref.current.classList.remove("move-in-top")
    }
}, [windowScrollPositionY])

useEffect(() => {
    if(wishlistIconActivateAnimation) {
        wishlistLink.current.classList.add('jump')
        setTimeout(() => {
            wishlistLink.current.classList.remove('jump')
        }, 1000)
    }
}, [wishlistIconActivateAnimation])


return <Box
    ref={ref}
     sx={{
        display: fixed && "none",
        top: 0,
        zIndex: 5,
        width: "100%",
        height: (fixed ? currentNavHeight - 20 : currentNavHeight) + "px",
        background: fixed ? "linear-gradient( to left, rgba(50, 50, 50, 1) 0%, rgba(80, 80, 80, 1) 100%)": darkBackgroundColor,

    }}>
        <style>
            {`
                .move-in-top {
                    display: block;
                    position: fixed;
                    animation: moveInTopNavbar 300ms ease-in-out;
                }

                .jump {
                    animation: jumpTwice 300ms ease-out 2;
                }

                @keyframes jumpTwice {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    
                    }
                    100% {
                        transform: scale(1);                        
                    }
                }

                @keyframes moveInTopNavbar {
                    from {
                        transform: translateY(-100px);
                    }
                    to {
                        transform: translateY(0px);
                    }
                }
            `}
        </style>
        <Container sx={{
            height: "100%",
        }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    height: "100%"
                }}
            >
                <LinkModified to="Home" >
                    <Box
                    component="img"
                    sx={{ height: {xs: 35, md: 50}, width: {xs: 100, md: 120}, transform: "translateY(-5px)" }}
                    alt="Logo"
                    src={Logo}
                    />            
                </LinkModified>
                {windowWidth > 900 ?
                    <Stack direction="row" alignItems="center" gap={8}>
                        <Box>

                        {['Home', 'Catalog', 'About Us'].map(item => {
                            return <Button sx={{color: "white", borderRadius: "0px",
                                position: "relative",
                                '&::before': {
                                    content: '""',
                                    position: "absolute",
                                    bottom: 0,
                                    width: "30px",
                                    height: "1px",
                                    opacity: 0,
                                    background: "white",
                                    transition: "opacity 0.2s ease-in-out",
                                },
                                ":hover": {
                                    backGroundColor: "none",
                                    // borderBottom: "1px solid white",
                                    '&::before': {
                                        opacity: 1,
                                    }
                                    
                                },
                                backGroundColor: "none"
                            }}>
                                <LinkModified to={item}>
                                    {item}
                                </LinkModified>
                            </Button>
        
                        })}
                        </Box>
                        <Box>
                            <LinkModified to="Wishlist" >
                                <TooltipModified title="Wish List">
                                    <IconButton  aria-label="menu" size="large" ref={wishlistLink}>
                                        <Heart style={{fill: "white"}}/>
                                    </IconButton>
                                </TooltipModified>
                            </LinkModified>
                            <LinkModified to="Cart">
                                <BadgeForCartIcon>
                                    <TooltipModified title="Shopping Cart">
                                        <IconButton aria-label="menu" size="large">
                                            <CartIcon />
                                        </IconButton>
                                    </TooltipModified>
                                </BadgeForCartIcon>
                            </LinkModified>
                            <TooltipModified title="Profile">
                                <IconButton aria-label="menu" size="large">
                                    <ProfileIcon />
                                </IconButton>
                            </TooltipModified>
                        </Box>
                    </Stack>               
                    :
                    <Box>
                        <LinkModified to="Wishlist">
                                <IconButton aria-label="menu" size="large" ref={wishlistLink}>
                                    <Heart style={{fill: "white"}}/>
                                </IconButton>
                        </LinkModified>
                        <LinkModified to="Cart">
                            <BadgeForCartIcon smallScreen>
                                <IconButton sx={{mr: 2}} aria-label="menu" size="large">
                                    <CartIcon />
                                </IconButton>                        
                            </BadgeForCartIcon>
                        </LinkModified>
                        <IconButton aria-label="menu" size="large" onClick={() => toggleMenu(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                }
            </Box>
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
}

export default Navbar