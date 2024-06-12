import { Badge, Box, Stack, Typography } from "@mui/material"
import React from "react"

const CheckoutItem = () => {
    return (
        <Box 
            display="flex"
            gap={3}
            marginBlock="20px"
        >
            <Badge badgeContent={3} color="primary" sx={{
                ["& .MuiBadge-badge"]: {
                    minWidth: "25px",
                    height: "25px",
                    fontSize: "0.95rem",
                    borderRadius: "100%"
                }
            }}  >
                <Box
                    component="img"
                    alt="item-picture"
                    src="../../public/images/guitar-pic.jpg"
                    sx={{width: {xs: "100px", sm: "150px", md:"180px"},}}
                    >
                </Box>
            </Badge>
            <Stack>
                <Typography variant="h5">
                    Guitar
                </Typography>
                <Typography variant="subtitle1">
                    Type: Acoustic
                </Typography>
                <Typography variant="subtitle1">
                    Other Info if needed
                </Typography>
            </Stack>
            <Typography variant="h5" ml="50px">
                $100
            </Typography>
        </Box>
    )
}

export default CheckoutItem