import styled from 'styled-components';

type GridProps = {
    variant: string;
    spacing: string;
    direction: string;
    justify: string;
    alignitems: string;
    wrap: string;
    order: string;
    grow: string;
    shrink: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;

};

const gridSpacing = ({ spacing }: GridProps) => {
  // Fallback value if we can't get access to props
  //if (!props || !props.theme || !props.theme.grid.spacing) return '0px';
  if (!spacing) return '0px';
  // If no variant is specified, return the Grid Spacing in our theme
  //if (!spacing) return props.theme.grid.spacing;
  if (!spacing) return '0px';
  // Dynamically determine the Grid Spacing based on props
  let spacing1;
  switch (spacing) {
    case '0':
      spacing1 = '0px';
      break;
    case '1':
      spacing1 = '4px';
      break;
    case '2':
      spacing1 = '8px';
      break;
    case '3':
      spacing1 = '12px';
      break;
    case '4':
      spacing1 = '16px';
      break;
    case '5':
      spacing1 = '20px';
      break;
    case '6':
      spacing1 = '24px';
      break;
    case '7':
      spacing1 = '28px';
      break;
    case '8':
      spacing1 = '32px';
      break;
    case '9':
      spacing1 = '36px';
      break;
    case '10':
      spacing1 = '40px';
      break;
    case '11':
      spacing1 = '44px';
      break;
    case '12':
      spacing1 = '48px';
      break;
    default:
      spacing1 = '0px';
      break;
  }
  return spacing;
};
const gridFlexContainerJustifyContent = ({ justify }:GridProps) => {
  // Fallback value if we can't get access to props
  if (!justify) return 'flex-start';
  // Dynamically determine the Grid Spacing based on props
  let justify1;
  switch (justify) {
    case 'flex-start':
      justify1 = 'flex-start';
      break;
    case 'flex-end':
      justify1 = 'flex-end';
      break;
    case 'center':
      justify1 = 'center';
      break;
    case 'space-between':
      justify1 = 'space-between';
      break;
    case 'space-around':
      justify1 = 'space-around';
      break;
    case 'space-evenly':
      justify1 = 'space-evenly';
      break;
    default:
      justify1 = 'flex-start';
      break;
  }
  return justify;
};
const gridFlexContainerDirection = ({direction} :GridProps) => {
  // Fallback value if we can't get access to props
  if (!direction) return 'row';
  // Dynamically determine the Grid Spacing based on props
  let direction1;
  switch (direction) {
    case 'row':
      direction1 = 'row';
      break;
    case 'row-reverse':
      direction1 = 'row-reverse';
      break;
    case 'column':
      direction1 = 'column';
      break;
    case 'column-reverse':
      direction1 = 'column-reverse';
      break;
    default:
      direction1 = 'row';
      break;
  }
  return direction;
};

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  //let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const StyledGrid = styled.div<GridProps>`
  padding: ${(props) => gridSpacing(props)};
`;
export const StyledGridFlexContainer = styled.div<GridProps>`
  display: flex;
  flex-direction: ${(props) => gridFlexContainerDirection(props)};
  justify-content: ${(props) => gridFlexContainerJustifyContent(props)};
  flex-wrap: wrap;
`;
export const StyledGridFlexItem = styled.div<GridProps>`
  order: ${(props) => props.order};
  ${(props) => (props.xs ? getWidthString(props.xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${(props) => props.sm && getWidthString(props.sm)};
  }
  @media only screen and (min-width: 992px) {
    ${(props) => props.md && getWidthString(props.md)};
  }
  @media only screen and (min-width: 1200px) {
    ${(props) => props.lg && getWidthString(props.lg)};
  }
`;
export const StyledCssGridContainer = styled.div<GridProps>`
  padding: ${(props) => gridSpacing(props)};
`;
export const StyledCssGridItems = styled.div<GridProps>`
  padding: ${(props) => gridSpacing(props)};
`;


