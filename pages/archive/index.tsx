import { Layout } from "../../components";
import useArticleSummaries from "../../shared/hooks/useArticleSummaries";
import { Summary } from "../../shared/models";
import { format } from "date-fns";
import Link from "next/link";
import {
    List,
    ListItem,
    Stack,
    Typography,
    Link as MuiLink,
    Grid,
} from "@mui/material";
import { ArticleCard } from "../../components/shared/articleCard";

const postsPerYear = (posts: Summary[]) =>
    posts.reduce((acc, post) => {
        const formattedDate = format(new Date(post.publishedAt), "y");
        acc[formattedDate] = acc[formattedDate]
            ? [...acc[formattedDate], post]
            : [post];
        return acc;
    }, {});

export default function ArchivePage() {
    const { summaries: posts, loading } = useArticleSummaries({});
    const groupedPosts = postsPerYear(loading ? [] : posts);
    return (
        <Layout titleSuffix=" | Archive">
            <Stack component="main" direction="column">
                <Typography variant="h2">Articles from the past</Typography>
                {loading
                    ? "loading"
                    : Object.entries(groupedPosts)
                          .sort((p1, p2) => parseInt(p2[0]) - parseInt(p1[0]))
                          .map(([date, posts]: [string, Summary[]]) => {
                              return (
                                  <>
                                      <Typography variant="h3" marginBottom={2}>
                                          {date}
                                      </Typography>
                                      <Grid
                                          container
                                          spacing={{ xs: 2, md: 3 }}
                                          columns={{ xs: 1, md: 3 }}
                                          alignItems="stretch"
                                          marginBottom={3}
                                      >
                                          {posts.map((p) => (
                                              <Grid item xs={1} key={p.slug}>
                                                  <ArticleCard article={p} />
                                              </Grid>
                                          ))}
                                      </Grid>
                                  </>
                              );
                          })}
            </Stack>
        </Layout>
    );
}
