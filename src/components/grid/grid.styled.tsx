import styled from "styled-components";

type GridProps = {
  direction?: string,
  justify?: string,
  order?: string,
  alignItems?: string,
  wrap?: string,
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  gap?: string,
  spacing?: string,
};

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

const gridSpacing = (props) => {
  // Fallback value if we can't get access to props
  // if (!props || !props.theme || !props.theme.grid.spacing) return '0px';
  // If no variant is specified, return the Grid Spacing in our theme
  // if (!props.spacing) return props.theme.grid.spacing;
  // Dynamically determine the Grid Spacing based on props
  let spacing;
  switch (props.spacing) {
    case '0':
      spacing = '0px';
      break;
    case '1':
      spacing = '4px';
      break;
    case '2':
      spacing = '8px';
      break;
    case '3':
      spacing = '12px';
      break;
    case '4':
      spacing = '16px';
      break;
    case '5':
      spacing = '20px';
      break;
    case '6':
      spacing = '24px';
      break;
    case '7':
      spacing = '28px';
      break;
    case '8':
      spacing = '32px';
      break;
    case '9':
      spacing = '36px';
      break;
    case '10':
      spacing = '40px';
      break;
    case '11':
      spacing = '44px';
      break;
    case '12':
      spacing = '48px';
      break;
    default:
      spacing = '0px';
      break;
  }
  return spacing;
};

export const StyledGrid = styled.div<GridProps>`
  padding: ${(props) => gridSpacing(props)};
`;

export const StyledGridFlexContainer = styled(StyledGrid)<GridProps>`
  display: flex;
  flex-direction:  ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap + 'px' ||  props.gap + 'px'};
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


