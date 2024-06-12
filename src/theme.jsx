import { createTheme, responsiveFontSizes } from "@mui/material";

export const primaryColor = "#74392A"
export const primaryColorLight = "#B05D48"
export const primaryColorVeryLight = "#C67560"
export const secondaryColor = "#4E3D94"
export const secondaryColorLight = "#6148C7"
export const secondaryColorVeryLight = "#D7CDF2"
export const accentColor = "#3D944E"
export const accentColorLight = "#83ED98"
export const darkBackgroundColor = "#333333"
export const generalBackgroundColor = "#FAF6F4"



const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: primaryColorLight
        },
        secondary: {
            main: secondaryColorLight
        },
        info: {
            main: accentColor
        },
    },
    typography: {
        h2: {
            fontWeight: 100,
            letterSpacing: "2px"
        }
    }
})

export default responsiveFontSizes(theme)

// might be better to remove hover effect for iconbuttons