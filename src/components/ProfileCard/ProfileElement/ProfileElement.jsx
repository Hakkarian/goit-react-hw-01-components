import PropTypes from 'prop-types';
import { ProfileElementCss, ProfileImgWrapCss, ProfileNameCss, ProfileImgCss, ProfileInfoCss } from "./ProfileElement.styled";

const ProfileElement = ({avatar, username, tag, location}) => {
    return (
        <ProfileElementCss>
                <ProfileImgCss src={avatar} alt={username} />
        <ProfileNameCss>{username}</ProfileNameCss>
        <ProfileInfoCss>{tag}</ProfileInfoCss>
        <ProfileInfoCss>{location}</ProfileInfoCss>
      </ProfileElementCss>
    );
}

ProfileElement.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
}

export default ProfileElement;