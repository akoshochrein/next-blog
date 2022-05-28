import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled((props: { children: (string | number)[] }) => (
    <Container component="footer" {...props} />
))`
    display: flex;
    justify-content: space-around;
`;

export const Footer = () => {
    return (
        <FooterWrapper>
            © Akos Hochrein, {new Date().getFullYear()}
        </FooterWrapper>
    );
};
