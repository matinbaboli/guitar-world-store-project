import React, {useState, useEffect, useRef, useContext} from "react"
import {
    Box, 
    Container, 
    Drawer, 
    IconButton,
    List, 
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    Stack,
    Badge,
    Typography,
} from "@mui/material"
import LinkModified from "./LinkModified.jsx"
import TooltipModified from "./TooltipModified.jsx"
import LogoDark from "../../public/Logo-dark.svg"
import LogoLight from "../../public/Logo-light.svg"
import MenuIcon from "../../public/menu-icon.svg?react"
import CartIcon from "../../public/cart-icon.svg?react"
import CloseIcon from "../../public/close-icon.svg?react"
import ProfileIcon from "../../public/profile-icon.svg?react"
import Heart from "../../public/heart.svg?react"
import { colors } from "../style/colors.js"
import { useTheme } from "@emotion/react"
import { useMediaQueryStore } from "../store/useMediaQueryStore"
import { useScrollPositionY } from "../store/useScrollPositionYStore.js"
import { useShoppingCartItemsStore } from "../store/usePersistantStateStore.js"
import { useAnimateStore } from "../store/useAnimateStore.js"

export const smallNavHeight = 80
export const bigNavHeight = 80

const Navbar = ({ hero = false, fixed}) => {
const [open, setOpen] = useState(false)
const ref = useRef()
const wishlistLink = useRef()
const animate = useAnimateStore(state => state.animate)
const windowScrollPositionY = useScrollPositionY(state => state.windowScrollPositionY)
const isSmallLaptop = useMediaQueryStore(state => state.isSmallLaptop)
const currentNavHeight = isSmallLaptop ? bigNavHeight : smallNavHeight

const toggleMenu = (newOpen) => {
    setOpen(newOpen)
}

useEffect(() => {
    if( fixed && (currentNavHeight < windowScrollPositionY)) {
        ref.current.classList.add("move-in-top")
    } else {
        ref.current.classList.remove("move-in-top")
    }
}, [windowScrollPositionY])

useEffect(() => {
    if(animate) {
        wishlistLink.current.classList.add('jump')
        setTimeout(() => {
            wishlistLink.current.classList.remove('jump')
        }, 1000)
    }
}, [animate])

return (
    <Box
        ref={ref}
        sx={{
            position: (fixed || hero) && "absolute",
            display: fixed && "none",
            top: 0,
            zIndex: 5,
            width: "100%",
            height: (( fixed && isSmallLaptop) ? currentNavHeight - 20 : currentNavHeight) + "px",
            background: fixed ? "rgba(42, 42, 42, 0.7)": !hero ? "rgba(42, 42, 42, 1)": "none",
        }}>
        <Animations/>        
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
                <LinkModified to="/home">
                    <Box
                    component="img"
                    sx={{  width: {xs: 86, md: 80} }}
                    alt="Logo"
                    src={!hero ? LogoLight: LogoDark}
                    />            
                </LinkModified>
                {isSmallLaptop ?
                    <NavbarBigScreen wishlistLink={wishlistLink} hero={hero}/>
                    :
                    <NavbarSmallScreen wishlistLink={wishlistLink} toggleMenu={toggleMenu} hero={hero}/>
                }
            </Box>
        </Container>
        <MobileMenu toggleMenu={toggleMenu} open={open}/>
    </Box>
)
}

