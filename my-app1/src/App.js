
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import {Route, BrowserRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Panorama from './components/Profile/Panorama/Panorama';
import Profile1 from './components/Navbar/Profile./Profile1';
//import { AddPost } from './redux/state';
 






const App = (props) => {
 //debugger
  
  return (
   
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      
    <div className = 'app-wrapper-content'>
      <Route exact path='/Dialogs' render={ () => <Dialogs /*store={props.store}*/  />} />
      
      <Route exact path='/Profile' render={() => <Profile store={props.store}  /*Profile_Page={props.state.Profile_Page} dispatch={(props.dispatch)}*/  />} />
      <Route exact path='/Music' render={ () => <Music />} />
      <Route exact path='/Settings' render={() =><Settings />} />
      <Route exact path='/item' render={()=><Panorama />} />
      <Route exact path='/Post_item/' render={()=><Panorama />} />
      <Route exact path='/description/' render={()=><Profile1 />} />
       </div>
    </div>
    
    
    ); 
  
}
    
    
  


export default App;
