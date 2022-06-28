import useSWR from "swr";
import { GetSummariesResponseType } from "../../pages/api/v1/summary";

const useArticleSummaries = ({ take }: { take?: number }) => {
    const { data, error } = useSWR<GetSummariesResponseType>(
        `/api/v1/summary?take=${take}`
    );

    const loading = !data && !error;

    let summaries = data?.items;

    return {
        summaries,
        error,
        loading,
    };
};

export default useArticleSummaries;
