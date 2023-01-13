import PropTypes from 'prop-types';
import FriendsElement from './FriendsElement';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
    return <section>
    <ul className={css.list}>
        {friends.map(friend => <li className={css.element} key={friend.id}>
            <FriendsElement avatar={friend.avatar}
            name={friend.name}
                isOnline={friend.isOnline} />
    </li>)}
        </ul>
        </section>
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }))

}

export default FriendsList;