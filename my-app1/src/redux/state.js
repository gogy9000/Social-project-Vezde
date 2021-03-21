//import Post1 from "../components/Posts/Post1/Posts1";

import { rerenderEntireTree } from "./render"



     

  let state = {
    Messages_Page: {

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
     },
     Profile_Page: {
      Post_item_data: [
        {id:1, Post_item: 'Hello Motherfucker!', Like:121},
        {id:2, Post_item: 'Hello motherfucker!', Like:123},
        {id:3, Post_item: 'Hello motherfucker!', Like:123},
       
                            
      ],
      
       New_Post_Text :   'saske'
     }
     
    }
     window.state= state

     export let AddPost = (Post_message) =>{
       //debugger
       let New_Post = {
         id: 5,
         Post_item: Post_message,
         Like: 0
       }
       state.Profile_Page.Post_item_data.push (New_Post)
       rerenderEntireTree (state);
     }

     export let updateNewPostText = (newText) =>{
      
      state.Profile_Page.New_Post_Text = newText
      rerenderEntireTree (state);
    }
     
     


 
  
   export default state ;
   