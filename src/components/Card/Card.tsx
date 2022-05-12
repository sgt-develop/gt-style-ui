import React from "react";
import { StyledCard } from './Card.styles';

export interface CardProps {
  height: string;
  color: string;
  background: string;
}

const Card = ({ height,  color, background}: CardProps) => {
  return (
    <StyledCard height={height} color={color} background={background}></StyledCard>
  );
};

Card.defaultProps = {
  height: "150",
  color: 'blue',
  background: 'red',
}

export default Card;