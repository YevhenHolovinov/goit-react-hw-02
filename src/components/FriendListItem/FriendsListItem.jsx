import css from './friendListItem.module.css'

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <div className={css.card}>
		<img  src={avatar} alt='Avatar' width='48' />
		<p className={css.cardTitle}>{name}</p>
		{isOnline ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p>}
	</div>
    );
};