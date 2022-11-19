import { Box, Container } from "@mui/material";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children, titleSuffix = "" }) => {
    return (
        <Box component="div">
            <Head>
                <title>{`Akos Hochrein&apos;s Blog${titleSuffix}`}</title>
                <meta
                    name="description"
                    content="Akos Hochrein's blog about coding, management, leadership and cooking"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </Box>
    );
};

export default Layout;
