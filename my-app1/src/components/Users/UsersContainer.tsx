import React from 'react'
import { connect } from 'react-redux'
import {
    follow,
    unfollow,
    requestUsers,
} from '../../redux/Users-reducer'
import { getPageSizes, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers, getPortionSize } from '../../redux/Users-selectors'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    portionSize: number

}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
}

type OwnProps = {
    pageTitle: string
}

type propsType = MapStateToPropsType & MapDispatchToProps & OwnProps

class UsersContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <h2>{this.props.pageTitle}</h2>
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                portionSize={this.props.portionSize}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({




    users: getUsers(state),
    pageSize: getPageSizes(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: getPortionSize(state)


}
)



export default compose(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers,

    })
)(UsersContainer)