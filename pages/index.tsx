import Head from "next/head";
import Layout from "../components/layout";
import { Grid, Typography, Stack, Skeleton } from "@mui/material";
import { ArticleCard } from "../components/home/articleCard";
import { Divider } from "../components/shared/Divider";
import useArticleSummaries from "../shared/hooks/useArticleSummaries";

export default function HomePage() {
    const { summaries: posts, loading } = useArticleSummaries({ take: 3 });
    return (
        <Layout>
            <Head>
                <title>Akos Hochrein&apos;s Blog</title>
                <meta
                    name="description"
                    content="Akos Hochrein's blog about coding, management, leadership and cooking"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
                                <Skeleton
                                    variant="rectangular"
                                    height="210px"
                                />
                            </Grid>
                            <Grid item xs={1} sm={1} md={1}>
                                <Skeleton
                                    variant="rectangular"
                                    height="210px"
                                />
                            </Grid>
                            <Grid item xs={1} sm={1} md={1}>
                                <Skeleton
                                    variant="rectangular"
                                    height="210px"
                                />
                            </Grid>
                        </>
                    ) : (
                        posts.map((post) => (
                            <Grid item xs={1} key={post.title}>
                                <ArticleCard article={post} />
                            </Grid>
                        ))
                    )}
                </Grid>
                <Divider />
            </Stack>
        </Layout>
    );
}
