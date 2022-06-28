import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Paragraph = ({ children }) => (
    <Typography
        variant="body1"
        component="span"
        sx={{ "> div": { display: "inline" } }}
    >
        {children}
    </Typography>
);

const Heading2 = ({ children }) => (
    <Typography
        variant="h2"
        component="div"
        sx={{ "> div": { display: "inline" } }}
    >
        {children}
    </Typography>
);

export const Body = ({ article }) => (
    <Box>
        <ReactMarkdown
            components={{
                p: ({ children }) => <Paragraph>{children}</Paragraph>,
                h2: ({ children }) => <Heading2>{children}</Heading2>,
                img: ({ src, alt }) => (
                    <Box marginY={4} component="div" sx={{ display: "block" }}>
                        <Image width="2560" height="1600" src={src} alt={alt} />
                    </Box>
                ),
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            // eslint-disable-next-line react/no-children-prop
                            children={String(children).replace(/\n$/, "")}
                            // @ts-ignore
                            style={materialOceanic}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <Box sx={{ overflow: "auto" }}>
                            <code
                                className={className}
                                style={{ overflow: "scroll" }}
                                {...props}
                            >
                                {children}
                            </code>
                        </Box>
                    );
                },
            }}
        >
            {article.text}
        </ReactMarkdown>
    </Box>
);
