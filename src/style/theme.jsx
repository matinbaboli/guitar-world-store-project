import { createTheme, responsiveFontSizes } from "@mui/material";
import { colors } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary
        },
        info: {
            main: colors.accent
        },
    },
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontSize: "96px",
            fontWeight: 600
        },
        h2: {
            fontSize: "60px",
            fontWeight: 100,
            letterSpacing: "2px"
        },
        h3: {
            fontSize: "35px",
            fontWeight: 800
        },
        h5: {
            fontSize: "22px",
            fontWeight: 400
        },
        h6: {
            fontSize: "16px",
            fontWeight: 100
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    fontWeight: 400,
                    borderRadius: "8px",
                    letterSpacing: "1px"
                    // minWidth: "150px"  
                }
            }
        }
    }
    
})

export default responsiveFontSizes(theme)

// might be better to remove hover effect for iconbuttons