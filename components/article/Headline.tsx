import { Stack, Typography } from "@mui/material";
import { format } from "date-fns";

export const Headline = ({ article }) => (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
    >
        <Typography variant="h1">{article.title}</Typography>
        <Stack direction="column" alignItems="flex-end">
            <Typography variant="h4">
                {format(new Date(article.publishedAt), "PPP")}
            </Typography>
            <Typography variant="body2">
                Reading time: ~
                {Math.round(article.text.split(" ").length / 200)} minutes
            </Typography>
        </Stack>
    </Stack>
);
