import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRawInitData } from '@telegram-apps/sdk-react';

function App() {
  const initData = useRawInitData();
  const parsedInitData = initData ? JSON.parse(initData) : null;
  const user = parsedInitData?.user;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Проверка WebApp в Telegram
        </p>
        {user && (
          <div>
            <p>User ID: {user.id}</p>
            <p>First Name: {user.first_name}</p>
            {user.last_name && <p>Last Name: {user.last_name}</p>}
            {user.username && <p>Username: @{user.username}</p>}
            {user.language_code && <p>Language Code: {user.language_code}</p>}
          </div>
        )
        }
      </header>
    </div>
  );
}

export default App;
