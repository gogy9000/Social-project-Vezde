
import './App.css';
import React, {Component} from 'react';
//import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import ProfileContainer from './components/Profile/profile';
import {Route, withRouter} from "react-router-dom";
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Panorama from './components/Profile/Panorama/Panorama';
import Profile1 from './components/Navbar/Profile./Profile1';
import UsersContainer from './components/Users/UsersContainer';
import Post1Container from '../src/components/Posts/Post1/Posts1-container'
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { connect } from 'react-redux';
import {initializeApp} from './redux/App-reducer';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';
 






class App extends Component  {

  componentDidMount() {
    this.props.initializeApp();
}
 
  render() { 
    if (!this.props.initialized) {
      return <Preloader />
    }
  return (

    <div className='app-wrapper' >
      <HeaderContainer />
      <Navbar />

    <div className = 'app-wrapper-content'>
      <Route exact path='/Dialogs' render={ () => <Dialogs  />} />

      <Route exact path='/profile/:userId?' render={() => <ProfileContainer   /> }  />
      <Route exact path='/profile/:userId?' render= {()=><Post1Container />} />

      <Route exact path='/Users' render={() => <UsersContainer />} />

      <Route exact path='/Music' render={ () => <Music />} />
      <Route exact path='/Settings' render={() =><Settings />} />
      <Route exact path='/item' render={()=><Panorama />} />
      <Route exact path='/Post_item/' render={()=><Panorama />} />
      <Route exact path='/description/' render={()=><Profile1 />} />
      <Route exact path='/Login' render={()=><Login/>} />

       </div>
    </div>


    );
  }
}
    
    
  
const mapStateToProps =(state) => ({
  initialized : state.app.initialized
})

export default compose(
withRouter,
connect(mapStateToProps,{initializeApp})) (App);
