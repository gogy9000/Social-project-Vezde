import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
} from '../../redux/Users-reducer'
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader'
import {usersAPI} from "../../API/API";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUSers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })

    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUSers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })


    }

    render() {
debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.Users_Page.users,
        pageSize: state.Users_Page.pageSize,
        totalUsersCount: state.Users_Page.totalUsersCount,
        currentPage: state.Users_Page.currentPage,
        isFetching: state.Users_Page.isFetching,
        followingInProgress: state.Users_Page.followingInProgress

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)