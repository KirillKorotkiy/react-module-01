import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px #c7ccd2;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  margin-left: 5px;
  background-color: ${(prop) => {
    switch (prop.children) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "blue";
    }
  }};
`;

export const FriendAvatar = styled.img`
  padding: 5px 0px;
  width: 48px;
  margin-right: 10px;
`;
export const FriendName = styled.p``;
