import { SWRConfig } from "swr";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const cache = createCache({ key: "blog", prepend: true });

const App = ({ Component, pageProps }) => {
    return (
        <CacheProvider value={cache}>
            <SWRConfig
                value={{
                    fetcher: (resource, init) =>
                        fetch(resource, init).then((res) => res.json()),
                }}
            >
                <CssBaseline />
                <Component {...pageProps} />
            </SWRConfig>
        </CacheProvider>
    );
};

export default App;
