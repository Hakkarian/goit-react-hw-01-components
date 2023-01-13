import { PropTypes } from "prop-types";

import ProfileElement from "./ProfileElement";
import {
  ProfileCss,
  ProfileLiCss,
  ProfileListCss,
  ProfileQuantityCss,
} from "./Profile.styled";

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <ProfileCss>
      <ProfileElement
        avatar={avatar}
        tag={tag}
        username={username}
        location={location}
      />
      <ProfileListCss>
        <ProfileLiCss>
          <span>Followers</span>
          <ProfileQuantityCss>{stats.followers}</ProfileQuantityCss>
        </ProfileLiCss>
        <ProfileLiCss>
          <span>Views</span>
          <ProfileQuantityCss>{stats.views}</ProfileQuantityCss>
        </ProfileLiCss>
        <ProfileLiCss>
          <span>Likes</span>
          <ProfileQuantityCss>{stats.likes}</ProfileQuantityCss>
        </ProfileLiCss>
      </ProfileListCss>
    </ProfileCss>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
};

export default Profile;
