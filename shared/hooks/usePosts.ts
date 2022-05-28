import useSWR from "swr";
import { GetPostsResponseType } from "../../pages/api/v1/posts";

const usePosts = (query?: { slug?: string }) => {
    const { data, error } = useSWR<GetPostsResponseType>("/api/v1/posts");

    const loading = !data && !error;

    let posts = data?.items;
    if (query?.slug && !!posts) {
        posts = posts.filter((i) => i.slug === query?.slug);
    }

    return {
        posts,
        error,
        loading,
    };
};

export default usePosts;
