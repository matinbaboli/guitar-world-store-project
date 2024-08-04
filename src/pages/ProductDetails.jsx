import React, { useState, useContext, useEffect, useRef } from "react"
import {
    Box,
    MobileStepper,
    Button,
    Typography,
    Stack,
    Rating,
    Divider,
    IconButton
} from "@mui/material"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import Comment from "../components/Comment"
import {smallNavHeight, bigNavHeight} from "../components/Navbar"
import {context} from "../contextApi"
import data from "../data.json"
import usePersistantState from "../usePersistantState"
import TooltipModified from "../components/TooltipModified"
import PlusIcon from "../../public/plus-icon.svg?react"
import MinusIcon from "../../public/minus-icon.svg?react"
import Heart from "../../public/heart.svg?react"
import HeartFilled from "../../public/heart-filled.svg?react"
import { red } from "@mui/material/colors"


let initialTargetItem = {
    name: "Guitar",
    price: 100,
    type: "Electric",
    brand: "Fender",
    image: "../public/images/guitars/1.jpg",
    description: "The Fender American Professional II Stratocaster offers a mix of classic design and modern enhancements. Known for its bright, clear tones and exceptional playability, this guitar features a deep 'C' neck profile, V-Mod II pickups for more articulation, and a sculpted neck heel for easier access to higher frets. It's a versatile instrument suitable for various genres, from rock to blues.",
    rating: 4.2
}


