import React from 'react'
import styles from './Users.module.css'
import userPhoto from './../../assets/images/User.png'




    
    let Users = (props) => {

        let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
debugger
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        

           
        return <div>
                <div> 
                {pages.map(pag => {
                return <span className={props.currentPage === pag && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(pag);
                             }}>{pag}</span>
            })}
                 </div> 
                        
            
        
               
             { props.users.map( u => 
              <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed 
                        ?<button onClick = {()=>{
                             props.unfollow(u.id)
                            }}> Unfollow</button>
                        : <button onClick = {()=>{
                            props.follow(u.id)
                            }} >follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                         <div>{u.status}</div>
                   </span>
                   <span>
                         <div>{'u.location.country'} </div>
                         <div>{'u.location.city'} </div>
                         
                    </span>
                </span>
               </div>)
            
            }   
        </div>      
 }           
                      
export default Users
