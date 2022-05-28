import Head from "next/head";
import Layout from "../components/layout";
import usePosts from "../shared/hooks/usePosts";

export default function Home() {
    const { posts, loading } = usePosts();
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

            <main>{!loading && posts.map((i) => i.title)}</main>
        </Layout>
    );
}
