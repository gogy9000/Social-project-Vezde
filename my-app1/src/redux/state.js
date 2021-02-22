//import Post1 from "../components/Posts/Post1/Posts1";



      

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
        {id:4, Post_item: 'Hello motherfucker!', Like:123},
        {id:5, Post_item: 'Hello motherfucker!', Like:123},
        {id:6, Post_item: 'Hello motherfucker!', Like:123},
        {id:7, Post_item: 'Hello motherfucker!', Like:123},
        {id:8, Post_item: 'Hello motherfucker!', Like:123},
        {id:9, Post_item: 'Hello motherfucker!', Like:123},                     
      ]
     }
    }

     export let AddPost = (Post_message) =>{
       //debugger
       let New_Post = {
         id: 5,
         Post_item: Post_message,
         Like: 0
       }
       state.Profile_Page.Post_item_data.push (New_Post)
       
     }
     
     /*img_massive: [
        {id:1, src="https://sun1-22.userapi.com/s/v1/ig2/6jWOn15joy0OGsx5R__OZrfKrdISYm14FKiC-6VMeYo6JH12lf2c0H6POrsNzezDKknOqA2b1ls7X2Z4rriFrQ8B.jpg?size=100x0&quality=96&crop=3,139,1436,1436&ava=1"},
        {id:2,  src="https://sun1-93.userapi.com/s/v1/ig2/ywaLnngPrnk84YdhVbLea2-dSOM2jHiwmnrWRB2tIJLe00nNmjrCRGQZAvc1dw7x75oNWK6GCTP8N_lF1M_QVsBY.jpg?size=100x0&amp;quality=96&amp;crop=4,4,2155,2155&amp;ava=1" },
       ]
     
    }*/


 
  
   export default state;
   