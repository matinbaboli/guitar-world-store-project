import React, {useState ,useRef, useEffect} from "react"
import {
    Box,
    Typography,

} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import WishlistItem from "../components/WishlistItem"
import {primaryColor, primaryColorLight, primaryColorVeryLight,  secondaryColor, secondaryColorLight, generalBackgroundColor} from "../theme"


const Wishlist = () => {
    const [isPressed, setIsPressed] = useState(false)
    const [cursorX, setCursorX] = useState()
    const slider = useRef()
    const cards = useRef()

    function mousedownHandle(e) {
        setIsPressed(true)
        setCursorX(e.clientX - cards.current.offsetLeft)
        e.target.style.cursor = "grabbing"
    }

    function mousemoveHandle(e) {
        if (!isPressed) return;
        e.preventDefault()
        cards.current.style.left = `${e.clientX - cursorX}px`
        boundSlides()
        console.log(cards.current.style.left)
    }

    function mouseupHandle(e) {
        setIsPressed(false)
        e.target.style.cursor = "grab"
    }

    function boundSlides() {
        const containerRect = slider.current.getBoundingClientRect()
        const cardsRect = cards.current.getBoundingClientRect()
        if(parseInt(cards.current.style.left) > 0) {
            cards.current.style.left = 0
        } else if (cardsRect.right < containerRect.right) {
            cards.current.style.left = `-${cardsRect.width - containerRect.width}px`
        }    
    }

    // useEffect(() => {
    // })

    return (
        <SectionContainer hero backgroundColor="#FDE9E4">
            <Typography marginBlock="60px" align="center" variant="h2" component="h1" color={primaryColor}>
                Wishlist
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                width="100%"
                borderRadius="50px"
                overflow={{sm: "hidden"}}
                boxShadow="3px 3px 10px rgba(0, 0, 0, 0.2)"
                mb="50px"
            >
                    
                    <Box 
                        position="relative"
                        width="100%"
                        height={{sm:"540px"}}
                        overflow="auto"
                        borderRight="2px solid black"
                        boxSizing="border-box"
                        ref={slider}
                        onMouseDown={mousedownHandle}
                        onMouseMove={mousemoveHandle}
                        onMouseUp={mouseupHandle}
                        sx={{
                            background: "white",
                            cursor: "grab",
                            
                        }}
                        
                        >
                            <Box
                                display="flex"
                                flexDirection={{xs: "column", sm: "row"}}
                                alignItems="center"
                                gap={3}        
                                p="30px"
                                boxSizing="border-box"
                                ref={cards}
                                sx={{
                                    position:{sm: "absolute"},
                                    top:0,
                                    left:0            
                                }}
                                >
                                <WishlistItem/>
                                <WishlistItem/>
                                <WishlistItem/>
                                <WishlistItem/>
                                <WishlistItem/>
                                <WishlistItem/>
                                <WishlistItem/>
                            </Box>
                    </Box>
                <Box 
                    width= "20px"
                    sx={{
                        background: "white",
                    }}
                />

            </Box>
        </SectionContainer>
    )
}

export default Wishlist