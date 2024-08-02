import React, {useEffect, useContext, useState} from "react"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import DeleteIcon from "../../public/delete-icon.svg?react"
import LinkModified from "./LinkModified.jsx"
import {context} from "../contextApi"
import PlusIcon from "../../public/plus-icon.svg?react"
import MinusIcon from "../../public/minus-icon.svg?react"



const CartItem = ({props}) => {
    const {image, name, price, type, count, id} = props
    const {shoppingCartItems, setShoppingCartItems, setStoredProductId} = useContext(context)
    const [counter, setCounter] = useState(count || 0)

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


    return  <Box 
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            width={{xs: "90%", sm:"550px", md: "750px"}}
            >
                <Stack direction="row" gap={{xs: 3, md: 8}}> 
                        <Box 
                        display="flex"
                        flexDirection="column"
                        sx={{
                            border: `2px solid ${secondaryColor}`,
                            borderRadius: "10px",
                            overflow: "hidden",
                            bgcolor: "white"
                        }}
                        >
                            <Box
                                sx={{
                                    width: "140px",
                                    height: "140px",
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundColor: "white"
                                }}
                                
                                >
                            </Box>
                            <Box 
                            display="flex"
                            justifyContent="center"
                            gap={2}
                            sx={{
                                background: secondaryColor,
                                color: "white",
                                paddingBlock: "5px",
                            }}
                            >
                                <IconButton onClick={() => {
                                    if (counter <= 1) {
                                        handleDelete() 
                                    } else {
                                        setCounter(counter - 1)   
                                    }
                                }}>
                                    <MinusIcon style={{width: "15px"}}/>
                                </IconButton>
                                <Typography variant="h4">{counter}</Typography>
                                <IconButton onClick={() => setCounter(counter + 1)}>
                                    <PlusIcon style={{width: "15px"}}/>
                                </IconButton>
                            </Box>
                            
                        </Box>
                            <Box
                            display="flex"
                            flexDirection="column"
                            gap={{xs: 2.5, md: 5}}
                            >
                            <Box pl="8px">
                            <Typography variant="h5" >
                            {name}
                            </Typography>
                            <Typography variant="body1" marginBlock={{xs:"5px", md: "15px"}}>
                            Type: {type}
                            </Typography>
                            <Typography variant="body1" >
                            ${price}
                            </Typography>
                            </Box>
                            <LinkModified to={`ProductDetails/${id}`}>
                                <Button
                                onClick={() => {
                                    // localStorage.setItem("productId", id)
                                    setStoredProductId(id)
                                }}                             
                                sx={{
                                    color: secondaryColorLight
                                }}>view product</Button>
                            </LinkModified>
                        </Box>
                    </Stack>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
                </Box>
            }
        

export default CartItem