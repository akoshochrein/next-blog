import "typeface-fira-sans";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Fira Sans",
        h1: {
            fontSize: 56,
            fontWeight: 500,
        },
        h2: {
            fontSize: 48,
            marginBottom: 24,
            marginTop: 24,
            "> div": {
                display: "inline",
            },
        },
        h4: {
            fontSize: 30,
        },
        h5: {
            fontWeight: 500,
        },
        body1: {
            fontSize: 18,
            marginBottom: 18,
            "> div": {
                display: "inline",
            },
        },
    },
});
