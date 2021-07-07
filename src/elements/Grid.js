import React from "react";
import styled from "styled-components";

const Grid = ({ children, margin, padding, width, is_flex }) => {
    const styles = { margin, padding, width, is_flex };
    return (
        <>
            <StyledGrid {...styles}>{children}</StyledGrid>
        </>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    margin: false,
    padding: false,
    width: "100%",
};

const StyledGrid = styled.div`
    ${props =>
        props.is_flex
            ? `display:flex; justify-content:space-between; align-items:center;`
            : ""}
    ${props => (props.margin ? `margin:${props.margin};` : "")}
    ${props => (props.padding ? `margin:${props.padding};` : "")}
    width: ${props => props.width}
`;

export default Grid;
