import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
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

            <main>content comes here</main>
        </Layout>
    );
}
