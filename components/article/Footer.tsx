import { Stack, Typography } from "@mui/material";
import { AuthorAvatar } from "../home/authorAvatar";

export const Footer = ({ article }) => (
    <Stack direction="row" gap={4} justifyContent="flex-end">
        <Stack direction="column" justifyContent="center">
            <Typography variant="h6" textAlign="end">
                {article.author.firstName} {article.author.lastName}
            </Typography>
            <Typography textAlign="end" variant="subtitle1">
                {article.author.bio}
            </Typography>
        </Stack>
        <AuthorAvatar author={article.author} size={80} />
    </Stack>
);
