import React from 'react'
import styles from './Users.module.css'
import userPhoto from './../../assets/images/User.png'
import { NavLink } from 'react-router-dom';




    
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
                        {u.followed ?<button onClick = {()=>{props.unfollow(u.id)}}> Unfollow</button>: <button onClick = {()=>{props.follow(u.id)}} >follow</button>}
                        
                    </div>
                
                        <div>{u.name}</div>
                        <div>{u.status}</div>
               </div>)
            
            }   
        </>      
 }           
                      
export default Users
