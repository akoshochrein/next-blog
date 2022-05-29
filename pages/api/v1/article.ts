import { createClient } from "contentful";
import { NextApiResponse } from "next";
import { Article, Avatar } from "../../../shared/models";
import { deepCopy } from "deep-copy-ts";

export type GetArticlesResponseType = { items: Article[] };

const filterForBlogPosts = (e: any) => e.sys.contentType.sys.id === "blogPost";

const patchContenfulUrls = (e: any) => {
    const ee = deepCopy(e);
    const url = e.fields.author.fields.avatar.fields.file.url;
    ee.fields.author.fields.avatar.fields.file.url = "https:" + url;
    return ee;
};

const flattenContentfulResponse = (e: any) => {
    const avatar = e.fields.author.fields.avatar.fields as Avatar;
    const author = { ...e.fields.author.fields, avatar };
    return {
        ...e.fields,
        author,
    };
};

const sortByDateDescending = (p1, p2) =>
    +new Date(p2.publishedAt) - +new Date(p1.publishedAt);

export default async function handler(
    _req: any,
    res: NextApiResponse<GetArticlesResponseType>
) {
    const contentful = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY,
        space: process.env.CONTENTFUL_SPACE_ID,
    });

    const entries = await contentful.getEntries();

    const articles = entries.items
        .filter(filterForBlogPosts)
        .map(patchContenfulUrls)
        .map(flattenContentfulResponse)
        .sort(sortByDateDescending);

    res.status(200).json({ items: articles });
}
