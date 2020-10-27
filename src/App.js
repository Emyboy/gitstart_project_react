import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import '@material/react-material-icon/dist/material-icon.css';
import SocketClient from 'socket.io-client';
import io from 'socket.io';

const socket = SocketClient(process.env.REACT_APP_API_URL);

function App() {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState(null);
  const [name, setName] = useState(null);
  
  useEffect(() => {
    socket.on('sendMessage', message => {
      console.log('message -->', message);
      setChat([...chat, message])
    })
  })

  const handleSubmit = () => {
    if(name && text){
      console.log('sent')
      const data = {
        message: text,
        username: name,
      }
      socket.emit('sendMessage', data);
      setChat([...chat, data])
      setText('')
    }else {
      alert('fill out the form')
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='container mt-3 mb-4'>
        <input placeholder='name' className='w-100 mb-2 p-2' value={name} onChange={e => setName(e.target.value)} /><br />
        <textarea rows='5' placeholder='message' className='w-100 p-2' value={text} onChange={e => setText(e.target.value)} /><br />
        <button className='btn btn-primary w-100' onClick={() => handleSubmit()}>Send Message</button>
        <hr />
        <ul class="list-group">
          {
            chat.map((val, i) => {
              return <li className="list-group-item " key={i}>
                <b>Username: </b><span>{val.username}</span>
                <p>{val.message}</p>
                </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
