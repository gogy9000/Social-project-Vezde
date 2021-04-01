const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT'
 
let initialsState = {
   // Profile_Page: {
    Post_item_data: [
        {id:1, Post_item: 'Hello Motherfucker!', Like:121},
        {id:2, Post_item: 'Hello motherfucker!', Like:123},
        {id:3, Post_item: 'Hello motherfucker!', Like:123},                   
      ],
      New_Post_Text: 'df'
     
}
//}

const profileReducer = (state = initialsState , action) => {
    
    switch (action.type) {
        
        case ADD_POST:
            let New_Post = {
                id: 5,
                Post_item: state.New_Post_Text,
                Like: 0
              }
              return{
                  ...state,
                  Post_item_data: [...state.Post_item_data,New_Post],
                  New_Post_Text: ''
              }
              
        case UPDATE_NEW_POST_TEXT:
           { return {
               ...state,
               New_Post_Text: action.newText
           }
        }
        default:
            return state;
    
    }

}

export const AddPostActionCreator =() => ({type: ADD_POST})
export const  updateNewPostTextActionCreator =(text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text })

   export default profileReducer 