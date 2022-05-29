import useSWR from "swr";
import { GetArticlesResponseType } from "../../pages/api/v1/article";

const useArticles = (query?: { slug?: string }) => {
    const { data, error } = useSWR<GetArticlesResponseType>("/api/v1/article");

    const loading = !data && !error;

    let articles = data?.items;
    if (query?.slug && !!articles) {
        articles = articles.filter((i) => i.slug === query?.slug);
    }

    return {
        articles,
        error,
        loading,
    };
};

export default useArticles;
