import React from "react";
import { ButtonContained, ButtonOutlined } from './Button.styles';

export interface Props {
  label: string;
  color: string;
  background: string;
  variant: string;
}

const Button = ({ label,  color, background, variant }: Props) => {
  if (variant === 'contained') {
    return (<ButtonContained color={color} background={background}>
              {label}
           </ButtonContained>)
  }
  else if (variant === 'outlined') {
    return (<ButtonOutlined color={color} background={background}>
            {label}
           </ButtonOutlined>)
  }
};

Button.defaultProps = {
  label: "Test",
  color: 'blue',
  background: 'red',
  variant: 'contained'
}

export default Button;