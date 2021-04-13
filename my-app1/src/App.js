
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import ProfileContainer from './components/Profile/profile';
import {Route} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Panorama from './components/Profile/Panorama/Panorama';
import Profile1 from './components/Navbar/Profile./Profile1';
import UsersContainer from './components/Users/UsersContainer';
import Post1Container from '../src/components/Posts/Post1/Posts1-container'
 






const App = () => {
 
  
  return (
   
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      
    <div className = 'app-wrapper-content'>
      <Route exact path='/Dialogs' render={ () => <Dialogs  />} />
      
      <Route exact path='/Profile/' render={() => <ProfileContainer   /> }  />
      <Route exact path='/Profile/' render= {()=><Post1Container />} />

      <Route exact path='/Users' render={() => <UsersContainer />} />

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
