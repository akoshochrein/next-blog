import "typeface-fira-sans";
import { createTheme, darkScrollbar } from "@mui/material";

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
        },
        h3: {
            fontSize: 36,
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
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowY: "scroll",
                    ...darkScrollbar(),
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontSize: 18,
                },
            },
            variants: [],
        },
    },
});
