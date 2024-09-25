import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';

function App() {


  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