const ProductDetails = () => {
    const {storedProductId, shoppingCartItems, setShoppingCartItems, wishlistItems, setWishlistItems, wishlistIconActivateAnimation, setWishlistIconActivateAnimation, windowWidth} = useContext(context)
    const [ratingValue, setRatingValue] = useState(2)
    const [targetItemFromData, setTargetItemFromData] = useState(initialTargetItem)
    const [counter, setCounter] = useState(1)
    const [activeStep, setActiveStep] = useState(0)

    const [isAddedToCart, setIsAddedToCart] = usePersistantState(false, "isAddedToCart" + storedProductId)
    const [isAddedToWishlist, setIsAddedToWishlist] = usePersistantState(false, "isAddedToWishlist" + storedProductId)
    const {name, price, image, description, rating, id, type, brand, imageList = []} = targetItemFromData


    function handleAddToCart() {
        let copyOfShoppingCartItems = [...shoppingCartItems]
        let newCartItem = {
            id: id,
            name: name,
            price: price,
            type: type,
            brand: brand,
            image: image,
            count: counter
        }
        copyOfShoppingCartItems.push(newCartItem)
        setShoppingCartItems(copyOfShoppingCartItems)
        setIsAddedToCart(true)
    }

    function handleAddOrRemoveWishlist() {
        let copyOfWishlistItems = [...wishlistItems]

        if(isAddedToWishlist) {
            let filteredWishlistItems = copyOfWishlistItems.filter(item => item.id !== storedProductId)
            setWishlistItems(filteredWishlistItems)
            setWishlistIconActivateAnimation(false)
        } else {
            let newWishlistItem = {
                id: id,
                name: name,
                price: price,
                type: type,
                brand: brand,
                image: image,
                count: counter
            }
            copyOfWishlistItems.push(newWishlistItem)
            setWishlistItems(copyOfWishlistItems)
            setWishlistIconActivateAnimation(true)
        }
        setIsAddedToWishlist(!isAddedToWishlist)
    }


        

    useEffect(() => {
        let myItem = data.filter((item) => item.id === storedProductId)
        setTargetItemFromData(myItem[0])

        shoppingCartItems.forEach(item => {
            if(item.id === storedProductId) {
                setCounter(item.count)
            } 
        }) 
    }, [])
    

    return (
        <Box 
            display="flex" 
            flexDirection={{xs:"column", md: "row"}} 
            alignItems={{xs: "center", md: "start"}}
            gap={{xs: 0, md: 10}}
            boxSizing="border-box"

            sx={{
                background: generalBackgroundColor,
                pb: "20px",
                paddingInline: {md: "50px",lg: "200px"}
            }}
        >
            <Box 
                display="flex"
                flexDirection="column"
                width="100%"
                sx={{
                    position: {md: "sticky"},
                    top: "100px",
                    height: "100%",
                    paddingBlock: {md: "20px"},
                }}
            >
                <Box>

                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: {xs:"400px", md: "60vh"},
                            mb: "20px",
                            backgroundColor: "white",
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            borderRadius: {md:"10px"},
                            boxShadow: "0px 5px 20px 1px rgba(0, 0, 0, 0.2)",
                            overflow: "hidden"
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: `linear-gradient(to right, ${secondaryColorLight} -20%, rgba(0, 0, 0, 0) 10% 90%, ${secondaryColorLight} 120%)`
                            }}
                        />
                    </Box>
                    <MobileStepper
                    variant="dots"
                    steps={imageList.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ 
                        width: {xs: "350px", md: "70%"},
                        boxSizing: "border-box",
                        background: "none",
                        marginInline: "auto",
                        ["& .MuiMobileStepper-dotActive"]: {background: secondaryColor}
                    }}
                    nextButton={
                        <Button 
                        size="small" 
                        color="secondary"
                        // onClick={handleNext} 
                        // disabled={activeStep === 5}
                        >
                        Next
                        </Button>
                    }
                    backButton={
                        <Button 
                        size="small" 
                        color="secondary"
                        // onClick={handleBack} 
                        // disabled={activeStep === 0}
                        >
                        Back
                        </Button>
                    }
                    />
                </Box>
                <Stack justifyContent="center" alignItems="center" mt="20px">
                    <Stack direction={windowWidth > 900 ? "row" : "column"} gap={2}>
                        <Box 
                            display="flex"
                            justifyContent="center"
                            gap={2}
                            sx={{
                                background: secondaryColor,
                                color: "white",
                                paddingBlock: "5px",
                                borderRadius: "5px"
                            }}
                            >
                            <Typography 
                                variant="h5"
                                letterSpacing="2px"
                                pl="10px"
                                mr="20px"
                                >
                                Quantity:
                            </Typography>

                            <IconButton onClick={() => {
                                if(counter <= 1) {
                                    setCounter(1)
                                    alert("Quantity can't be below one")
                                } else {
                                    setCounter(counter - 1)
                                }
                                
                                if (isAddedToCart) {
                                    let copiedShoppingCartItems =[...shoppingCartItems]
                                    copiedShoppingCartItems.map(item => {
                                        if(item.id === storedProductId) {
                                            item.count = counter > 1 ? counter - 1 : counter
                                        }
                                    })
                                    setShoppingCartItems(copiedShoppingCartItems)
                                }
                                
                            }}>
                                <MinusIcon style={{width: "15px"}}/>
                            </IconButton>
                            <Typography variant="h4">{counter}</Typography>
                            <IconButton onClick={() => {
                                setCounter(counter + 1)
                                
                                if (isAddedToCart) {
                                    let copiedShoppingCartItems =[...shoppingCartItems]
                                    copiedShoppingCartItems.map(item => {
                                        if(item.id === storedProductId) {
                                            item.count = counter + 1 
                                            // the plus one is the only fix i can could come up with at the moment. the problem is that when i increase the counter, the actual value behind the scenes in one number behind, on the counter display it's fine but when i go to the cart, the counter overthere is one number behind 
                                        }
                                    })
                                    setShoppingCartItems(copiedShoppingCartItems)
                                }
                            }}>
                                <PlusIcon style={{width: "15px"}}/>
                            </IconButton>
                        </Box>
                        {
                            isAddedToCart ?
                            <Typography>{counter} {counter > 1 ? "items have" : "item has"} been added to the cart</Typography>                        
                            :
                            <Button onClick={handleAddToCart} variant="contained">
                                add to cart
                            </Button>
                        }
                    </Stack>
                </Stack>

            </Box>
            <Box   
                display="flex"
                flexDirection="column"
                alignItems={{xs: "center",md:"start"}}
                justifyContent="center"
                mt="50px"
                width="100%"    
                paddingInline="30px"
                boxSizing="border-box"

            >
                <Stack direction={{xs: "column", md: "column"}} justifyContent="space-between" alignItems={{xs:"start", md: "start"}} 
                gap={3}
                width="100%"
                >
                    <Typography variant="h3" component="h1">
                        {name}
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: primaryColor, letterSpacing: "3px"}}>
                        ${price}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={{xs: "space-between", md: "start"}} gap={{md: 2}} alignItems="center" width="100%" mt="20px" mb="40px">
                    <Rating
                        name="rating"
                        readOnly
                        value={rating}
                        precision={0.1}
                        // onChange={(event, newValue) => {
                        //     setRatingValue(newValue);
                        // }}
                    />
                    <Typography variant="h6" sx={{
                        color: "rgba(0, 0, 0, 0.6)",
                        mr: "20px"
                    }}>
                        {`(${rating})  `}
                        from 10 reviews
                    </Typography>
                    <TooltipModified placement="top" title={!isAddedToWishlist ? "Add To Wish List" : "Remove From Wish List"}>
                        <IconButton onClick={handleAddOrRemoveWishlist}>
                            {isAddedToWishlist ? <HeartFilled style={{fill: red[700]}}/> : <Heart style={{fill: red[200]}}/>}
                        </IconButton>
                    </TooltipModified>
                </Stack>

                {windowWidth > 900 && 
                    <Divider variant="fullWidth" sx={{
                        background: "rgba(0, 0, 0, 0.2)",
                        width: "100%",
                        height: "1px",
                        mb: "40px"
                    }}/>
                } 
                <Box>
                    <Typography variant="h4" component="h2" mb="30px">
                        Description
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </Box>                   

                <Box 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{xs: "center",md:"start"}}
                    // width="100%"
                    mt="80px"
                >
                    <Typography variant="h4" component="h2" mb="50px">
                        Comments
                    </Typography>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductDetails 