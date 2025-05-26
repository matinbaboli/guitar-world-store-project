import React, {useState ,useRef, useEffect, useContext} from "react"
import {
    Box,
    Typography,
    Stack,
    Button
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import WishlistItem from "../components/WishlistItem"
import LinkModified from "../components/LinkModified"
import { colors } from "../style/colors"
import { useWindowWidthStore } from "../store/useWindowWidthStore"
import { useWishlistItemsStore } from "../store/usePersistantStateStore"
import Navbar from "../components/Navbar"

const Wishlist = () => {
    const [isPressed, setIsPressed] = useState(false)
    const [cursorX, setCursorX] = useState()
    const slider = useRef()
    const cards = useRef()
    const wishlistItems = useWishlistItemsStore(state => state.wishlistItems)
    const [activateDrag, setActivateDrag] = useState(true)
    const windowWidth = useWindowWidthStore(state => state.windowWidth)

    function mousedownHandle(e) {
        if (!activateDrag) {
            e.currentTarget.style.cursor = "default"
            return;    
        };
        setIsPressed(true)
        setCursorX(e.clientX - cards.current.offsetLeft)
        e.currentTarget.style.cursor = "grabbing"
    }

    function mousemoveHandle(e) {
        if (!activateDrag) {
            cards.current.style.left = 0
            return;    
        };
        if (!isPressed) return;
        e.preventDefault()
        cards.current.style.left = `${e.clientX - cursorX}px`
        boundSlides()
    }

    function mouseupHandle(e) {
        if (!activateDrag) {
            e.currentTarget.style.cursor = "default"
            return;    
        };        
        setIsPressed(false)
        e.currentTarget.style.cursor = "grab"
    }

    function boundSlides() {
        const containerRect = slider.current.getBoundingClientRect()
        const cardsRect = wishlistItems.length > 0 && cards.current.getBoundingClientRect()    
        if(parseInt(cards.current.style.left) > 0) {
            cards.current.style.left = 0
        } else if (cardsRect.right < containerRect.right) {
            cards.current.style.left = `-${cardsRect.width - containerRect.width}px`
        }  
    }
    
    useEffect(() => {
        const containerRect = slider.current.getBoundingClientRect()
        const cardsRect = wishlistItems.length > 0 && cards.current.getBoundingClientRect()
        // let areCardsWider = true
        console.log(cardsRect.width)
        console.log(containerRect.width)
        let areCardsWider = cardsRect.width > containerRect.width

        setActivateDrag(areCardsWider)
    }, [windowWidth, wishlistItems])

    return (
        <>
            <Navbar/>
            <Navbar fixed/>  
            <SectionContainer hero backgroundColor={colors.mainbackground}>
                <Typography component="h1" fontSize="36px" mt="50px" align="center" color={colors.primary}>
                    Wishlist
                </Typography>
                <Typography variant="body1" mb="20px" letterSpacing={1} color={colors.primary} align="center">
                    Add your favorite products or things you want to buy at a later time here so you don't lose them.
                </Typography>
                <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    borderRadius="50px"
                    overflow={{xs: "hidden"}}
                    boxShadow="3px 3px 10px rgba(0, 0, 0, 0.2)"
                    mb="150px"
                >     
                        <Box 
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            position="relative"
                            width="100%"
                            height={{sm: "520px"}}
                            overflow={{sm: "auto"}}
                            borderRight={`2px solid ${colors.secondary}`}
                            boxSizing="border-box"
                            ref={slider}
                            onMouseDown={mousedownHandle}
                            onMouseMove={mousemoveHandle}
                            onMouseUp={mouseupHandle}
                            onMouseLeave={mouseupHandle}
                            sx={{
                                background: "white",
                                cursor: activateDrag && "grab",
                                
                            }}             
                            >
                                {wishlistItems.length > 0 ? 
                                    <Box
                                    display="flex"
                                    flexDirection={{xs: "column", sm: "row"}}
                                    alignItems="center"
                                    gap={3}        
                                    p="30px"
                                    boxSizing="border-box"
                                    ref={cards}
                                    sx={{
                                        position:{xs: "relative",sm: "absolute"},
                                        // maxWidth: {xs: "350px"},
                                        // width: "100%",
                                        top:0,
                                        left:0,                                               
                                    }}
                                    >
                                        {
                                        wishlistItems.map(item => {
                                            return <WishlistItem key={item.id} data={item}/>
                                        })   
                                        }                                
                                    </Box>  
                                :
                                    <Stack alignItems="center" gap={4} marginBlock={5}>
                                        <Box
                                        component="img"
                                        src="images/empty-wishlist.png"
                                        width={{xs: "300px", sm: "400px"}}
                                        />
                                        <Typography variant="h6" color={colors.textSecondary}>
                                            Your Wishlist is empty for now.
                                        </Typography>
                                        <LinkModified to="/catalog">
                                            <Button variant="contained" sx={{bgcolor: colors.primary}}>
                                                Start shopping
                                            </Button>
                                        </LinkModified>
                                    </Stack>
                                }
                        </Box>
                    <Box 
                        width= "20px"
                        sx={{
                            background: "white",
                        }}
                    />

                </Box>
            </SectionContainer>
        </>
    )
}

export default Wishlist