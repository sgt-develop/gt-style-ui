import styled from "styled-components";

type AppBarProps = {
  color?: string;
  background?: string;
  variant?: string;
};

export const StyledAppBarRegular = styled.div<AppBarProps>`
  transition: 0.3s;
  display: flex;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.typograph.color};
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  @media only screen and (min-width: 768px) {
    height: 64px;
  }
`;
export const StyledAppBarFixed = styled.div<AppBarProps>`
top: 0;
overflow: hidden;
  transition: 0.3s;
  display: flex;
  position: fixed;
  z-index: 4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.typograph.color};
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  @media only screen and (min-width: 768px) {
    height: 64px;
  }
`;
export const StyledAppBarProminent = styled.div<AppBarProps>`
  transition: 0.3s;
  display: flex;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 128px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.typograph.color};
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  @media only screen and (min-width: 768px) {
      height: 128px;
    }`;
export const StyledAppBarDense = styled.div<AppBarProps>`
top: 0;
overflow: hidden;
  transition: 0.3s;
  display: flex;
  position: fixed;
  z-index: 4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.typograph.color};
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  @media only screen and (min-width: 768px) {
    height: 64px;
  }
`;
export const StyledAppBarTransition = styled.div<AppBarProps>`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;