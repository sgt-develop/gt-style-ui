import React from "react";
import { StyledGrid, StyledGridFlexContainer, StyledGridFlexItem, StyledCssGridContainer, StyledCssGridItems } from './Grid.styles';

export interface Props {
    variant: string;
    spacing: string;
    direction: string;
    justify: string;
    alignitems: string;
    wrap: string;
    order: string;
    grow: string;
    shrink: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

const Grid = ({ variant, spacing, direction, justify, alignitems, wrap, order, grow, shrink, xs, sm, md, lg,}: Props) => {
    if (variant === 'Grid') {
        return <StyledGrid spacing={spacing}></StyledGrid>
      }
      else if (variant === 'FlexContainer') {
        return <StyledGridFlexContainer spacing={spacing} direction={direction} justify={justify} alignitems={alignitems} wrap={wrap}></StyledGridFlexContainer>
      }
      else if (variant === 'FlexItems') {
        return <StyledGridFlexItem spacing={spacing} xs={xs} sm={sm} md={md} lg={lg} order={order} grow={grow} shrink={shrink}></StyledGridFlexItem>
      }
      else if (variant === 'GridContainer') {
        return <StyledCssGridContainer spacing={spacing}></StyledCssGridContainer>
      }
      else if (variant === 'GridItems') {
        return <StyledCssGridItems spacing={spacing}></StyledCssGridItems>
      }
      else {
        return <StyledGrid spacing={spacing}></StyledGrid>
      }
};

Grid.defaultProps = {
    variant: "Grid",
    spacing: '0',
}

export default Grid;