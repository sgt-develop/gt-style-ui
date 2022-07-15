import styled from "styled-components";

type ContainerProps = {
  breakpoint?: string,
  background?: string,
};

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const ContainerStyled = styled.div<ContainerProps>`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${(props) => props.background };
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) { 
        max-width: 720px; 
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`;

export const ContainerFluid = styled.div<ContainerProps>`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${(props) => props.background };
`;

// @media only screen and (min-width: 1200px) {
//     ${(props) => props.breakpoint && getWidthString(props.breakpoint)};
//   }