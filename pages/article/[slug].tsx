import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components";
import useArticles from "../../shared/hooks/useArticles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { format } from "date-fns";

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const { articles, loading } = useArticles({ slug: slug as string });
    const article = articles[0];
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
            {!loading && (
                <Stack component="article" direction="column" gap={8}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h1">{article.title}</Typography>
                        <Box>
                            <Typography variant="h4">
                                {format(new Date(article.publishedAt), "PPP")}
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <ReactMarkdown
                            components={{
                                p({ children }) {
                                    return (
                                        <Typography variant="body1">
                                            {children}
                                        </Typography>
                                    );
                                },
                                code({
                                    node,
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }) {
                                    const match = /language-(\w+)/.exec(
                                        className || ""
                                    );
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            // eslint-disable-next-line react/no-children-prop
                                            children={String(children).replace(
                                                /\n$/,
                                                ""
                                            )}
                                            // @ts-ignore
                                            style={materialOceanic}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {article.text}
                        </ReactMarkdown>
                    </Box>
                </Stack>
            )}
        </Layout>
    );
}
