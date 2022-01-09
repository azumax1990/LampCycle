import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BikePost } from './components/pages/BikePost';
import { SignInPage } from './components/pages/SignInPage';
import { SignUpPage } from './components/pages/SignUpPage';

import { TopPage } from './components/pages/TopPage';
import { useCurrentUser } from './hooks/useCurrentUser';
import { User } from './types';

export type LoginUserContextType = {
  loading:        boolean;
  setLoading:     Dispatch<SetStateAction<boolean>>;
  currentUser:    User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

function App() {
  const [loading, setLoading]         = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const { getCurrentUser } = useCurrentUser()

  useEffect(() => {
    getCurrentUser()
    ?.then((res) => {
      if (res.status === 200) {
        setCurrentUser(res.data.user)
      } else {
        alert("ユーザーを取得出来ませんでした")
      }
    })
    .catch((res) => console.log(res))
  }, [])
  return (
    <LoginUserContext.Provider value={{ loading, setLoading, currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />}/>
        </Routes>
        <Routes>
          <Route path="/sign_in" element={<SignInPage />}/>
        </Routes>
        <Routes>
          <Route path="/" element={<TopPage />}/>
        </Routes>
        <Routes>
          <Route path="/bike_post" element={<BikePost />}/>
        </Routes>
      </BrowserRouter>
    </LoginUserContext.Provider>
  );
}

export default App;
