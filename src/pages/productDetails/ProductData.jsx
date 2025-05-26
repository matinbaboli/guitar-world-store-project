import React, { useState } from "react"
import {
    Box,
    Typography,
    Stack,
    Rating,
    Divider,
    IconButton
} from "@mui/material"
import { useProductDetailsStore, useWishlistItemsStore } from "../../store/usePersistantStateStore"
import { useAnimateStore } from "../../store/useAnimateStore"
import { useMediaQueryStore } from "../../store/useMediaQueryStore"
import usePersistantState from "../../usePersistantState"
import { colors } from "../../style/colors"
import TooltipModified from "../../components/TooltipModified"
import Heart from "../../../public/heart.svg?react"
import HeartFilled from "../../../public/heart-filled.svg?react"
import { red } from "@mui/material/colors"
import Comment from "../..//components/Comment"


const ProductData = ({targetItemFromData}) => {
    const setAnimate = useAnimateStore(state => state.setAnimate)
    const wishlistItems = useWishlistItemsStore(state => state.wishlistItems)
    const setWishlistItems = useWishlistItemsStore(state => state.setWishlistItems)
    const storedProductId = useProductDetailsStore(state => state.storedProductId)
    const isSmallLaptop = useMediaQueryStore(state => state.isSmallLaptop)
    
    // const [isAddedToWishlist, setIsAddedToWishlist] = usePersistantState(false, "isAddedToWishlist" + storedProductId)    
    const {name, price, image, description, rating, id, type, brand, imageList = []} = targetItemFromData

    const isAddedToWishlist = wishlistItems.some((item) => item.id === storedProductId) ? true : false


    function handleAddOrRemoveWishlist() {
        let copyOfWishlistItems = [...wishlistItems]

        if(isAddedToWishlist) {
            let filteredWishlistItems = copyOfWishlistItems.filter(item => item.id !== storedProductId)
            setWishlistItems(filteredWishlistItems)
            setAnimate(false)
        } else {
            let newWishlistItem = {
                id: id,
                name: name,
                price: price,
                type: type,
                brand: brand,
                image: image,
            }
            copyOfWishlistItems.push(newWishlistItem)
            setWishlistItems(copyOfWishlistItems)
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 1500)
        }

    }



    return (
    <Box   
    display="flex"
    flexDirection="column"
    alignItems={{xs: "center",md:"start"}}
    justifyContent="center"
    pt="50px"
    width="100%"    
    paddingInline="30px"
    boxSizing="border-box"
    sx={{
        background: "white",
        boxShadow: {xs: `0px -3px 10px rgba(0, 0, 0, 0.2)`, md: `0px 0px 10px rgba(0, 0, 0, 0.2)`},
        borderRadius: {xs: "16px", md: "0px"},
    }}
    >
        <Stack direction={{xs: "column", md: "column"}} justifyContent="space-between" alignItems={{xs:"start", md: "start"}} 
        gap={3}
        width="100%"
        >
            <Typography variant="h3" component="h1" color={colors.textPrimary} letterSpacing="2px" sx={{fontWeight: 500}}>
                {name}
            </Typography>
            <Typography component="h2" sx={{ color: colors.primary, letterSpacing: "3px", fontWeight: 700, fontSize: "40px"}}>
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

        {isSmallLaptop && 
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
            <Typography fontSize="16px" color={colors.textSecondary}>
                {description}
            </Typography>
        </Box>                   

        <Box 
            position="relative"
            width="100%"
            mt="80px"
            pb="100px"
        >
            <Typography variant="h4" component="h2">
                Comments
            </Typography>
            <Box mb="30px" mt="20px" sx={{
                borderTop: "2px dashed rgba(0, 0, 0, 0.2)"
            }}/>
            <Box 
            position="absolute" 
            top={0}
            right={{xs: 20 ,sm: 80}}
            sx={{
                borderRight: "2px dashed rgba(0, 0, 0, 0.3)",
                height: "100%",
            }}/>
            <Box 
            position="absolute" 
            top={0}
            right={{xs: 90 ,sm: 150}}
            sx={{
                borderRight: "2px dashed rgba(0, 0, 0, 0.4)",
                height: "100%",
            }}/>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="30px" width="100%">
                <Comment/>
                <Comment/>
                <Comment/>
            </Box>
        </Box>
    </Box>

)
}

export default ProductData