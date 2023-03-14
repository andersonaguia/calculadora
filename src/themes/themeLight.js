import { createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            dark: "#00863F",
            light: "#87C984",
            contrastText: "#3E5055"

        },
        secondary: {
            main: "#00A355"
        },
        background: {
            default: "#FFFFFF",
            paper: "FFFFFF"
        },
        text: {
            primary: "#3E5055",
            secondary: "8B979F"
        }        
    }
});