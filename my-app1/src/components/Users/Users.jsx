import { React, useState } from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';






let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    let [nick, setNick] = useState('')


    let onSearch = (e) => {
        e.preventDefault()
        setNick(e.currentTarget.value)

    }


    return <div>
        <input placeholder={"введите ник"} onChange={onSearch} />
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {users.filter(item => (item.name.includes(nick))).map(u => <User user={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow} />
            )}
        </div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
    </div>



}

export default Users
