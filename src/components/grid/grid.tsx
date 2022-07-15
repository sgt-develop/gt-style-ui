import * as React from "react";
import { StyledGrid, StyledGridFlexContainer, StyledGridFlexItem } from "./grid.styled";

export interface GridProps {
  variant: string;
  direction?: string,
  justify?: string,
  alignItems?: string, 
  wrap?: string,
  order?: string,
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  gap?: string,
  spacing?: string,
  children?: React.ReactNode;
}

function Grid ({ children, direction, justify, variant, order, xs, sm, md, lg, alignItems, wrap, spacing, gap }: GridProps): JSX.Element | null  {
    if (variant === 'grid') {
      return (<StyledGrid spacing={spacing}>{children}</StyledGrid>)
    }
    else if (variant === 'container') {
      return (<StyledGridFlexContainer direction={direction} justify={justify} alignItems={alignItems} wrap={wrap} gap={gap} spacing={spacing}>
              {children}
            </StyledGridFlexContainer>)
    }
    else if (variant === 'item') {
      return (<StyledGridFlexItem order={order} xs={xs} sm={sm} md={md} lg={lg}>
              {children}
            </StyledGridFlexItem>)
    }
    return null
};

Grid.defaultProps = {
  children: 'Grid',
  variant: 'Grid',
  wrap: 'wrap',
}

export default Grid;