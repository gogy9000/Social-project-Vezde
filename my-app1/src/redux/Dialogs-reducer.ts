
const SEND_MESSAGE = 'SEND_MESSAGE';



let initialsState = {


    Dialogs_data: [
        { id: null as number | null, name: null as string | null },

    ],
    Message_data: [
        { id: null as number | null, message: null as string | null },

    ],

}
type initialsStateType = typeof initialsState


const dialogsReducer = (state = initialsState, action: any): initialsStateType => {

    switch (action.type) {




        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,

                Message_data: [...state.Message_data, { id: Math.random(), message: body }]
            }


        default:

            return state
    }


}
type sendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): sendMessageActionCreatorType => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;