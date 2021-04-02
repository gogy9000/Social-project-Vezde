import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0 ) {
        props.setUsers(
             [
                {
                    id:1,
                     photoURL:'http://archilab.online/images/1/123.jpg',
                      followed: false,  fullName: ' Motherfucker!',
                       status:'fuck you are!',
                        location: {city:'Minsk', country: 'belarus'}
                    },
                {
                    id:2,
                     photoURL:'https://i.imgur.com/9NAj0jq.jpg', 
                     followed: true,  fullName: ' Motherfucker!',
                      status:'fuck you are!', location: {city:'Minsk',
                       country: 'belarus'}
                    },
                {
                    id:3,
                     photoURL:'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
                      followed: false,
                        fullName: ' Motherfucker!',
                         status:'fuck you are!',
                          location: {city:'Minsk', country: 'belarus'}
                        },
                {
                    id:4,
                     photoURL:'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg',
                      followed: true,
                        fullName: ' Motherfucker!',
                         status:'fuck you are!',
                          location: {city:'Minsk', country: 'belarus'}
                        },
                {
                    id:5,
                     photoURL:'https://ic.pics.livejournal.com/moscowfix/44589829/1232478/1232478_original.jpg',
                      followed: false,
                        fullName: ' Motherfucker!',
                         status:'fuck you are!',
                          location: {city:'Minsk',
                           country: 'belarus'}},
        
              ],
        )
    }
    debugger
    return <div>
        {
            props.users.map( u => 
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto} />
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
                        <div>{u.fullName}</div>
                         <div>{u.status}</div>
                   </span>
                   <span>
                         <div>{u.location.country} </div>
                         <div>{u.location.city} </div>
                         
                    </span>
                </span>






            </div>)
        } 
    </div>
}  
    
    
export default Users