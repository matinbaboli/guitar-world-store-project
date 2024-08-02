import React, {useState ,useRef, useEffect, useContext} from "react"
import {
    Box,
    Typography,
    Stack,
    Button
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import WishlistItem from "../components/WishlistItem"
import {primaryColor, primaryColorLight, primaryColorVeryLight,  secondaryColor, secondaryColorLight, generalBackgroundColor, secondaryColorVeryLight} from "../theme"
import {context} from "../contextApi"
import LinkModified from "../components/LinkModified"

const Wishlist = ({windowWidth}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [cursorX, setCursorX] = useState()
    const slider = useRef()
    const cards = useRef()
    const {wishlistItems} = useContext(context)
    const [activateDrag, setActivateDrag] = useState(false)


    function mousedownHandle(e) {
        if (!activateDrag) {
            e.target.style.cursor = "default"
            return;    
        };
        setIsPressed(true)
        setCursorX(e.clientX - cards.current.offsetLeft)
        e.target.style.cursor = "grabbing"
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
            e.target.style.cursor = "default"
            return;    
        };        
        setIsPressed(false)
        e.target.style.cursor = "grab"
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
        let areCardsWider = cardsRect.width > containerRect.width
        // console.log(cardsRect)

        setActivateDrag(areCardsWider)
    }, [windowWidth])

    return (
        <SectionContainer hero backgroundColor="#FDE9E4">
            <Typography mt="70px" mb="20px" align="center" variant="h3" letterSpacing={3} component="h1" color={primaryColor}>
                Wishlist
            </Typography>
            <Typography variant="body1" mb="20px" letterSpacing={1} color={primaryColor} align="center">
                Add your favorite products or things you want to buy at a later time here so you don't lose them.
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
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        width="100%"
                        height={{sm:"570px"}}
                        overflow="auto"
                        borderRight="2px solid black"
                        boxSizing="border-box"
                        ref={slider}
                        onMouseDown={mousedownHandle}
                        onMouseMove={mousemoveHandle}
                        onMouseUp={mouseupHandle}
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
                                    maxWidth: {xs: "350px"},
                                    width: "100%",
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
                                <Stack alignItems="center" gap={4}>
                                    <Box
                                    component="img"
                                    src="images/empty-wishlist.png"
                                    width="400px"
                                    />
                                    <Typography variant="h6" color="gray">
                                        There are no items added to the Wishlist yet
                                    </Typography>
                                    <LinkModified to="Catalog">
                                        <Button variant="contained" sx={{bgcolor: primaryColorLight}}>
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
    )
}

export default Wishlist