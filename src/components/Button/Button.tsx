import * as React from "react";
import { ButtonContained, ButtonOutlined } from "./button.styled";

export interface ButtonProps {
  variant: string;
  color: string;
  background: string; 
  children: React.ReactNode;
}

function Button ({ children, color, background, variant }: ButtonProps): JSX.Element | null  {
    if (variant === 'contained') {
      return (<ButtonContained color={color} background={background}>
              {children}
            </ButtonContained>)
    }
    else if (variant === 'outlined') {
      return (<ButtonOutlined color={color} background={background}>
              {children}
            </ButtonOutlined>)
    }
    return null;
};

Button.defaultProps = {
  color: 'blue',
  background: 'yellow',
  variant: 'contained'
}

export default Button;








