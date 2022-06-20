import useSWR from "swr";
import { GetArticleResponseType } from "../../pages/api/v1/article";

const useArticle = (query: { slug: string }) => {
    const { data, error } = useSWR<GetArticleResponseType>(
        `/api/v1/article?slug=${query.slug}`
    );

    const loading = !data && !error;

    let article = data?.article;

    return {
        article,
        error,
        loading,
    };
};

export default useArticle;
