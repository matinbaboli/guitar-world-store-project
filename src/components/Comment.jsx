import React from "react"
import { 
    Box,
    Avatar,
    Stack,
    Typography,
    Rating,
    Button
 } from "@mui/material"
import { colors } from "../style/colors"


const Comment = () => {
    return (
        <Box 
        position="relative"
        width={{xs:"90%", lg: "80%"}} 
        marginBlock="20px"
        pt="35px"
        pb="15px"
        paddingInline="30px"
        sx={{
            background: "white",
            border: `2px solid ${colors.primary}`,
            borderRadius: "20px"
        }}>
            <Avatar variant="circular" sx={{
                background: colors.primary,
                width: "50px",
                height: "50px",
                position: "absolute",
                top: -25,
                left: -20
            }}>
                NA
            </Avatar>
            <Typography sx={{
                color: colors.textPrimary,
                background: "white",
                padding: "5px",
                position: "absolute",
                top: -18,
                left: 40,
                fontSize: "17px",
                fontWeight: 500

            }}>
                Name
            </Typography>
            <Rating size="small" name="comment-rating" defaultValue={2} readOnly/>
            <Typography mt="10px" color={colors.textPrimary}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores provident quia repudiandae atque incidunt? Repellat, recusandae quam! Quos, nobis.
            </Typography>
            <Stack direction="row" gap="16px" mt="20px">
                <Button variant="outlined" color="primary" sx={{
                    borderColor: colors.secondary,
                    fontSize: "14px",
                    padding: "5px 8px", 
                }}>
                    reply
                </Button>
                <Button variant="contained" color="primary" sx={{
                    borderColor: colors.secondary,
                    fontSize: "14px",
                    padding: "5px 8px", 
                }}>
                    view replies (2)
                </Button>
            </Stack>
        </Box>
    )
}

export default Comment