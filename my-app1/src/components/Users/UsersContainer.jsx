import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress
} from '../../redux/Users-reducer'
import Users from './Users'

import Preloader from '../Preloader/Preloader'
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
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




export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        setCurrentPage,
        toggleFollowingProgress
    })
    )(UsersContainer)