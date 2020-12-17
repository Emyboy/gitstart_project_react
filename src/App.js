import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import 'react-activity/dist/react-activity.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./redux/store/store";

import './App.css';
// import './App.css';
import Header from './components/Header/Header';
import Singup from './pages/Signup/Singup';
import Timeline from './pages/Timeline/Timesline';
import PageNotFound from './pages/PageNotFound';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Post from './pages/Post/Post';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App green-skin">
          <div className='core-content'>
            <div className='main-wrapper'>
              <div className="clearfix"></div>
              <BrowserRouter>
                <Header />
                <Switch>
                  <Route exact path="/" component={Timeline} />
                  <Route exact path="/signup" component={Singup} />
                  <Route exact path="/notifications" component={Notification} />
                  <Route exact path="/user/:username" component={Profile} />
                  <Route exact path="/post/:post_id" component={Post} />
                  <Route component={PageNotFound} />
                  {/* <Route component={SiteUnderConts} /> */}
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
