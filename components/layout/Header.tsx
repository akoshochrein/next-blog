import { AppBar, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "white",
                color: "inherit",
                paddingY: 1,
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    gap={4}
                    alignItems="center"
                    alignContent="center"
                >
                    <Link passHref href="/" style={{ textDecoration: "none" }}>
                        <Image
                            src="/images/jojo-lojo-smallest.png"
                            width={100}
                            height={129}
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
                </Stack>
            </Container>
        </AppBar>
    );
};
