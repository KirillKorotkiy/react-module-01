import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  width: 250px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px 1px #c7ccd2;
  margin: 60px 0;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #9da8b4;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin: 30px 0px;
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 20px;
  color: black;
`;

export const Tag = styled.p`
     margin-bottom: 10px;
`
export const Location = styled.p`
        margin-bottom: 30px;

`
export const Stats = styled.ul`
     display: flex;
    justify-content: space-around;
    color: #9da8b4;
`

export const List = styled.li`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    width: 100%;
    background-color: #f3f6f9;
    border: 0.5px solid #e4e9f0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
`

export const Label = styled.span`
    font-size: 14px;
`
export const Quantity = styled.span`
      font-weight: 700;
    color: black;
    font-size: 16px;
`