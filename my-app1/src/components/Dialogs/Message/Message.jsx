import React from 'react';

const Messages = (props) => {
    return (
     <div>
       {props.message}
     </div>
)
}

const Message = (props) => {
    let Message_data= [
        { id:1, message:'Fuck you1' },
        { id:1, message:'Fuck you1' },
        { id:1, message:'Fuck you1' },
        { id:1, message:'Fuck you1' },
        { id:1, message:'Fuck you1' },
        { id:1, message:'Fuck you1' },


    ]
    return (
         <div>
             <Messages message={Message_data[0] .message }/>
             <Messages message={Message_data[0] .message }/>
             <Messages message={Message_data[0] .message }/>
             <Messages message={Message_data[0] .message }/>
             <Messages message={Message_data[0] .message }/>
             <Messages message={Message_data[0] .message }/>
              
         </div>       
     )
 }
 export default Message ;