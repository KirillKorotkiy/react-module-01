import PropTypes from "prop-types";
import { FriendItem } from "./FriendListItem.styled";
import { FriendStatus } from "./FriendListItem.styled";
import { FriendAvatar } from "./FriendListItem.styled";
import { FriendName } from "./FriendListItem.styled";


export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem >
      <FriendStatus>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

