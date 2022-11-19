import Layout from "../components/layout";
import {
    Grid,
    Typography,
    Stack,
    Skeleton,
    Link as MUILink,
} from "@mui/material";
import { ArticleCard } from "../components/shared/articleCard";
import { Divider } from "../components/shared/Divider";
import useArticleSummaries from "../shared/hooks/useArticleSummaries";
import Link from "next/link";

export default function HomePage() {
    const { summaries: posts, loading } = useArticleSummaries({ take: 3 });
    return (
        <Layout>
            <Stack component="main" direction="column">
                <Typography variant="h2">Most recent articles</Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, md: 3 }}
                    alignItems="stretch"
                    marginBottom={3}
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
                <Stack direction="row" justifyContent="center">
                    <Link href="/archive" passHref>
                        <MUILink underline="always">
                            See articles from the past &#8594;
                        </MUILink>
                    </Link>
                </Stack>
                <Divider />
            </Stack>
        </Layout>
    );
}
