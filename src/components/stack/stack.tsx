import * as React from "react";
import { StyledStack } from "./stack.styled";

export interface StackProps {
  direction?: string,
  justify?: string,
  alignItems?: string, 
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  spacing?: string,
  children: React.ReactNode;
}

function Stack ({ children, direction, justify, xs, sm, md, lg, alignItems, spacing }: StackProps): JSX.Element | null  {
    return (
      <StyledStack direction={direction} spacing={spacing} justify={justify} alignItems={alignItems} xs={xs} sm={sm} md={md} lg={lg}>
        {children}
      </StyledStack>
    )
};

Stack.defaultProps = {
  children: 'Stack',
}

export default Stack;