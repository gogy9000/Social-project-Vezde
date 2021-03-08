import React from 'react';

const Messages = (props) => {
  
    return (
     <div>
       {props.message}
     </div>
)
}

const Message = (props) => {
  debugger
 /* let Message_data= [
    { id:1, message:'Fuck you1' },
    { id:1, message:'Fuck you1' },
    { id:1, message:'Fuck you1' },
    { id:1, message:'Fuck you2' },
    { id:1, message:'Fuck you1' },
    { id:1, message:'Fuck you1' },
]*/

    let message_element = props.Message_data.map (m =><Messages message={m.message} />)
    return (
         <div>
            {message_element}
          
         </div>       
     )
 }
 export default Message ;