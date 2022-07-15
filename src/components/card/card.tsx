import * as React from 'react';
import { StyledCard } from './card.styled';

export interface CardProps {
    color: string;
    backgroundcolor: string;
    height: string; 
    children?: React.ReactNode;
  }

function Card ({ children, height, color, backgroundcolor }: CardProps): JSX.Element | null  {
  return (
    <StyledCard height={height} color={color} backgroundcolor={backgroundcolor}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
    backgroundcolor: 'blue',
    color: 'fff',
    height: '250'
  }

export default Card;