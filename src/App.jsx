import React, {useState, useEffect}  from "react"
import Homepage from "./pages/homepage"

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
        return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    })
    
    return <>
        <Homepage windowWidth={windowWidth}/>
    </>
}

export default App;