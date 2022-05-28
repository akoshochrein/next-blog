import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const cache = createCache({ key: "blog", prepend: true });

const App = ({ Component, pageProps }) => {
    return (
        <CacheProvider value={cache}>
            <CssBaseline />
            <Component {...pageProps} />
        </CacheProvider>
    );
};

export default App;
