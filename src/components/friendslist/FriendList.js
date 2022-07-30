import PropTypes from "prop-types";
import FriendListItem from "./FriendsListItem";
import { List } from "./FriendList.styled";

export default function FriendsList({ friends }) {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem
          key={name}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
}

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
