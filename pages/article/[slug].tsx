import { Stack } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components";
import { Divider } from "../../components/shared/Divider";
import useArticle from "../../shared/hooks/useArticle";
import { Body } from "../../components/article/Body";
import { Footer } from "../../components/article/Footer";
import { Headline } from "../../components/article/Headline";

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const { article, loading } = useArticle({ slug: slug as string });
    return (
        <Layout titleSuffix={loading ? "" : ` | ${article.title}`}>
            {!loading &&
                (article ? (
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
                ) : (
                    <Stack component="div" direction="column">
                        Cound not find this article
                    </Stack>
                ))}
        </Layout>
    );
}
