import { Grid, Card, CardContent, Typography } from "@mui/material";
import usePosts from "../../shared/hooks/usePosts";

export const Home = () => {
    const { posts, loading } = usePosts();

    return (
        <main>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, md: 3 }}
            >
                {!loading &&
                    posts.map((i) => (
                        <Grid item xs={1} sm={1} md={1} key={i.title}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5">
                                        {i.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </main>
    );
};
