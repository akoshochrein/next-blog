import { Box, Container } from "@mui/material";
import { Divider } from "../shared/Divider";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
    return (
        <Box component="div">
            <Header />
            <Container>{children}</Container>
            <Footer />
        </Box>
    );
};

export default Layout;
