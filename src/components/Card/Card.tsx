import React from "react";
import { StyledCard } from './Card.styles';

export interface Props {
  height: string;
  color: string;
  background: string;
}

const Card = ({ height,  color, background}: Props) => {
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