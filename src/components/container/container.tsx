import * as React from "react";
import { ContainerStyled, ContainerFluid } from "./container.styled";

export interface ContainerProps {
  variant: string;
  background?: string; 
  breakpoint?: string;
  children?: React.ReactNode;
}

function Container ({ children, background, variant, breakpoint }: ContainerProps): JSX.Element | null  {
    if (variant === 'fluid') {
      return (<ContainerFluid background={background} breakpoint={breakpoint}>
              {children}
            </ContainerFluid>)
    }
    else if (variant === 'container') {
      return (<ContainerStyled background={background} breakpoint={breakpoint}>
              {children}
            </ContainerStyled>)
    }
    return null;
};

Container.defaultProps = {
  background: 'fff',
  variant: 'fluid',
}

export default Container;