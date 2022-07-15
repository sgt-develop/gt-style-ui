import styled from 'styled-components';

type ButtonProps = {
    background: string;
  };

export const StyledDividerList = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
export const StyledDividerInset = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  margin-left: 72px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
export const StyledDividerSubheader = styled.div`
  border: none;
  height: 1px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
  list-style: none;
`;
export const StyledDividerSubheaderList = styled.div`
  margin: 0 0 0 16px;
  padding: 5px;
  display: block;
  list-style: none;
  color: rgba(0, 0, 0, 0.54);
`;
export const StyledDividerSubheaderInset = styled.div`
  margin: 0 0 0 0px;
  padding: 5px;
  display: block;
  list-style: none;
  color: rgba(0, 0, 0, 0.54);
`;
export const StyledDividerMiddle = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  margin-left: 16px;
  margin-right: 16px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
export const StyledDividerVertical = styled.div`
  height: auto;
  align-self: stretch;
  width: 1px;
  border: none;
  flex-shrink: 0;
  background-color: #71100f;
`;