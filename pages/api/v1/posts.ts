import { createClient } from "contentful";
import { NextApiResponse } from "next";
import { Post } from "../../../shared/models";

export type GetPostsResponseType = { items: Post[] };

export default async function handler(
    _req: any,
    res: NextApiResponse<GetPostsResponseType>
) {
    const contentful = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY,
        space: process.env.CONTENTFUL_SPACE_ID,
    });

    const entries = await contentful.getEntries();

    const posts = entries.items
        .filter((e) => e.sys.contentType.sys.id === "blogPost")
        .map((e) => e.fields as Post)
        .sort(
            (p1, p2) => +new Date(p1.publishedAt) - +new Date(p2.publishedAt)
        );

    res.status(200).json({ items: posts });
}
