import { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../../shared/models";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export type GetArticleResponseType = { article: Article | null };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetArticleResponseType>
) {
    const client = new ApolloClient({
        uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
    });

    const articleResult = await client.query({
        query: gql`
            query {
                blogPostCollection(
                    where: { slug: "${req.query.slug}" }
                    limit: 1
                ) {
                    items {
                        title
                        slug
                        author {
                            ... on Author {
                                firstName
                                lastName
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
                        text
                    }
                }
            }
        `,
    });

    if (articleResult.data.blogPostCollection.items.length === 0) {
        res.status(404).json({ article: null });
    } else {
        res.status(200).json({
            article: articleResult.data.blogPostCollection.items[0],
        });
    }
}
