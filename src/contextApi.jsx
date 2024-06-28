import React, { createContext, useEffect, useState } from "react"

export const context = createContext()

const AppContext = ({children}) => {
    const [storedProductId, setStoredProductId] = useState()
    return (
        <context.Provider value={{storedProductId, setStoredProductId}}>
            {children}
        </context.Provider>
    )
}

export default AppContext