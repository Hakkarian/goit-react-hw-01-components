import { PropTypes } from 'prop-types';
import user from 'jsons/user.json';

import ProfileElement from './ProfileElement';
import { ProfileCardCss, ProfileCardLinkCss, ProfileImgCss, ProfileLiCss, ProfileListCss, ProfileQuantityCss } from "./ProfileCard.styled"

const ProfileCard = ({ followers, views, likes }) => {
    return (
      <ProfileCardCss>
        <a href='/'>
        <ProfileElement
          avatar={user.avatar}
          tag={user.tag}
          username={user.username}
          location={user.location}
        />
        <ProfileListCss>
          <ProfileLiCss>
            <span >Followers</span>
            <ProfileQuantityCss >{followers}</ProfileQuantityCss>
          </ProfileLiCss>
          <ProfileLiCss>
            <span >Views</span>
            <ProfileQuantityCss >{views}</ProfileQuantityCss>
          </ProfileLiCss>
          <ProfileLiCss>
            <span >Likes</span>
            <ProfileQuantityCss >{likes}</ProfileQuantityCss>
          </ProfileLiCss>
          </ProfileListCss>
          </a>
      </ProfileCardCss>
    );
}

ProfileCard.propTypes = {
  
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  
}

export default ProfileCard;