import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC,setCurrentPageAC, setTotalUsersCountAC } from '../../redux/Users-reducer'
import Users from './Users' 

let mapStateToProps = (state) => {
    
    return{
        users: state.Users_Page.users,
        pageSize: state.Users_Page.pageSize,
        totalUsersCount: state.Users_Page.totalUsersCount,
        currentPage: state.Users_Page.currentPage
    }
}
let mapDispatchToProps =(dispatch) =>

{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch (setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch (setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect( mapStateToProps, mapDispatchToProps ) (Users)