import React from "react";
import styled from "styled-components";

const Grid = ({
    children,
    margin,
    padding,
    width,
    is_flex,
    is_flex_column,
}) => {
    const styles = { margin, padding, width, is_flex, is_flex_column };
    return (
        <>
            <StyledGrid {...styles}>{children}</StyledGrid>
        </>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    is_flex_column: false,
    margin: false,
    padding: false,
    width: undefined,
};

const StyledGrid = styled.div`
    ${props =>
        props.is_flex
            ? `display:flex; justify-content:space-between; align-items:center;`
            : ""}
    ${props =>
        props.is_flex_column
            ? `display:flex; flex-direction:column; justify-content:center; `
            : ""}
    ${props => (props.margin ? `margin:${props.margin};` : "")}
    ${props => (props.padding ? `margin:${props.padding};` : "")}
    ${props => (props.width ? `width:${props.width}` : undefined)}
`;

export default Grid;
