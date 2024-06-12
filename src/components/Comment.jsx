import React from "react"
import { 
    Box,
    Avatar,
    Stack,
    Typography,
    Rating,
    Button
 } from "@mui/material"
 import {primaryColor, primaryColorVeryLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"


const Comment = () => {
    return (
        <Box width="300px" marginBlock="20px">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" alignItems="center" gap={2}>
                    <Avatar variant="rounded" sx={{
                        background: primaryColorVeryLight
                    }}>
                        NA
                    </Avatar>
                    <Typography>
                        Name
                    </Typography>
                </Stack>
                <Rating size="small" name="comment-rating" defaultValue={2} readOnly/>
            </Stack>
            <Typography 
                marginBlock="10px"
                paddingBlock="15px"
                paddingInline="15px"   
                sx={{
                    borderLeft: `2px solid ${primaryColorVeryLight}`,
                    borderRight: `2px solid ${primaryColorVeryLight}`
                }}
                >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores provident quia repudiandae atque incidunt? Repellat, recusandae quam! Quos, nobis.
            </Typography>
            <Stack direction="row">
                <Button>
                    reply
                </Button>
                <Button color="secondary">
                    view replies (2)
                </Button>
            </Stack>
        </Box>
    )
}

export default Comment