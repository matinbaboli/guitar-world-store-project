import React from "react"
import {
    Tooltip
} from "@mui/material"
const TooltipModified = ({children, title, placement}) => {
    return (
        <Tooltip title={title} placement={placement} arrow 
        componentsProps={{
            tooltip: {
                sx: {
                    p: 1,
                    fontSize: "0.8rem",
                    letterSpacing: "1px"
                }
            }
        }}
        slotProps={{
            popper: {
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, -14]
                        }
                    }
                ]
            }
        }}>
            {children}
        </Tooltip>
    )
}

export default TooltipModified