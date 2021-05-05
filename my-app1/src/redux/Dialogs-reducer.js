
const SEND_MESSAGE = 'SEND_MESSAGE';

//debugger

let initialsState = {
    //Messages_Page: {

        Dialogs_data: [
          { id: 1, name: 'Motherfucker2'},
          { id: 2, name: 'motherfucker5'},
          { id: 3, name: 'motherfucker6'},
          { id: 4, name: 'motherfucker35'},
          { id: 5, name: 'motherfucker36'},
          { id: 6, name: 'motherfucker878'},
        ],
        Message_data: [
          { id:1, message:'Fuck you1' },
          { id:2, message:'Fuck you1' },
          { id:3, message:'Fuck you1' },
          { id:4, message:'Fuck you2' },
          { id:5, message:'Fuck you1' },
          { id:6, message:'Fuck you1' }, 
        ],

    }
//}

const dialogsReducer = (state = initialsState, action) => {
    
    switch (action.type) {

             
            
            
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return{
                ...state,

                Message_data: [...state.Message_data,{id:8, message: body}]
            }
            
            
        default:
            
            return state
    }
 

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


   export default dialogsReducer;