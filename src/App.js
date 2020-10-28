import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css'; 
import './App.css';
import 'react-activity/dist/react-activity.css';
import Header from './components/Header/Header';
import Singup from './components/Signup/Singup';


function App() {
  return (
    <div className="App">
      <Header />
      <Singup />
    </div>
  );
}

export default App;
