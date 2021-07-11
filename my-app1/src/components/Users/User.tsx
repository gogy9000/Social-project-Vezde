
import userPhoto from '../../assets/images/User.png'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'
import { FC } from 'react'
import { UserType } from '../../types/types'

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let User: FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id} >
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={styles.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>
                        Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }} >
                        follow</button>}

            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
    )
}
export default User