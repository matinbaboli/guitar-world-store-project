import React, { useContext } from "react"
import { 
    Box, 
    Typography, 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Rating
 } from "@mui/material"
 import {primaryColor, secondaryColor, secondaryColorLight} from "../theme"
 import LinkModified from "./LinkModified.jsx"
import { context } from "../contextApi.jsx"
import TooltipModified from "./TooltipModified.jsx"


const CardCustomized = ({outOfTurn, end, start, myClass, small , data, darkBackground}) => {
    const {setStoredProductId} = useContext(context)
    const {name, image, price , rating, id} = data
    let modifiedName = name.substring(0, 18) + "..."

    return <LinkModified to={`ProductDetails/${id}`}>
    <Card 
    onClick={() => {
        // localStorage.setItem("productId", id)
        setStoredProductId(id)
    }} 
    className={myClass} 
            sx={{ 
                opacity: (outOfTurn && (start || end) && "70%") || outOfTurn && "0%",
                position: outOfTurn && "absolute",
                right: end && {xs: "-20px", sm: "40px",md: "0px", lg: "-23px"},
                left: start && {xs: "-20px", sm: "40px", md: "24px", lg: "0px"},
                top: "0px",
                zIndex: outOfTurn && "-1",
                overflow: "initial", 
                boxShadow: "none", 
                background: "none",
                pointerEvents: outOfTurn ?"none" : "initial",
                
                }}>
                <CardActionArea>
                    <CardMedia
                    image={image ? image:"images/guitar-pic.jpg"}
                    alt="guitar-title"
                    sx={{
                        position: "relative",
                        border: `1px solid ${secondaryColor}`,
                        height: small ? 320 : {xs: "320px",lg:"350px"},
                        width: small ? {xs: 300, lg: 280}: {xs: 300, lg: 335}, 
                        transform: outOfTurn && "scale(0.85)",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundColor: "white",
                        borderRadius: "4px",
                        boxShadow:`0px 1px 1px 1px ${darkBackground ? "rgba(0, 0, 0, 0.5)": secondaryColorLight}, 0px 4px 15px ${darkBackground ? "rgba(0, 0, 0, 0.5)": secondaryColorLight}`,
                        // transition: "all 0.3s ease-in-out",

                    }}
                    >
                        <Box  sx={{
                                position: "absolute",
                                top: "0",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                zIndex: "0",
                                background: `linear-gradient(to top, ${primaryColor} -30%, rgba(0, 0, 0, 0) 20%)`,
                                opacity: 0.7,
                            }}
                        ></Box>
                        <Typography color={primaryColor} variant="h6" 
                        sx={{position: "absolute",
                            bottom: "0",
                            zIndex: "1",
                            m: "10px"
                        }}>
                            {price ? `$${price}`:"$9.99"}
                        </Typography>
                        <Rating
                        name="rating"
                        readOnly
                        size="small"
                        value={rating}
                        precision={0.1}
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex: 1,
                            marginBlock: "15px",
                            mr: "10px"
                        }}
                        />
                    </CardMedia>
                    <CardContent>
                    {!outOfTurn && 
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            color: darkBackground ? "rgba(255, 255, 255, 0.8)": "black"
                        }}>
                            {name ? modifiedName :"Guitar"}
                        </Typography>
                    }
                    </CardContent>
                </CardActionArea>
            </Card> 
        </LinkModified>
}

export default CardCustomized