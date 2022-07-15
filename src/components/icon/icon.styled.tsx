import styled from 'styled-components';

type IconProps = {
    color: string;
    size: string;
  };

export const StyledIcon = styled.div<IconProps>`
  color: ${(props) => props.color};
  height: ${(props) =>
  (props.size === 'mini' && '40px') || (props.size === 'normal' && '56px') || '56px'};
  width: ${(props) =>
  (props.size === 'mini' && '40px') || (props.size === 'normal' && '56px') || '56px'};
`;