const NavbarBigScreen = ({wishlistLink, hero}) => {
    return (
        <Stack direction="row" alignItems="center" gap={8}>
        <Box display="flex" gap="24px">

        {[{name: 'Home', path: "/home"}, {name: 'Catalog', path: "/catalog"},  {name: 'About Us', path: "/about-us"}].map(item => {
            return (
                <Box position="relative">                
                    <Typography variant="h6" sx={{
                    '&::before': {
                        content: '""',
                        position: "absolute",
                        bottom: -5,
                        left: 5,
                        right: 5,
                        height: "1px",
                        opacity: 0,
                        background: !hero ? colors.mainbackground :colors.textPrimary,
                        transition: "opacity 0.2s ease-in-out",
                    },
                    ":hover": {
                        backGroundColor: "none",
                        '&::before': {
                            opacity: 1,
                        }
                        
                    },

                    }}>
                        <LinkModified color={!hero ? colors.mainbackground :colors.textPrimary} to={item.path}>
                                {item.name}
                        </LinkModified>
                    </Typography>
                </Box>
            )
        })}
        </Box>
        <Box>
            <LinkModified to="/wishlist" >
                <TooltipModified title="Wish List">
                    <IconButton  aria-label="menu" size="large" ref={wishlistLink}>
                        <Heart style={{
                            stroke: !hero ? colors.mainbackground :colors.textPrimary,
                            fill: !hero ? colors.mainbackground :colors.textPrimary
                        }}/>
                    </IconButton>
                </TooltipModified>
            </LinkModified>
            <LinkModified to="/cart">
                <BadgeForCartIcon>
                    <TooltipModified title="Shopping Cart">
                        <IconButton aria-label="menu" size="large">
                            <CartIcon style={{fill: !hero ? colors.mainbackground :colors.textPrimary}}/>
                        </IconButton>
                    </TooltipModified>
                </BadgeForCartIcon>
            </LinkModified>
            <TooltipModified title="Profile (not-implemented)">
                <IconButton aria-label="menu" size="large">
                    <ProfileIcon style={{stroke: !hero ? colors.mainbackground :colors.textPrimary}}/>
                </IconButton>
            </TooltipModified>
        </Box>
    </Stack>               

    )
}

const NavbarSmallScreen = ({wishlistLink, toggleMenu, hero}) => {
    return (
    <Box>
        <LinkModified to="/wishlist">
            <IconButton aria-label="menu" size="large" ref={wishlistLink}>
                <Heart style={{
                    stroke: !hero ? colors.mainbackground :colors.textPrimary,
                    fill: !hero ? colors.mainbackground :colors.textPrimary,
                }}/>
            </IconButton>
        </LinkModified>
        <LinkModified to="/cart">
            <BadgeForCartIcon smallScreen>
                <IconButton sx={{mr: 2}} aria-label="menu" size="large">
                    <CartIcon style={{fill: !hero ? colors.mainbackground :colors.textPrimary}}/>
                </IconButton>                        
            </BadgeForCartIcon>
        </LinkModified>
        <IconButton aria-label="menu" size="large" onClick={() => toggleMenu(true)}>
            <MenuIcon style={{stroke: !hero ? colors.mainbackground :colors.textPrimary}}/>
        </IconButton>
    </Box>

    )
}

const MobileMenu = ({toggleMenu, open, hero}) => {
    return (
        <Drawer onClose={() => toggleMenu(false)} open={open} anchor="right" >
        <Box 
            sx={{ 
                width: 250, 
                height: "100%", 
                color: "white",
                bgcolor: colors.backgroundDark 
            }}
        >
            <IconButton aria-label="menu" size="large" onClick={() => toggleMenu(false)} sx={{mt: 3, ml: 0.5}}>
                <CloseIcon />
            </IconButton>
            <List>
                <ListItem key="Profile" disablePadding>
                    <ListItemButton>
                        <LinkModified color={colors.mainbackground} to="#">
                            <ListItemText primary="Profile"/>
                        </LinkModified>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider variant="middle" sx={{bgcolor: "white"}}/>
            <List>
            {[{name: 'Home', path: "/home"}, {name: 'Catalog', path: "/catalog"},  {name: 'About Us', path: "/about-us"}].map((text) => (
            <ListItem key={text.name} disablePadding>
                <ListItemButton>
                    <LinkModified color={colors.mainbackground} to={text.path}>
                        <ListItemText primary={text.name}/>
                    </LinkModified>               
                </ListItemButton>
            </ListItem>
            ))}
            </List>
        </Box>
    </Drawer>

    )
}

const BadgeForCartIcon = ({children, smallScreen}) => {
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
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

const Animations = () => {
    return <style>
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
}

export default Navbar