import PropTypes from 'prop-types';
import { ProfileElementCss, ProfileNameCss, ProfileImgCss, ProfileInfoCss } from "./ProfileElement.styled";

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
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default ProfileElement;