const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let New_Post = {
                id: 5,
                Post_item: state.New_Post_Text,
                Like: 0
              }
            state.Post_item_data.push (New_Post)
            state.New_Post_Text = " "
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.New_Post_Text = action.newText
            return state;
        default:
            return state;
    }
 

}

export const AddPostActionCreator =() => ({type: ADD_POST})
export const  updateNewPostTextActionCreator =(text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text })

   export default profileReducer 