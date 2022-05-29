export type Avatar = {
    title: string;
    description: string;
    file: {
        url: string;
        details: { size: number; image: { width: number; height: number } };
        fileName: "1627924561847.jpeg";
        contentType: "image/jpeg";
    };
};

export type Author = {
    firstName: string;
    lastName: string;
    twitterHandle: string;
    linkedInHandle: string;
    githubHandle: string;
    avatar: Avatar;
};

export type Article = {
    title: string;
    slug: string;
    author: Author;
    publishedAt: string;
    summary: string;
    text: string;
};
