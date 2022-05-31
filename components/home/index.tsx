import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    ButtonBase,
    Avatar,
    Tooltip,
    Skeleton,
} from "@mui/material";
import useArticles from "../../shared/hooks/useArticles";
import { Article, Author } from "../../shared/models";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Image from "next/image";
import { Divider } from "../shared/Divider";

export const AuthorAvatar = ({
    author,
    size = 48,
}: {
    author: Author;
    size?: number;
}) => (
    <Tooltip
        title={`Published by ${author.firstName} ${author.lastName}`}
        placement="bottom"
    >
        <Avatar sx={{ width: size, height: size }}>
            <Image
                src={author.avatar.file.url}
                width={size}
                height={size}
                alt={`Picture of ${author.firstName} ${author.lastName}`}
            />
        </Avatar>
    </Tooltip>
);

const ArticleCard = ({ article: article }: { article: Article }) => {
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
                            alignItems="center"
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

export const Home = () => {
    const { articles, loading } = useArticles();
    return (
        <Stack component="main" direction="column">
            <Typography variant="h2">Most recent articles</Typography>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 3 }}
                alignItems="stretch"
            >
                {loading ? (
                    <>
                        <Grid item xs={1} sm={1} md={1}>
                            <Skeleton variant="rectangular" height="210px" />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Skeleton variant="rectangular" height="210px" />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Skeleton variant="rectangular" height="210px" />
                        </Grid>
                    </>
                ) : (
                    articles.map((article) => (
                        <Grid item xs={1} key={article.title}>
                            <ArticleCard article={article} />
                        </Grid>
                    ))
                )}
            </Grid>
            <Divider />
        </Stack>
    );
};
