import React, { useState } from "react"
import {
    Box,
    Typography,
    Stack,
    Button,
    lighten,
    darken,

} from "@mui/material"
import { red } from "@mui/material/colors"
import LinkModified from "./LinkModified"
import { colors } from "../style/colors"
import { useProductDetailsStore, useWishlistItemsStore } from "../store/usePersistantStateStore"
import { MotionBox } from "./MotionComponents"
import { AnimatePresence } from "framer-motion"


const WishlistItem = ({data}) => {
    const {image, name, type, id} = data
    // const { wishlistItems, setWishlistItems} = React.useContext(context)
    const wishlistItems = useWishlistItemsStore(state => state.wishlistItems)
    const setWishlistItems = useWishlistItemsStore(state => state.setWishlistItems)
    const [isHovered, setIsHovered] = React.useState()
    const setStoredProductId = useProductDetailsStore(state => state.setStoredProductId)
    const [isExiting, setIsExiting] = useState(false);
    let modifiedName = name.substring(0, 15) + "..."

    const handleRemove = () => {
        setIsExiting(true);
        console.log("trigger")
    };


    function handleDelete() {
        let copiedWishlistItems = [...wishlistItems]
        let filteredList = copiedWishlistItems.filter(item => item.id !== id)
        setWishlistItems(filteredList)
        localStorage.removeItem("state:isAddedToWishlist" + id)
    }


    return (
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            border={`1px solid ${colors.secondary}`}
            width={{xs: "100%"}}
            minWidth={{xs: "240px"}}
            paddingBottom="10px"
            borderRadius="10px"
            overflow="hidden"
            sx={{
                userSelect: "none"
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => {
                setTimeout(() => setIsHovered(false), 100)
                
            }}
        >
            <Box 
                width="100%"
                height="440px"
                sx={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                draggable={false}
            />
            <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="end"
            gap={6}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={1}
            pb={4}
            sx={{
                background: lighten("rgba(166, 124, 82, 0.85)", 0.85),
                // background: darken("rgba(85, 101, 119, 0.9)", 0.2),
                opacity: isHovered ? 1: 0,
                transition: "opacity 200ms ease-in-out",
                color: colors.primary
            }}
            >
                <Typography variant="h5" component="h2" mt="10px" mb="20px">
                    {name ? modifiedName : "Guitar"}
                </Typography>
                <Stack>
                    <Stack alignItems="center" mb="10px">
                        <Typography variant="body1" letterSpacing="2px" mb="5px"> 
                            Type
                        </Typography>
                        <Typography variant="body2" letterSpacing="2px" color={colors.accent}> 
                            {type}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" mb="10px">
                        <Typography variant="body1" letterSpacing="2px" mb="5px"> 
                            Saved on
                        </Typography>
                        <Typography variant="body2" letterSpacing="2px" color={colors.accent}> 
                            4/29/21
                        </Typography>
                    </Stack>
                </Stack>
                <Stack gap={1.5}>
                    <LinkModified to={`/product-details/${id}`}>
                        <Button onClick={() => setStoredProductId(id)} variant="contained" size="small" sx={{
                            mt: "20px",
                            paddingInline: "20px"
                            // color: colors.primary,
                            
                        }}>
                            view product
                        </Button>
                    </LinkModified>
                    <Button onClick={handleRemove} variant="contained" size="small" sx={{
                        mt: "0px",
                        color: colors.accent,
                        background: lighten(colors.accent, 0.8),
                        "&:hover": {
                            color: colors.mainbackground,
                            background: lighten(colors.accent, 0.2),
                        }
                        
                    }}>
                        remove
                    </Button>
                </Stack>
            </Box>
        </MotionBox>
    </AnimatePresence>

    )
}

        // <Box 
        //     display="flex"
        //     flexDirection="column"
        //     alignItems="center"
        //     justifyContent="center"
        //     border="1px solid rgba(0, 0, 0, 0.9)"
        //     width={{xs: "70%"}}
        //     minWidth={{sm: "250px"}}
        //     paddingBottom="10px"
        //     borderRadius="10px"
        //     overflow="hidden"
        //     sx={{
        //         userSelect: "none"
        //     }}
        // >
        //     <Box 
        //         width="100%"
        //         height="200px"
        //         sx={{
        //             backgroundImage: `url(${image})`,
        //             backgroundRepeat: "no-repeat",
        //             backgroundSize: "contain",
        //             backgroundPosition: "center",
        //         }}
        //         draggable={false}
        //     />
        //     <Typography variant="h5" component="h2" mt="10px" mb="20px">
        //         {name ? modifiedName : "Guitar"}
        //     </Typography>
        //     <Stack alignItems="center" mb="10px">
        //         <Typography variant="body1" letterSpacing="2px" color="#666666" mb="5px"> 
        //             Type
        //         </Typography>
        //         <Typography variant="body2" letterSpacing="2px" color="#9E9E9E"> 
        //             {type}
        //         </Typography>
        //     </Stack>
        //     <Stack alignItems="center" mb="10px">
        //         <Typography variant="body1" letterSpacing="2px" color="#666666" mb="5px"> 
        //             Saved on
        //         </Typography>
        //         <Typography variant="body2" letterSpacing="2px" color="#9E9E9E"> 
        //             4/29/21
        //         </Typography>
        //     </Stack>
        //     <LinkModified to={`ProductDetails/${id}`}>
        //         <Button onClick={() => setStoredProductId(id)} variant="text" size="medium" sx={{
        //             mt: "20px",
                    
        //         }}>
        //             view product
        //         </Button>
        //     </LinkModified>
        //     <Button onClick={handleDelete} variant="text" size="medium" sx={{
        //         mt: "0px",
        //         color: red[700],

        //     }}>
        //         remove
        //     </Button>
        // </Box>
export default WishlistItem