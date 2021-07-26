import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import MessageList from '../MessageList/MessageList';
import './App.scss';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:3001');
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    return () => { socket.disconnect(); }
  }, []);

  return (
    <main className="App">
      <div>It's <time dateTime={response}>{ response }</time></div>
      <MessageList />
    </main>
  );
}

export default App;
