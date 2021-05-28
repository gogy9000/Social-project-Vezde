import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
} from '../../redux/Users-reducer'
import {getPageSizes,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress, getUsers} from './../../redux/Users-selectors'
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
        
        users: getUsers(state),
        pageSize: getPageSizes(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state) ,
        followingInProgress: getFollowingInProgress(state) 

    }
}



console.log ('контейнер юзер')
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers,
        setCurrentPage,
        toggleFollowingProgress
    })
    )(UsersContainer)