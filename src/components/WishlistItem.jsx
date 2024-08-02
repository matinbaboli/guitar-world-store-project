import React from "react"
import {
    Box,
    Typography,
    Stack,
    Button,

} from "@mui/material"
import { primaryColorVeryLight, secondaryColorLight } from "../theme"
import { red } from "@mui/material/colors"
import LinkModified from "./LinkModified"
import {context} from "../contextApi"

const WishlistItem = ({data}) => {
    const {image, name, type, id} = data
    const {setStoredProductId, wishlistItems, setWishlistItems} = React.useContext(context)
    const [isHovered, setIsHovered] = React.useState()

    let modifiedName = name.substring(0, 15) + "..."

    function handleDelete() {
        let copiedWishlistItems = [...wishlistItems]
        let filteredList = copiedWishlistItems.filter(item => item.id !== id)
        setWishlistItems(filteredList)
        localStorage.removeItem("state:isAddedToWishlist" + id)
    }


    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            // border={`1px solid ${primaryColorVeryLight}`}
            border="1px solid rgba(0, 0, 0, 0.9)"
            width={{xs: "100%"}}
            minWidth={{sm: "250px"}}
            paddingBottom="10px"
            borderRadius="10px"
            overflow="hidden"
            sx={{
                userSelect: "none"
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => {
                setTimeout(() => setIsHovered(false), 300)
                
            }}
        >
            <Box 
                width="100%"
                height="490px"
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
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) -15%, rgba(0, 0, 0, 0.2) 160%)",
                transform: `scaleY(${isHovered ? 1 : 0})`,
                transformOrigin: "bottom",
                transition: "transform 300ms ease-in-out",
            }}
            >
                <Typography variant="h5" component="h2" mt="10px" mb="20px" color="white">
                    {name ? modifiedName : "Guitar"}
                </Typography>
                <Stack>
                    <Stack alignItems="center" mb="10px">
                        <Typography variant="body1" letterSpacing="2px" color="#CBC8C8" mb="5px"> 
                            Type
                        </Typography>
                        <Typography variant="body2" letterSpacing="2px" color="white"> 
                            {type}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" mb="10px">
                        <Typography variant="body1" letterSpacing="2px" color="#CBC8C8" mb="5px"> 
                            Saved on
                        </Typography>
                        <Typography variant="body2" letterSpacing="2px" color="white"> 
                            4/29/21
                        </Typography>
                    </Stack>
                </Stack>
                <Stack gap={1}>
                    <LinkModified to={`ProductDetails/${id}`}>
                        <Button onClick={() => setStoredProductId(id)} variant="text" size="medium" sx={{
                            mt: "20px",
                            color: secondaryColorLight,
                            
                        }}>
                            view product
                        </Button>
                    </LinkModified>
                    <Button onClick={handleDelete} variant="text" size="medium" sx={{
                        mt: "0px",
                        color: red[700],
                        
                    }}>
                        remove
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

        // <Box 
        //     display="flex"
        //     flexDirection="column"
        //     alignItems="center"
        //     justifyContent="center"
        //     // border={`1px solid ${primaryColorVeryLight}`}
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
        //             color: secondaryColorLight,
                    
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