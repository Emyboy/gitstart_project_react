import React from 'react';
import './assets/css/style.css';

import './App.css';
// import './App.css';
import Header from './components/Header/Header';
import Singup from './pages/Signup/Singup';
import Timeline from './pages/Timeline/Timesline';


function App() {
  return (
    <div className="App">
      <Header />
      <Singup />
      {/* <Timeline /> */}
    </div>
  );
}

export default App;
