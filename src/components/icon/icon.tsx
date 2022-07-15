import * as React from 'react';
import Icons from '../../helpers/icons/icons';
import { StyledIcon } from './icon.styled';

export interface IconProps {
    color: string;
    icon?: string;
    size: string;
  }

function Icon ({ icon, color, size }: IconProps): JSX.Element | null  {
  return (
    <StyledIcon color={color} size={size}>{icon && <AllIcons name={icon} />}</StyledIcon>
  );
};

Icon.defaultProps = {
    color: '000',
    size: 'normal',
  }

const mystyle = {
    height: "100%",
    width: "100%",
  }; 

const AllIcons = ({ name }) => {
    // If icon name value doesn't match Icons object keys then return null
    if (Icons[name] === undefined) return null;
    // If icon found, return the icon in a span element
    const Icon = Icons[name];
    return (
      <span className="button__icon">
        <Icon style={mystyle} />
      </span>
    );
  };

export default Icon;