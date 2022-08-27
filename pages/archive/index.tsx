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
} from "@mui/material";

const postsPerYear = (posts: Summary[]) =>
    posts.reduce((acc, post) => {
        const formattedDate = format(new Date(post.publishedAt), "y MMM");
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
                    : Object.entries(groupedPosts).map(
                          ([date, posts]: [string, Summary[]]) => {
                              return (
                                  <>
                                      <Typography variant="h3">
                                          {date}
                                      </Typography>
                                      <List>
                                          {" "}
                                          {posts.map((p) => (
                                              <ListItem key={p.slug}>
                                                  <Link
                                                      href={`/article/${p.slug}`}
                                                      passHref
                                                  >
                                                      <MuiLink>
                                                          {p.title}
                                                      </MuiLink>
                                                  </Link>
                                              </ListItem>
                                          ))}
                                      </List>
                                  </>
                              );
                          }
                      )}
            </Stack>
        </Layout>
    );
}
