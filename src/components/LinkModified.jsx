import React from "react"
import {Link} from "react-router-dom"

const LinkModified = ({to, children}) => {
    return (
        <Link to={to} style={{color: "white", textDecoration: "none"}}>
            {children}
        </Link>
    )
}

export default LinkModified