import * as React from 'react';
import { StyledTypography } from './typography.styled';

export interface TypographyProps {
    color: string;
    variant: string;
    alignself?: string; 
    children?: React.ReactNode;
  }

function Typography ({ children, variant, color, alignself }: TypographyProps): JSX.Element | null  {
  return (
    <StyledTypography variant={variant} color={color} alignself={alignself}>
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
    children: 'Typography',
    color: 'fff',
    variant: 'Typography'
  }

export default Typography;

