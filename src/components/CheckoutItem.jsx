import { Badge, Box, Stack, Typography } from "@mui/material"
import React from "react"
import { colors } from "../style/colors"

const CheckoutItem = ({data}) => {
    const {image, name, price, type, count, id} = data
    let modifiedName = name.substring(0, 15) + "..."

    return (
        <Box 
            display="flex"
            justifyContent="center"
            gap={0}
            paddingBlock="20px"
            minWidth="100%"
        >
            <Stack direction={{xs: "column", md: "row"}} alignItems={{xs: "center", md: "start"}} gap="13px" width="100%">
                <Box
                    sx={{
                        width:"120px",
                        height: "120px",
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundColor: "white",
                        border: `1px solid ${colors.secondary}`,
                        borderRadius: "8px",
                    }}
                    >
                </Box>
                <Stack width="calc(100% - 150px)" alignItems={{xs: "center", md: "start"}}  gap={1}>
                    <Stack direction={{sm: "row"}} gap={1} width={{md: "100%"}} justifyContent="space-between" alignItems={{xs: "center"}}>
                        <Typography fontSize="20px">
                            {name ? modifiedName : "Guitar"}
                        </Typography>
                        <Typography variant="h6">
                            ${price}
                        </Typography>
                    </Stack>
                    <Typography fontSize="16px" color={colors.textSecondary}>
                        Type: {type}
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="12px" border={`1px solid ${colors.secondary}`} borderRadius="8px" width="100px" p="5px 0px">
                        <Typography fontSize="16px" color={colors.textSecondary}>
                            Count: 
                        </Typography>
                        <Typography sx={{
                            background: colors.primary,
                            color: colors.mainbackground,
                            borderRadius: "5px",
                            width: "25px",
                            height: "25px",
                            textAlign: "center"
                        }}>
                            {count}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CheckoutItem