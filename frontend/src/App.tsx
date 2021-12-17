import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TopPage } from './components/pages/TopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
