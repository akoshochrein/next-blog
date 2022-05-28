import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled(AppBar)`
    background-color: white;
`;

export const Header = () => {
    const pages = ["Products", "Pricing", "Blog"];
    return (
        <Wrapper position="static" elevation={0}>
            <Container>
                <Toolbar disableGutters>
                    <Image
                        src="/images/logo-temp.svg"
                        width={30}
                        height={30}
                        alt="Logo"
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </Wrapper>
    );
};
