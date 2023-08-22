import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer v">
      <div className="joinInnerContainer">
        <h1  className="heading">Realtime Chat Application </h1>
        <h2>Try it out right now!</h2>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Enter</button>
        </Link>
      </div>
      
      <footer>
        <h3>
          Designed & Maintained with ❤ by Sunny &copy; 2023 All rights reserved
        </h3>
      </footer>
    </div>
  );
}