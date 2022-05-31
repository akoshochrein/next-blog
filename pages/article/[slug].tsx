import { Stack } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components";
import { Divider } from "../../components/shared/Divider";
import useArticles from "../../shared/hooks/useArticles";
import { Body } from "../../components/article/Body";
import { Footer } from "../../components/article/Footer";
import { Headline } from "../../components/article/Headline";

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const { articles, loading } = useArticles({ slug: slug as string });
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
            {!loading &&
                articles.map((article) => (
                    <Stack
                        key={article.slug}
                        component="article"
                        direction="column"
                        gap={2}
                    >
                        <Headline article={article} />
                        <Body article={article} />
                        <Footer article={article} />
                        <Divider />
                    </Stack>
                ))}
        </Layout>
    );
}
