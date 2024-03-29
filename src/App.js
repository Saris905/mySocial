import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  return (
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path='/dialogs'
                         render={ () => <Dialogs store={props.store} /> }/>

                  <Route path='/profile'
                         render={ () => <Profile dispatch={props.dispatch}
                                                 state={props.state.profilePage}/> }/>
                  <Route path='/news' component={News}/>
                  <Route path='/music' component={Music}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
  );
}

export default App;

