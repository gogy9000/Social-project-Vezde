import React from 'react'
import { connect } from 'react-redux'
import {  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/Users-reducer'
import Users from './Users' 
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)           
          .then(response => {
             this.props.toggleIsFetching(false)
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount) 
        })
    }   


onPageChanged = (pageNumber) => {
    this.props.setCurrentPage (pageNumber)
    this.props.toggleIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)

             this.props.setUsers(response.data.items)
             
        })
}
render() {
    
    return <>
    {this.props.isFetching ? <Preloader /> : null }
     <Users totalUsersCount={this.props.totalUsersCount}
        pagesSize={this.props.pagesSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow} />
        </>
  }
}

let mapStateToProps = (state) => {
    
    return{
        users: state.Users_Page.users,
        pageSize: state.Users_Page.pageSize,
        totalUsersCount: state.Users_Page.totalUsersCount,
        currentPage: state.Users_Page.currentPage,
        isFetching: state.Users_Page.isFetching
    }
}



export default connect( mapStateToProps,{ follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}  ) (UsersContainer)