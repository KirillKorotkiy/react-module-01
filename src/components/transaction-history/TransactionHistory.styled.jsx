import styled from "@emotion/styled";

export const Table = styled.table`
  width: 870px;
  box-shadow: 0px 0px 2px 1px #c7ccd2;
  margin-bottom: 50px;
`;

export const TBody = styled.tbody`
  text-align: center;
`;

export const TCell = styled.td`
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  height: 50px;
  text-transform: uppercase;
`;

export const THeadCell = styled.th``;

export const TRaw = styled.tr`
  color: #7e8389;
  height: 50px;
  text-transform: capitalize;
  :nth-of-type(2n) {
    background-color: #ffffff;
  }
`;
