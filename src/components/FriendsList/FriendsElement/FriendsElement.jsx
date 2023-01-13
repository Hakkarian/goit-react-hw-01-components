import css from './FriendsElement.module.css'
import PropTypes from 'prop-types';





const FriendsElement = ({avatar, name, isOnline}) => {
    return <>
        <span className={`${css.span} ${isOnline ? css.isOnline : null}`}>{isOnline}</span>
        <img className={css.pic} src={avatar} alt="User avatar" width="48" />
        <p className={css.text}>{name}</p>
    </>
}

FriendsElement.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
export default FriendsElement;