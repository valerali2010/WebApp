import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLaunchParams, useRawLaunchParams, useRawInitData } from '@telegram-apps/sdk-react';
import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

function App() {
  const initData = useLaunchParams();
  const useRawLaunchParamsV = useRawLaunchParams();
  const useRawInitDataV = useRawInitData();
  const user = initData?.tgWebAppData?.user;
  const chat = initData?.tgWebAppData?.chat;
  return (
    <AppRoot>
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
            {chat?.title && <p>Chat Title: {chat?.title}</p>}
          </div>
        )
        }
      </header>
    </AppRoot>
  );
}

export default App;
