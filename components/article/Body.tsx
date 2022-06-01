import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const Body = ({ article }) => (
    <Box>
        <ReactMarkdown
            components={{
                p({ children }) {
                    return <Typography variant="body1">{children}</Typography>;
                },
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
