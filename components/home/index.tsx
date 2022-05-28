import { Box, Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import usePosts from "../../shared/hooks/usePosts";

export const Home = () => {
    const { posts, loading } = usePosts();

    return (
        <main>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 3 }}
                alignItems="stretch"
            >
                {!loading &&
                    posts.map((i) => (
                        <Grid item xs={1} sm={1} md={1} key={i.title}>
                            <Card variant="outlined" sx={{ height: "100%" }}>
                                <CardContent sx={{ height: "100%" }}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        height="100%"
                                        gap={2}
                                    >
                                        <Box>
                                            <Typography variant="h5">
                                                {i.title}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                {i.summary}
                                            </Typography>
                                        </Box>
                                        <Typography variant="caption">
                                            {i.publishedAt}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </main>
    );
};
