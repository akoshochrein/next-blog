import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    ButtonBase,
} from "@mui/material";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { Summary } from "../../shared/models";

import { AuthorAvatar } from "../home/authorAvatar";

export const ArticleCard = ({ article }: { article: Summary }) => {
    const router = useRouter();
    return (
        <Card variant="outlined" sx={{ height: "100%" }}>
            <ButtonBase
                sx={{ display: "block", textAlign: "initial", height: "100%" }}
                onClick={() => router.push(`/article/${article.slug}`)}
            >
                <CardContent sx={{ height: "100%", p: 2 }}>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        height="100%"
                        gap={2}
                    >
                        <Box>
                            <Typography variant="h5">
                                {article.title}
                            </Typography>
                            <Typography variant="subtitle1">
                                {article.summary}
                            </Typography>
                        </Box>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="end"
                        >
                            <AuthorAvatar author={article.author} />
                            <Typography variant="caption" textAlign="end">
                                {format(new Date(article.publishedAt), "PPP")}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </ButtonBase>
        </Card>
    );
};
