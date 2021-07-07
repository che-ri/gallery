import React from "react";
import styled from "styled-components";

const Text = ({ children, type, color, bold, size }) => {
    const styles = { color, bold, size };
    if ((type = "span")) return <Span {...styles}>{children}</Span>;
    return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
    children: null,
    type: "p",
    color: "#fff",
    bold: false,
    size: "14px",
};

const P = styled.p`
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;
const Span = styled.span`
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;

export default Text;
