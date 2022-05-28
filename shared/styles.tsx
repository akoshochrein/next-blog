import { css, Global } from "@emotion/react";

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                padding: 3rem 1rem;
                margin: 0;
                background: papayawhip;
                min-height: 100%;
                font-family: Fira Sans, sans-serif;
            }
        `}
    />
);
