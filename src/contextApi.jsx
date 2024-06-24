import React, { createContext, useState } from "react"

export const context = createContext()

const AppContext = ({children}) => {

    return (
        <context.Provider>
            {children}
        </context.Provider>
    )
}

export default AppContext