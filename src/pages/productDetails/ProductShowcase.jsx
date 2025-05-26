import React from "react"
import {
    Box,
    MobileStepper,
    Button,
    Typography,
    Stack,
    IconButton
} from "@mui/material"
import PlusIcon from "../../../public/plus-icon.svg?react"
import MinusIcon from "../../../public/minus-icon.svg?react"
import { useMediaQueryStore } from "../../store/useMediaQueryStore"
import { useProductDetailsStore, useShoppingCartItemsStore } from "../../store/usePersistantStateStore"
import { colors } from "../../style/colors"


const ProductShowcase = ({counter, setCounter, targetItemFromData}) => {
    const isSmallLaptop = useMediaQueryStore(state => state.isSmallLaptop)
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
    const storedProductId = useProductDetailsStore(state => state.storedProductId)
    const setShoppingCartItems = useShoppingCartItemsStore(state => state.setShoppingCartItems)

    const {name, price, image, description, id, type, brand} = targetItemFromData


    const isAddedToCart = shoppingCartItems.some((item) => item.id === storedProductId) ? true : false

    function handleAddToCart() {
        let copyOfShoppingCartItems = [...shoppingCartItems]
        let newCartItem = {
            id: id,
            name: name,
            price: price,
            type: type,
            brand: brand,
            image: image,
            count: counter,
            description: description
        }
        copyOfShoppingCartItems.push(newCartItem)
        setShoppingCartItems(copyOfShoppingCartItems)
    }



    return (
        <Box 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        mb="70px"
        sx={{
            position: {md: "sticky"},
            top: "80px",
            height: "100%",
            paddingBlock:"20px",
            paddingInline: {md: "10px", lg: "40px"},
            background: "white",
            borderRadius: "16px",
            boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.2)"
        }}
    >
        <Box width="100%">

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: {xs:"400px", md: "450px", lg: "500px"},
                    mb: "20px",
                    backgroundColor: "white",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    borderRadius: {md:"10px"},
                    overflow: "hidden"
                }}
            >
                {/* <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: `linear-gradient(to right, ${colors.secondary} -20%, rgba(0, 0, 0, 0) 10% 90%, ${colors.secondary} 120%)`
                    }}
                /> */}
            </Box>
            {/* <MobileStepper
            variant="dots"
            steps={imageList.length}
            position="static"
            activeStep={activeStep}
            sx={{ 
                width: {xs: "350px", md: "70%"},
                boxSizing: "border-box",
                background: "none",
                marginInline: "auto",
                ["& .MuiMobileStepper-dotActive"]: {background: colors.secondary}
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
            /> */}
        </Box>
        <Stack justifyContent="center" alignItems="center" width="100%" mt="20px">
            <Stack direction={ {xs: "column", sm: "row"}} justifyContent={{xs: "center", md: "space-between" }} alignItems="center" gap={2} width="100%">
                <Box 
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={{xs: "0px", lg: 2}}
                    sx={{
                        background: "none",
                        color: "white",
                        paddingBlock: "5px",
                        paddingInline: "10px",
                        borderRadius: "5px",
                        border: `1px solid ${colors.accent}`
                    }}
                    >
                    <Typography 
                        variant="h5"
                        letterSpacing="2px"
                        pl="10px"
                        mr="20px"
                        color={colors.accent}
                        >
                        Quantity:
                    </Typography>
                    
                    <IconButton 
                    sx={{
                        color: colors.accent
                    }} 
                    onClick={() => {
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
                    <Typography variant="h4" color={colors.accent}>{counter}</Typography>
                    <IconButton
                    sx={{
                        color: colors.accent
                    }} 
                    onClick={() => {
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
                    <Typography variant="overline" letterSpacing="1px" color={colors.textSecondary}><span style={{color: colors.accent, fontSize: "16px"}}>{counter}</span> {counter > 1 ? "items have" : "item has"} been added to the cart</Typography>                        
                    :
                    <Button onClick={handleAddToCart} fullWidth variant="contained">
                        add to cart
                    </Button>
                }
            </Stack>
        </Stack>

    </Box>


    )
}


export default ProductShowcase