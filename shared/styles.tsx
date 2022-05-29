import "typeface-fira-sans";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Fira Sans",
        h2: {
            fontSize: 48,
            marginBottom: 24,
        },
        h5: {
            fontWeight: 500,
        },
    },
});
