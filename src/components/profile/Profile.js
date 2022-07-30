import PropTypes from "prop-types";
import { ProfileCard } from "./Profile.styled";
import { Description } from "./Profile.styled";
import { Avatar } from "./Profile.styled";
import { Name } from "./Profile.styled";
import { Tag } from "./Profile.styled";
import { Location } from "./Profile.styled";
import { Stats } from "./Profile.styled";
import { List } from "./Profile.styled";
import { Label } from "./Profile.styled";
import { Quantity } from "./Profile.styled";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <List>
          <Label>Followers: </Label>
          <Quantity>{followers}</Quantity>
        </List>
        <List>
          <Label>Views: </Label>
          <Quantity>{views}</Quantity>
        </List>
        <List>
          <Label>Likes: </Label>
          <Quantity>{likes}</Quantity>
        </List>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
