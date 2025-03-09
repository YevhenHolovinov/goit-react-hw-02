import css from './FriendList.module.css';

import   FriendsListItem from '../FriendListItem/FriendsListItem';

export default function FriendList ({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnline}) =>(
                <li key={id}>
                    <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
};