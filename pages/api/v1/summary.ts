import { NextApiResponse } from "next";
import { Summary } from "../../../shared/models";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export type GetSummariesResponseType = { items: Summary[] };

export default async function handler(
    _req: any,
    res: NextApiResponse<GetSummariesResponseType>
) {
    const client = new ApolloClient({
        uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
    });

    const summariesResult = await client.query({
        query: gql`
            query {
                blogPostCollection {
                    items {
                        title
                        slug
                        author {
                            ... on Author {
                                firstName
                                lastName
                                bio
                                githubHandle
                                twitterHandle
                                linkedInHandle
                                avatar {
                                    url
                                }
                            }
                        }
                        publishedAt
                        summary
                        sys {
                            id
                        }
                    }
                }
            }
        `,
    });

    res.status(200).json({
        items: summariesResult.data.blogPostCollection.items,
    });
}
