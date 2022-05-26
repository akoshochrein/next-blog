import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import light from "../styles/theme/light";

const cache = createCache({ key: "blog" });

const App = ({ Component, pageProps }) => {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={light}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
