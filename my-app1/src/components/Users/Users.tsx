import { useState, FC } from 'react'
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    portionSize: number
}




let Users: FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    let [nick, setNick] = useState('')


    let onSearch = (e: any) => {
        e.preventDefault()
        setNick(e.currentTarget.value)

    }


    return <div>
        <input placeholder={"введите ник"} onChange={onSearch} />
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={props.portionSize} />
        <div>
            {users.filter(item => (item.name.includes(nick))).map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow} />
            )}
        </div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={props.portionSize} />
    </div>



}

export default Users
