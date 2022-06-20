export type Avatar = {
    url: string;
};

export type Author = {
    firstName: string;
    lastName: string;
    twitterHandle: string;
    linkedInHandle: string;
    githubHandle: string;
    avatar: Avatar;
    bio: string;
};

export type Article = {
    title: string;
    slug: string;
    author: Author;
    publishedAt: string;
    summary: string;
    text: string;
};

export type Summary = {
    title: string;
    slug: string;
    author: Author;
    publishedAt: string;
    summary: string;
    sys: {
        id: string;
    };
};
