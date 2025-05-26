import React, {useEffect, useContext, useState} from "react"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import DeleteIcon from "../../public/delete-icon.svg?react"
import LinkModified from "./LinkModified.jsx"
 
import PlusIcon from "../../public/plus-icon.svg?react"
import MinusIcon from "../../public/minus-icon.svg?react"
import { colors } from "../style/colors.js"
import { useMediaQueryStore } from "../store/useMediaQueryStore"
import { useProductDetailsStore, useShoppingCartItemsStore } from "../store/usePersistantStateStore.js"
import { MotionBox } from "./MotionComponents.jsx"
import { AnimatePresence } from "framer-motion"

const CartItem = ({props}) => {
    const {image, name, price, type, count, id, description} = props
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
    const setShoppingCartItems = useShoppingCartItemsStore(state => state.setShoppingCartItems)
    const [counter, setCounter] = useState(count || 0)
    const isMobile = useMediaQueryStore(state => state.isMobile)
    const setStoredProductId = useProductDetailsStore(state => state.setStoredProductId)
    const [isExiting, setIsExiting] = useState(false);
    let modifiedName = name.substring(0, 15) + "..."

    const handleRemove = () => {
        setIsExiting(true);
        console.log("trigger")
    };

    function handleDelete() {
        let copyOfCartItems = [...shoppingCartItems]
        let newCartItemsAterDeletion = copyOfCartItems.filter(item => item.id !== id)
        setShoppingCartItems(newCartItemsAterDeletion)
        localStorage.removeItem("state:isAddedToCart" + id)
    }

    
    useEffect(() => {
        let newArray = [...shoppingCartItems]
        newArray.map(item => {
            if (item.id === id) {
                item.count = counter
            } 
        })
        setShoppingCartItems(newArray)
        // console.log(shoppingCartItems)
    }, [counter])


    return  (
    <AnimatePresence>
            <MotionBox 
                initial={{ scale: 1, opacity: 1 }}
                animate={isExiting && { scale: 0.93, opacity: 0 }}
                transition={{
                    duration: 0.2
                }}
                onAnimationComplete={() => {
                    if (isExiting) handleDelete();
                }}                
                display="flex"
                alignItems="start"
                justifyContent="space-between"
                position="relative"
                width={{xs: "90%", sm:"550px", md: "800px", lg: "1000px"}}
                sx={{
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)"
                }}
                >
                    <Stack direction={{xs: "column",md:"row-reverse"}} justifyContent="space-between" width="100%" gap={{xs: 3, lg: 8}}> 
                            <Box 
                            // width={{xs: "120px", sm: "140px"}}
                            sx={{
                                borderLeft: {md:`2px solid ${colors.primary}`},
                                borderBottom: {xs:`2px solid ${colors.primary}`, md: "none"},
                                borderRadius: "16px",
                                overflow: "hidden",
                                bgcolor: "white"
                            }}
                            >
                                <Box
                                    sx={{
                                        width: {xs: "100%", md: "300px", lg:"350px"},
                                        height: "350px",
                                        backgroundImage: `url(${image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundColor: "white"
                                    }}   
                                />                            
                            </Box>
                            <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="start"
                            gap={{xs: 5, md: 5}}
                            width={{xs: "100%", md: "50%"}}
                            boxSizing="border-box"
                            paddingInline={{xs: "20px", md: "0px"}}
                            pl={{md: "60px"}}
                            pt="30px"
                            >
                                <Box pl={{xs: "0px", md: "8px"}} >
                                    <Typography fontSize="34px" color={colors.primary}>
                                    {/* {name} */}
                                    {isMobile ? modifiedName: name}
                                    </Typography>
                                    <Box display="flex" gap="20px" marginBlock="20px" letterSpacing="1px" color={colors.textSecondary}>
                                        <Typography variant="body1">
                                            Type: {type}
                                        </Typography>
                                        <Typography variant="body1" >
                                            Price: ${price}
                                        </Typography>
                                    </Box>                                
                                    <Typography variant="body2" letterSpacing="1px" color={colors.textSecondary}>
                                        {description.substring(0, 80)}<span style={{color: colors.accent, fontSize: "20px"}}>...</span>
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection={{xs:"column-reverse", sm: "row"}} gap={{xs:"20px", md: "0"}} justifyContent="space-between" alignItems="center" mb={{xs: "50px", md: "0px"}}>                            
                                    <LinkModified to={`/product-details/${id}`}>
                                        <Button
                                        onClick={() => setStoredProductId(id)}                             
                                        sx={{
                                            color: colors.primary,
                                            fontWeight: "600",
                                            letterSpacing: "1px"
                                        }}>view product</Button>
                                    </LinkModified>
                                    <Box 
                                    display="flex"
                                    justifyContent="center"
                                    gap={{xs: 3, md:1}}
                                    sx={{
                                        background: colors.primary,
                                        color: "white",
                                        paddingBlock: "5px",
                                        paddingInline: "10px",
                                        borderRadius: "8px"
                                    }}
                                    >
                                        <IconButton
                                        sx={{
                                            color: colors.mainbackground
                                        }} 
                                        onClick={() => {
                                            if (counter <= 1) {
                                                handleRemove()
                                            } else {
                                                setCounter(counter - 1)   
                                            }
                                        }}>
                                            <MinusIcon style={{width: "15px"}}/>
                                        </IconButton>
                                        <Typography variant="h4">{counter}</Typography>
                                        <IconButton 
                                        sx={{
                                            color: colors.mainbackground
                                        }} 
                                        onClick={() => setCounter(counter + 1)}>
                                            <PlusIcon style={{width: "15px"}}/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    <IconButton sx={{
                        border: `1px solid ${colors.secondary}`,
                        width: "40px",
                        height: "40px",
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                    }} 
                    onClick={handleRemove}>
                        <DeleteIcon/>
                    </IconButton>
            </MotionBox>
        </AnimatePresence>
    
    )
}
        

export default CartItem