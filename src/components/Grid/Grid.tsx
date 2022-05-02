import React from "react";
import { StyledGrid } from './Grid.styles';

export interface Props {
  height: string;
  color: string;
  background: string;
}

const Grid = ({ height,  color, background}: Props) => {
  return (
    <StyledGrid height={height} color={color} background={background}></StyledGrid>
  );
};

Grid.defaultProps = {
  height: "150",
  color: 'blue',
  background: 'red',
}

export default Grid;