const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT'
 
let initialsState = {
    Profile_Page: {
    Post_item_data: [
        {id:1, Post_item: 'Hello Motherfucker!', Like:121},
        {id:2, Post_item: 'Hello motherfucker!', Like:123},
        {id:3, Post_item: 'Hello motherfucker!', Like:123},                   
      ],
      New_Post_Text: ''
     
}
}

const profileReducer = (state = initialsState , action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            {let New_Post = {
                id: 5,
                Post_item: state.Profile_Page.New_Post_Text,
                Like: 0
              }
              let stateCopy = {...state}
              stateCopy.Profile_Page.Post_item_data =[...state.Profile_Page.Post_item_data]
              stateCopy.Profile_Page.Post_item_data.push(New_Post)
              stateCopy.Profile_Page.New_Post_Text = ''
            //state.Profile_Page.Post_item_data.push (New_Post)
            //state.Profile_Page.New_Post_Text = " "
            return stateCopy}
        case UPDATE_NEW_POST_TEXT:
           { let stateCopy = {...state}
             stateCopy.Profile_Page.Post_item_data = [...state.Profile_Page.Post_item_data]
            stateCopy.Profile_Page.New_Post_Text = action.newText
            return stateCopy;}
        default:
            return state;
    }
 

}

export const AddPostActionCreator =() => ({type: ADD_POST})
export const  updateNewPostTextActionCreator =(text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text })

   export default profileReducer 