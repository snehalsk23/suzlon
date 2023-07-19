import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
