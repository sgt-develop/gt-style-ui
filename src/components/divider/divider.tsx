import Typography from "../typography/typography";

import { StyledDividerList,
    StyledDividerInset,
    StyledDividerSubheader,
    StyledDividerMiddle,
    StyledDividerVertical,
    StyledDividerSubheaderList,
    StyledDividerSubheaderInset, } from "./divider.styled";

export interface DividerProps {
  variant?: string;
  type?: string;
  subheader?: string; 
}

function Divider ({ variant, type, subheader }: DividerProps): JSX.Element | null  {
    if (variant === 'list') {
        if (type === 'subheader') {
          return <StyledDividerSubheader><StyledDividerSubheaderList><Typography variant="caption">{subheader}</Typography></StyledDividerSubheaderList></StyledDividerSubheader>;
        } else {
          return <StyledDividerList></StyledDividerList>;
        }
      }
      else if (variant === 'inset') {
        if (type === 'subheader') {
          return <StyledDividerInset><StyledDividerSubheaderInset><Typography variant="caption">{subheader}</Typography></StyledDividerSubheaderInset></StyledDividerInset>;
        } else {
          return <StyledDividerInset></StyledDividerInset>;
        }
      }
      else if (variant === 'middle') {
        return <StyledDividerMiddle></StyledDividerMiddle>;
      } else if (variant === 'vertical') {
        return <StyledDividerVertical></StyledDividerVertical>;
      } else {
        return <StyledDividerList></StyledDividerList>;
      } 
};

Divider.defaultProps = {
  variant: 'list'
}

export default Divider;