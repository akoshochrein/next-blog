import { Stack, Typography, useMediaQuery } from "@mui/material";
import { format } from "date-fns";
import { useEffect } from "react";

export const Headline = ({ article }) => {
    const isMobile = useMediaQuery((theme: any) =>
        theme.breakpoints.down("md")
    );

    useEffect(() => {
        console.log(isMobile);
    }, [isMobile]);
    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems={isMobile ? "flex-start" : "center"}
            marginBottom={2}
            gap={2}
        >
            <Typography variant="h1">{article.title}</Typography>
            <Stack
                direction="column"
                alignItems={isMobile ? "flex-start" : "flex-end"}
            >
                <Typography variant="h4" align="right">
                    {format(new Date(article.publishedAt), "PPP")}
                </Typography>
                <Typography variant="body2" align="right">
                    Reading time: ~
                    {Math.round(article.text.split(" ").length / 200)} minutes
                </Typography>
            </Stack>
        </Stack>
    );
};
