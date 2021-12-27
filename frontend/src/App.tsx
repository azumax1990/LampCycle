import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      </BrowserRouter>
    </LoginUserContext.Provider>
  );
}

export default App;
