
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import {Route, BrowserRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Panorama from './components/Profile/Panorama/Panorama';







const App = (props) => {
  return (
   <BrowserRouter>
    <div className='app-wrapper' >
      <Header />
      <Nav />
      
      <div className = 'app-wrapper-content'>
        <Route exact path='/Dialogs' component={Dialogs} />
      
      <Route exact path='/Profile' component={Profile} />
      <Route exact path='/Music' component={Music} />
      <Route path='/Settings' component={Settings} />
      <Route path='/item1' component={Panorama} />
      <Route exact path='/Post_item/' component={Panorama} />
       </div>
    </div>
    </BrowserRouter>
    ); 
  
}
    
    
  


export default App;
