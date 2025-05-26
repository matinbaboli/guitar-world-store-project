import React from "react"
import {Link} from "react-router-dom"
import { colors } from "../style/colors"

const LinkModified = ({to, children, color = colors.mainbackground}) => {
    return (
        <Link to={to} style={{color: color, textDecoration: "none"}}>
            {children}
        </Link>
    )
}

export default LinkModified