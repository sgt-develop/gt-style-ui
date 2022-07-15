import * as React from "react";
import { useState, useEffect } from 'react';
import { StyledAppBarRegular, StyledAppBarFixed, StyledAppBarProminent, StyledAppBarDense, StyledAppBarTransition } from "./appbar.styled";

export interface AppBarProps {
  variant: string;
  color?: string;
  background?: string; 
  children?: React.ReactNode;
}

function AppBar ({ children, variant, color }: AppBarProps): JSX.Element | null  {
    const [show, chanceshow] = useState(true)
    const [scrollPos, chancScrollPos] = useState(0)
  
    const handleScroll = () => {
      chancScrollPos(document.body.getBoundingClientRect().top)
      chanceshow(document.body.getBoundingClientRect().top > scrollPos)
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, [handleScroll])
  
    useEffect(() => {
      return () => {
        window.removeEventListener("scroll", handleScroll, false)
      };
    }, [])
  
    if (variant === 'regular') {
      return <StyledAppBarRegular variant={variant} color={color}>{children}</StyledAppBarRegular>
    }
    else if (variant === 'fixed') {
      return <StyledAppBarFixed variant={variant} color={color}>{children}</StyledAppBarFixed>
    }
    else if (variant === 'prominent') {
      return <StyledAppBarProminent variant={variant} color={color}>{children}</StyledAppBarProminent>
    }
    else if (variant === 'dense') {
      return <StyledAppBarTransition><StyledAppBarDense className={show ? "active" : "hidden"} variant={variant} color={color}>{children}</StyledAppBarDense></StyledAppBarTransition>
    }
    else {
      return <StyledAppBarRegular variant={variant} color={color}>{children}</StyledAppBarRegular>
    }
};

AppBar.defaultProps = {
  color: 'blue',
  background: 'yellow',
  variant: 'regular',
  children: 'AppBar'
}

export default AppBar;