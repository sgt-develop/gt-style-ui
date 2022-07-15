import styled from "styled-components";

type ButtonProps = {
  color: string;
  background: string;
};

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  overflow: hidden;
  outline: none;
  background: none;
`;

export const ButtonContained = styled(StyledButton)<ButtonProps>`
  position: relative;
  overflow: hidden;
  outline: none;
  line-height: inherit;
  color: ${(props) => props.color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  border: 0px;
  border-radius: 24px;
  padding: 0px 16px;
  height: 36px;
  width: auto;
  min-width: 48px;
  background-color: ${(props) => props.background};
  background-position: center;
  transition: background 0.8s;
  :hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    background: ${(props) => props.background};
      radial-gradient(
        circle,
        transparent 1%,
        ${(props) => props.background}; 1%
      )
      center/15000%;
  }
  :active {
    background-color: #ffffff;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const ButtonOutlined = styled(StyledButton)<ButtonProps>`
  box-sizing: border-box;
  border: solid 1px;
  border-color: ${(props) => props.background};
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: ${(props) => props.color};
  background-color: transparent;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
  }
  :after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }
  :focus::before {
    opacity: 0.12;
  }
  :hover:focus::before {
    opacity: 0.16;
  }
  :active::after {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
  :disabled {
    color: ${(props) => props.color};
    background-color: transparent;
    cursor: initial;
  }
  :disabled::before {
    opacity: 0;
  }
  :disabled::after {
    opacity: 0;
  }
`;
