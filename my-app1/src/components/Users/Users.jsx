import React from 'react'
import styles from './Users.module.css'
import userPhoto from './../../assets/images/User.png'
import { NavLink } from 'react-router-dom';
import * as axios from "axios";




    
    let Users = (props) => {

        let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        if (pages.length >= 10){
            pages.length =10
        }
        
        


        return <>
                <div> 
                {pages.map(p => {
                return <button className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</button>
            })}
                 </div> 
                        
            
        

             { props.users.map( u => 
              <div key={u.id}>
                
                    <div>
                        <NavLink to={'/profile/'+ u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto }
                             className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?<button disabled={props.followingInProgress.some(id=> id===u.id)} onClick = {()=>{
                            props.toggleFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "6c4b7d1a-3825-42c9-9166-9315565e1f90"
                                }
                            })
                                .then(response =>{
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)

                                })


                        }}> Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=> id===u.id)}  onClick = {()=>{
                                debugger
                                props.toggleFollowingProgress(true,u.id)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6c4b7d1a-3825-42c9-9166-9315565e1f90"
                                    }
                                })

                                    .then(response =>{
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)

                                    })

                            }} >follow</button>}
                        
                    </div>
                
                        <div>{u.name}</div>
                        <div>{u.status}</div>
               </div>)
            
            }   
        </>      
 }           

export default Users
