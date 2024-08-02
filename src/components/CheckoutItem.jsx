import { Badge, Box, Stack, Typography } from "@mui/material"
import React from "react"

const CheckoutItem = ({data}) => {
    const {image, name, price, type, count, id} = data
    let modifiedName = name.substring(0, 8) + "..."

    return (
        <Box 
            display="flex"
            justifyContent="space-between"
            gap={3}
            marginBlock="20px"
            width="420px"
        >
            <Stack direction="row" gap={3}>

            <Badge badgeContent={count} color="secondary" sx={{
                ["& .MuiBadge-badge"]: {
                    minWidth: "25px",
                    height: "25px",
                    fontSize: "0.95rem",
                    borderRadius: "100%"
                }
            }}  >
                <Box
                    sx={{
                        width: {xs: "100px", sm: "130px", md:"100px"},
                        height: "110px",
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundColor: "white"
                    }}
                    
                    >
                </Box>
            </Badge>
            <Box>
                    <Typography variant="h5">
                        {name ? modifiedName : "Guitar"}
                    </Typography>
                {/* <Stack direction="row">
                </Stack> */}
                    <Typography variant="subtitle1">
                        Type: {type}
                    </Typography>
                    <Typography variant="subtitle1">
                        Other Info if needed
                    </Typography>
            </Box>
            </Stack>
                    <Typography variant="h6" ml="50px">
                        ${price}
                    </Typography>
        </Box>
    )
}

export default CheckoutItem