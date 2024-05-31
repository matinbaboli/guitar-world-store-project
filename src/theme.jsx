import { createTheme, responsiveFontSizes } from "@mui/material";

export const primaryColor = "#74392A"
export const primaryColorLight = "#B05D48"
export const secondaryColor = "#4E3D94"
export const secondaryColorLight = "#6148C7"
export const accentColor = "#3D944E"
export const accentColorLight = "#83ED98"
export const darkBackgroundColor = "#333333"


const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColorLight
        },
        info: {
            main: accentColor
        },
    }
})

export default responsiveFontSizes(theme)