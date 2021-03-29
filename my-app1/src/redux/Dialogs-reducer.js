const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
        newMessageBody: ''
    //}
}

const dialogsReducer = (state = initialsState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.Message_data.push({id:8, message: body});
            return state;
        default:
            return state;
    }
 

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
   ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

   export default dialogsReducer;