import { SWRConfig } from "swr";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../shared/styles";

const cache = createCache({ key: "blog", prepend: true });

const App = ({ Component, pageProps }) => {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <SWRConfig
                    value={{
                        fetcher: (resource, init) =>
                            fetch(resource, init).then((res) => res.json()),
                    }}
                >
                    <CssBaseline />
                    <Component {...pageProps} />
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
