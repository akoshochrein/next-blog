import { Container, IconButton, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
    return (
        <Container component="footer">
            <Stack direction="column" textAlign="center" gap={1}>
                <Stack direction="row" gap={2} justifyContent="center">
                    <IconButton
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/akoshochrein"
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/akoshochrein/"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/akoshochrein"
                    >
                        <GitHubIcon />
                    </IconButton>
                </Stack>
                <Typography variant="body2">
                    © Akos Hochrein, {new Date().getFullYear()}
                </Typography>
            </Stack>
        </Container>
    );
};
