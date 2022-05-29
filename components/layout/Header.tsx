import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled(AppBar)`
    background-color: white;
    color: inherit;
`;

export const Header = () => {
    const pages = ["Products", "Pricing", "Blog"];
    return (
        <Wrapper position="static" elevation={0}>
            <Container>
                <Stack direction="row" gap={4} alignItems="center">
                    <Link passHref href="/" style={{ textDecoration: "none" }}>
                        <Image
                            src="/images/logo-temp.svg"
                            width={30}
                            height={30}
                            alt="Logo"
                            style={{ cursor: "pointer" }}
                        />
                    </Link>

                    <Link passHref href="/" style={{ textDecoration: "none" }}>
                        <Typography
                            variant="h1"
                            noWrap
                            fontSize="24px"
                            fontWeight="normal"
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            Akos Hochrein&apos;s Space
                        </Typography>
                    </Link>
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
                </Stack>
            </Container>
        </Wrapper>
    );
};
